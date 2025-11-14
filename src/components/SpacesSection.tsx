import { Users, MapPin } from "lucide-react";
import { toast } from "sonner";

// Base URL de Cloudinary (TU cuenta)
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dkoshgzxo/image/upload';

// Datos de los espacios con las URLs de Cloudinary optimizadas
// Parámetros Cloudinary usados:
// c_fill,w_800,h_1200: Recorta y redimensiona a 800x1200 para el card.
// q_auto,f_auto: Optimización automática de calidad y formato (servirá WebP si es posible).
const spaces = [
  {
    id: 1,
    name: "Terraza Exterior",
    description: "Vista al jardín con ambiente natural",
    capacity: "2-6 personas",
    image: `${CLOUDINARY_BASE}/c_fill,w_800,h_1200,q_auto,f_auto/v1763095976/Terraza_Exterior_nbvq0v.jpg`,
    features: ["Exterior", "Vista jardín"],
    type: "terraza"
  },
  {
    id: 2,
    name: "Barra Principal",
    description: "Vista directa a la cocina",
    capacity: "2-4 personas",
    image: `${CLOUDINARY_BASE}/c_fill,w_800,h_1200,q_auto,f_auto/v1763095976/Barra_Principal_zbf50c.png`,
    features: ["Vista cocina", "Casual"],
    type: "barra"
  },
  {
    id: 3,
    name: "Salón Principal",
    description: "Ambiente elegante e íntimo",
    capacity: "4-8 personas",
    image: `${CLOUDINARY_BASE}/c_fill,w_800,h_1200,q_auto,f_auto/v1763095975/Sal%C3%B3n_Principal_vdo1tt.jpg`,
    features: ["Elegante", "Íntimo"],
    type: "salon"
  },
  {
    id: 4,
    name: "Sala Privada",
    description: "Perfecta para eventos especiales",
    capacity: "6-12 personas",
    image: `${CLOUDINARY_BASE}/c_fill,w_800,h_1200,q_auto,f_auto/v1763095975/Sala_Privada_rovwvu.jpg`,
    features: ["Eventos", "Privacidad"],
    type: "privada"
  }
];

const SpacesSection = () => {
  const scrollToReservation = (tableType: string, tableName: string) => {
    const reservationSection = document.getElementById("reservation");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
      toast.info(`Reservando ${tableName}`, {
        description: "Completa el formulario de reserva abajo",
        duration: 3000,
      });
    }
  };

  return (
    <section id="spaces" className="bg-ocean-blue py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Encuentra tu Espacio Perfecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada rincón diseñado para tu mejor experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, index) => (
            <div
              key={space.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[3/4] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => scrollToReservation(space.type, space.name)}
              role="button"
              tabIndex={0}
              aria-label={`Reservar ${space.name} - ${space.capacity}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToReservation(space.type, space.name);
                }
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-dark/40 to-ocean-dark" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-teal-fresh/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {space.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {space.description}
                </p>
                
                {/* Capacity */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Users size={16} />
                  <span>{space.capacity}</span>
                </div>

                {/* Features */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {space.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-teal-fresh/30 text-teal-fresh px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className="bg-amber-warm hover:bg-amber-warm/90 text-white w-full py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToReservation(space.type, space.name);
                  }}
                  aria-label={`Reservar mesa en ${space.name}`}
                >
                  Reservar Esta Mesa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;