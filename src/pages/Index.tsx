import { useEffect, useState } from "react";
import { MessageCircle, ChevronUp, MapPin } from "lucide-react";
import { SplashScreen } from "@/components/SplashScreen";
import { StructuredData } from "@/components/StructuredData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReservationWidget from "@/components/ReservationWidget";
import MenuSection from "@/components/MenuSection";
import SpacesSection from "@/components/SpacesSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Mostrar contenido si el splash ya fue mostrado
    const splashShown = sessionStorage.getItem('splash-shown');
    if (splashShown === 'true') {
      setContentVisible(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  useEffect(() => {
    // Scroll to top button logic
    const scrollButton = document.getElementById("scroll-to-top");
    
    const handleScroll = () => {
      if (scrollButton) {
        if (window.scrollY > 500) {
          scrollButton.classList.remove("opacity-0", "pointer-events-none");
          scrollButton.classList.add("opacity-100");
        } else {
          scrollButton.classList.add("opacity-0", "pointer-events-none");
          scrollButton.classList.remove("opacity-100");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/51999888777?text=Hola,%20tengo%20una%20consulta%20sobre%20Bookéalo",
      "_blank"
    );
  };

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      <StructuredData />
      <div 
        className={`min-h-screen w-full bg-ocean-dark transition-opacity duration-700 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'opacity' }}
      >
        <Header />
      
      <main>
        <Hero />
        
        {/* Spacing between hero and widget */}
        <div className="h-32" />
        
        <ReservationWidget />
        
        {/* Additional spacing */}
        <div className="h-20" />
        
        <MenuSection />
        
        <SpacesSection />
        
        <AboutSection />
        
        <ExperienceSection />
        
        <TestimonialsSection />
        
        <GallerySection />

        {/* Contact Section */}
        <section id="contact" className="bg-ocean-dark py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                Contáctanos
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos aquí para atenderte
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
              {/* Left Column - Contact Form */}
              <div className="glass-dark rounded-2xl p-8 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  Envíanos un Mensaje
                </h3>
                <div className="flex-1">
                  <ContactForm />
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="relative min-h-[600px] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl bg-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3!2d-77.03!3d-12.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzI0LjAiUyA3N8KwMDEnNDguMCJX!5e0!3m2!1ses!2spe!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Bookéalo en San Isidro, Lima"
                  aria-label="Mapa de ubicación del restaurante"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ring-2 ring-white/10 hover:ring-white/20"
        aria-label="Chat en WhatsApp"
      >
        <MessageCircle size={20} strokeWidth={2.5} />
      </button>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-24 right-8 z-40 bg-teal-fresh/80 hover:bg-teal-fresh text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl opacity-0 pointer-events-none transition-all"
        aria-label="Volver arriba"
      >
        <ChevronUp size={24} />
      </button>
      </div>
    </>
  );
};

export default Index;
