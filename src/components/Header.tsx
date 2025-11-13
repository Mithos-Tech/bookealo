import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-ocean-dark/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo-camaron.png" 
                  alt="Bookéalo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-white group-hover:text-gradient-ocean transition-colors">
                Bookéalo
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-muted-foreground hover:text-white transition-colors text-sm font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-muted-foreground hover:text-white transition-colors text-sm font-medium"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("spaces")}
                className="text-muted-foreground hover:text-white transition-colors text-sm font-medium"
              >
                Ambientes
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-white transition-colors text-sm font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-white transition-colors text-sm font-medium"
              >
                Contacto
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("reservation")}
                className="bg-amber-warm hover:bg-amber-warm/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Reservar Mesa
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-ocean-dark/95 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white text-2xl font-serif font-semibold hover:text-amber-warm transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-white text-2xl font-serif font-semibold hover:text-amber-warm transition-colors"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("spaces")}
                className="text-white text-2xl font-serif font-semibold hover:text-amber-warm transition-colors"
              >
                Ambientes
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white text-2xl font-serif font-semibold hover:text-amber-warm transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white text-2xl font-serif font-semibold hover:text-amber-warm transition-colors"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("reservation")}
                className="bg-amber-warm hover:bg-amber-warm/90 text-white px-8 py-4 rounded-xl text-lg font-semibold mt-4"
              >
                Reservar Mesa
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
