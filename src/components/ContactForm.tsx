import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, XCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { sendContactMessage } from '@/lib/api/contact';

const contactSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(50, "Máximo 50 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().regex(/^9\d{8}$/, "Ingresa un teléfono válido (9 dígitos)"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(500, "Máximo 500 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const messageValue = watch("message") || "";

  const onSubmit = async (data: ContactFormData) => {
  setIsLoading(true);

  try {
    const result = await sendContactMessage({
      name: data.name,
      email: data.email,
      phone: data.phone || '', // Usa el campo phone, o vacío si es opcional
      message: data.message,
    });

    if (result.success) {
      toast.success('¡Mensaje enviado!', {
        description: 'Te contactaremos pronto'
      });
      reset(); // Resetear formulario
    } else {
      toast.error('Error al enviar mensaje', {
        description: result.error || 'Intenta nuevamente'
      });
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('Error inesperado');
  } finally {
    setIsLoading(false);
  }
};

  const getFieldIcon = (fieldName: keyof ContactFormData) => {
    if (!touchedFields[fieldName]) return null;
    if (errors[fieldName]) {
      return <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />;
    }
    return <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <Label htmlFor="name" className="text-white mb-2 block">
          Nombre <span className="text-red-400">*</span>
        </Label>
        <div className="relative">
          <Input
            id="name"
            {...register("name")}
            placeholder="Tu nombre completo"
            className={`bg-ocean-surface border-gray-700 text-white pr-10 focus:ring-2 ${
              errors.name ? "border-red-500 ring-2 ring-red-500" : "focus:ring-teal-fresh"
            }`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {getFieldIcon("name")}
        </div>
        {errors.name && (
          <p id="name-error" className="text-red-600 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="text-white mb-2 block">
          Email <span className="text-red-400">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="tu@email.com"
            className={`bg-ocean-surface border-gray-700 text-white pr-10 focus:ring-2 ${
              errors.email ? "border-red-500 ring-2 ring-red-500" : "focus:ring-teal-fresh"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {getFieldIcon("email")}
        </div>
        {errors.email && (
          <p id="email-error" className="text-red-600 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <Label htmlFor="phone" className="text-white mb-2 block">
          Teléfono <span className="text-red-400">*</span>
        </Label>
        <div className="relative">
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-ocean-surface/50 text-gray-400">
              +51
            </span>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="999888777"
              className={`rounded-l-none bg-ocean-surface border-gray-700 text-white pr-10 focus:ring-2 ${
                errors.phone ? "border-red-500 ring-2 ring-red-500" : "focus:ring-teal-fresh"
              }`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {getFieldIcon("phone")}
          </div>
        </div>
        {errors.phone && (
          <p id="phone-error" className="text-red-600 text-sm mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message" className="text-white mb-2 block">
          Mensaje <span className="text-red-400">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Cuéntanos tu consulta o comentario..."
          rows={5}
          className={`bg-ocean-surface border-gray-700 text-white resize-none focus:ring-2 ${
            errors.message ? "border-red-500 ring-2 ring-red-500" : "focus:ring-teal-fresh"
          }`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error message-counter" : "message-counter"}
        />
        <div className="flex justify-between items-center mt-1">
          <div>
            {errors.message && (
              <p id="message-error" className="text-red-600 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>
          <p
            id="message-counter"
            className={`text-sm ${messageValue.length > 500 ? "text-red-500" : "text-gray-500"}`}
          >
            {messageValue.length}/500 caracteres
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading || !isValid}
        className="w-full bg-teal-fresh hover:bg-teal-fresh/90 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-teal-fresh/50"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar Mensaje
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
