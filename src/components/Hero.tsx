import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ceviche.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ceviche fresco peruano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/90 via-ocean-dark/40 to-ocean-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Eyebrow */}
          <p className="text-amber-warm text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in">
            Cevichería Contemporánea
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight animate-slide-up">
            Del Mar a
            <br />
            <span className="text-gradient-ocean">tu Mesa</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mt-6 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Sabores auténticos del Pacífico peruano en el corazón de San Isidro
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              onClick={() => scrollToSection("menu")}
              className="bg-amber-warm hover:bg-amber-warm/90 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
            >
              Explorar Menú
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("reservation")}
              variant="outline"
              className="glass border-2 border-white/80 text-white px-8 py-6 rounded-xl text-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all"
            >
              Reservar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("reservation")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
