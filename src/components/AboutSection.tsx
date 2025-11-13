import { Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-ocean-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <p className="text-amber-warm text-sm uppercase tracking-[0.3em] mb-4">
              Nuestra Historia
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Pasión por el Mar Peruano
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundado en 2018, Bookéalo nace de la pasión por rescatar los sabores 
                auténticos del mar peruano y presentarlos con un toque contemporáneo 
                que respeta la tradición.
              </p>
              <p>
                Nuestro chef, con más de 15 años de experiencia en la alta cocina 
                peruana, selecciona personalmente cada ingrediente del mercado 
                pesquero cada mañana.
              </p>
              <p>
                Cada plato cuenta una historia, cada bocado es un viaje por la 
                costa peruana.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-4xl font-bold text-teal-fresh mb-2">6+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-fresh mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Pescado fresco diario</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-fresh mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Recetas tradicionales</p>
              </div>
            </div>

            {/* Chef Highlight */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-fresh to-amber-warm flex items-center justify-center border-2 border-teal-fresh/30 flex-shrink-0">
                  <span className="text-white font-bold text-xl">CM</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Chef Carlos Mendoza</h4>
                  <p className="text-muted-foreground text-sm">Chef Ejecutivo</p>
                </div>
                <Award className="w-8 h-8 text-amber-warm ml-auto" />
              </div>
              <p className="text-teal-fresh italic text-sm mt-4">
                "La frescura es nuestra firma, la tradición nuestra inspiración"
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="animate-slide-up">
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-teal-fresh/20 mb-6">
              <img
                src="/src/assets/about-main.jpg"
                alt="Chef Carlos Mendoza en la cocina de Bookéalo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden hover-lift">
                <img
                  src="/src/assets/about-ingredients.jpg"
                  alt="Ingredientes frescos del mercado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden hover-lift">
                <img
                  src="/src/assets/about-kitchen.jpg"
                  alt="Preparación en la cocina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden hover-lift">
                <img
                  src="/src/assets/about-plating.jpg"
                  alt="Emplatado de ceviche"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden hover-lift">
                <img
                  src="/src/assets/about-ambiance.jpg"
                  alt="Ambiente del restaurante"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
