import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ocean-dark border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo-camaron.png" 
                  alt="Bookéalo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Bookéalo
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Sabores auténticos del mar peruano en el corazón de San Isidro
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-fresh transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-fresh transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-muted-foreground hover:text-white transition-colors text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block text-muted-foreground hover:text-white transition-colors text-sm"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-white transition-colors text-sm"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-white transition-colors text-sm"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Contacto Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Av. Conquistadores 456, San Isidro, Lima</span>
              </div>
              <a
                href="tel:+51999888777"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+51 999 888 777</span>
              </a>
              <a
                href="mailto:hola@bookealo.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>hola@bookealo.com</span>
              </a>
            </div>
          </div>

          {/* Horarios Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Clock size={18} />
              Horarios
            </h4>
            <div className="space-y-1 text-muted-foreground text-sm">
              <p>Mar - Jue: 12:00 - 23:00</p>
              <p>Vie - Sáb: 12:00 - 01:00</p>
              <p>Domingo: 12:00 - 22:00</p>
              <p className="text-red-400">Lunes: Cerrado</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-sm text-center">
              © 2025 Bookéalo — by{' '}
              <a 
                href="https://inspyrio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-fresh hover:text-teal-400 transition-colors font-semibold"
                aria-label="Visitar Inspyrio"
              >
                Inspyrio
              </a>
              . Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
