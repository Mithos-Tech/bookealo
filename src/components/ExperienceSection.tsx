import { Fish, ChefHat, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Fish,
    title: "Pescado Fresco",
    description: "Directamente del puerto cada mañana, garantizando la mejor calidad"
  },
  {
    icon: ChefHat,
    title: "Chef Experimentado",
    description: "15 años de trayectoria en alta cocina peruana"
  },
  {
    icon: Sparkles,
    title: "Ambiente Acogedor",
    description: "Diseño contemporáneo que resalta lo mejor del Perú"
  },
  {
    icon: Award,
    title: "Servicio Premium",
    description: "Atención personalizada y profesional"
  }
];

const ExperienceSection = () => {
  return (
    <section className="bg-gradient-to-b from-ocean-blue to-ocean-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué Bookéalo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Más que un restaurante, una experiencia gastronómica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-teal-fresh/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-fresh/30 transition-colors">
                  <Icon className="w-10 h-10 text-teal-fresh group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
