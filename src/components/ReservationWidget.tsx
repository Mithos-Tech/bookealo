import { useState } from "react";
import { Calendar, Clock, Users, MapPin, Search, CheckCircle, Loader2, Download, MessageCircle, QrCode, X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { createReservation } from "@/lib/api/reservations";

// Validation schema
const reservationSchema = z.object({
  date: z.string().min(1, "Selecciona una fecha válida"),
  time: z.string().min(1, "Selecciona una hora"),
  partySize: z.string().min(1, "Selecciona el número de personas"),
  tableType: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const ReservationWidget = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [reservationCode, setReservationCode] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      date: "",
      time: "",
      partySize: "",
      tableType: "any",
    },
  });

  const watchedValues = watch();

  const onSubmit = async (data: ReservationFormData) => {
  setIsLoading(true);

  try {
    // LLamada a la API de Supabase
    const result = await createReservation({
      // Nota: Tu formulario no incluye name, email, phone.
      // Si la función createReservation de tu guía lo requiere,
      // deberás modificar el esquema Zod y el formulario para incluirlos.
      // Por ahora, usamos solo los campos disponibles:
      customer_name: 'Invitado', // Placeholder si no tienes campo de nombre
      customer_email: 'invitado@bookealo.com', // Placeholder
      customer_phone: '000000000', // Placeholder
      date: data.date,
      time: data.time,
      party_size: parseInt(data.partySize), // Usamos partySize en lugar de guests
      table_type: data.tableType || 'any',
      special_requests: '', // Asumimos que no hay campo de notas aún
    });

    if (result.success && result.data) {
      // Usar los datos de la respuesta real
      setReservationCode(result.data.confirmation_code);
      setShowSuccessModal(true);
      
      // Toast de éxito
      toast.success('¡Reserva confirmada!', {
        description: `Código: ${result.data.confirmation_code}`
      });

      // Resetear formulario
      reset();
    } else {
      // Error de la API de Supabase
      toast.error('Error al crear reserva', {
        description: result.error || 'Intenta nuevamente'
      });
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('Error inesperado', {
      description: 'Por favor, intenta nuevamente'
    });
  } finally {
    setIsLoading(false);
  }
};

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    reset();
  };

  const handleDownloadPDF = () => {
    toast.info("Descargando PDF...", {
      description: "Función disponible próximamente",
    });
  };

  const handleShareWhatsApp = () => {
    const message = `Mi reserva Bookéalo - Código: ${reservationCode}`;
    window.open(
      `https://wa.me/51999888777?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const getTableTypeName = (type: string) => {
    const types: Record<string, string> = {
      any: "Cualquiera",
      terraza: "Terraza",
      barra: "Barra",
      salon: "Salón",
      privado: "Sala Privada",
    };
    return types[type] || "Cualquiera";
  };

  return (
    <>
      <section id="reservation" className="relative -mt-20 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass-dark rounded-3xl p-6 md:p-8 shadow-2xl glow-teal">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Reserva tu Mesa
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar size={16} />
                    Fecha
                  </label>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          type="date"
                          {...field}
                          min={new Date().toISOString().split('T')[0]}
                          className={`bg-ocean-blue border-border text-white rounded-xl px-4 py-3 focus:border-amber-warm focus:ring-2 ring-amber-warm/50 ${
                            errors.date ? "border-red-500 ring-2 ring-red-500" : ""
                          }`}
                        />
                        {errors.date && (
                          <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock size={16} />
                    Hora
                  </label>
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className={`bg-ocean-blue border-border text-white rounded-xl px-4 py-3 ${
                            errors.time ? "border-red-500 ring-2 ring-red-500" : ""
                          }`}>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="19:00">7:00 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
                            <SelectItem value="21:00">9:00 PM</SelectItem>
                            <SelectItem value="22:00">10:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.time && (
                          <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* Party Size */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Users size={16} />
                    Personas
                  </label>
                  <Controller
                    name="partySize"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className={`bg-ocean-blue border-border text-white rounded-xl px-4 py-3 ${
                            errors.partySize ? "border-red-500 ring-2 ring-red-500" : ""
                          }`}>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "persona" : "personas"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.partySize && (
                          <p className="text-red-400 text-sm mt-1">{errors.partySize.message}</p>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* Table Type */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin size={16} />
                    Tipo de Mesa
                  </label>
                  <Controller
                    name="tableType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="bg-ocean-blue border-border text-white rounded-xl px-4 py-3">
                          <SelectValue placeholder="Cualquiera" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Cualquiera</SelectItem>
                          <SelectItem value="terraza">Terraza</SelectItem>
                          <SelectItem value="barra">Barra</SelectItem>
                          <SelectItem value="salon">Salón</SelectItem>
                          <SelectItem value="privado">Sala Privada</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-amber-warm hover:bg-amber-warm/90 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Buscando...
                  </>
                ) : (
                  <>
                    <Search className="mr-2" size={20} />
                    Buscar Disponibilidad
                  </>
                )}
              </Button>

              {/* Availability Indicator */}
              <p className="text-center text-sm text-emerald-400 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                12 mesas disponibles hoy
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal - Fully Responsive with Perfect Contrast */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-[95vw] sm:max-w-xl md:max-w-2xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6 md:p-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/30 blur-2xl rounded-full animate-pulse" />
                <CheckCircle className="relative w-16 h-16 sm:w-20 sm:h-20 text-emerald-500 animate-scale-in drop-shadow-lg" />
              </div>
            </div>

            {/* Title */}
            <DialogHeader className="mb-4 sm:mb-6">
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
                ¡Reserva Confirmada! 🎉
              </DialogTitle>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                Tu mesa está lista y te esperamos
              </p>
            </DialogHeader>

            {/* Confirmation Code */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-teal-200">
              <p className="text-xs sm:text-sm text-gray-700 text-center mb-2 font-medium">
                Código de Confirmación
              </p>
              <p className="text-2xl sm:text-3xl font-mono font-bold text-teal-600 text-center tracking-wider">
                {reservationCode}
              </p>
              <p className="text-xs text-gray-600 text-center mt-2">
                Presenta este código al llegar
              </p>
            </div>

            {/* QR Code Placeholder */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-36 h-36 sm:w-48 sm:h-48 border-4 border-teal-200 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-teal-50 shadow-inner">
                <QrCode className="w-24 h-24 sm:w-32 sm:h-32 text-teal-400" />
              </div>
            </div>

            {/* Reservation Summary */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 space-y-2 sm:space-y-3 border border-gray-200">
              <div className="flex flex-wrap items-center gap-2 text-gray-800 text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-semibold">Fecha:</span>
                <span className="text-gray-700">{watchedValues.date ? new Date(watchedValues.date).toLocaleDateString('es-PE', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : ''}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-semibold">Hora:</span>
                <span className="text-gray-700">{watchedValues.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-semibold">Personas:</span>
                <span className="text-gray-700">{watchedValues.partySize} {Number(watchedValues.partySize) === 1 ? 'persona' : 'personas'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="font-semibold">Mesa:</span>
                <span className="text-gray-700">{getTableTypeName(watchedValues.tableType || 'any')}</span>
              </div>
            </div>

            {/* Action Buttons with Perfect Contrast */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={handleDownloadPDF}
                className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border-2 border-gray-600 shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Descargar PDF
              </Button>
              <Button
                onClick={handleShareWhatsApp}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Compartir WhatsApp
              </Button>
            </div>

            <Button
              onClick={handleCloseModal}
              className="w-full mt-2 sm:mt-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base py-5"
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReservationWidget;
