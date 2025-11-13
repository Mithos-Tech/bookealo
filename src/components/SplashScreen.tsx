import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión (sessionStorage en lugar de localStorage)
    const splashShown = sessionStorage.getItem('splash-shown');
    
    if (splashShown === 'true') {
      setShow(false);
      return;
    }

    // Marcar como listo para mostrar
    setIsReady(true);

    // Iniciar fade out a los 4 segundos
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Ocultar completamente a los 4.5 segundos
    const hideTimer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('splash-shown', 'true');
      onComplete?.();
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('splash-shown', 'true');
      onComplete?.();
    }, 500);
  };

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden
                 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'} ${isReady ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        pointerEvents: fadeOut ? 'none' : 'auto',
        background: 'linear-gradient(135deg, #093040 0%, #1E5359 50%, #458C85 100%)',
        willChange: 'opacity'
      }}
    >
      {/* Gradiente overlay superior para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      
      {/* Ondas decorativas de fondo - Optimizadas */}
      <div className="absolute inset-0 opacity-40 will-change-transform">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#458C85]/50 to-transparent 
                        animate-float-slow rounded-full blur-3xl scale-150 transform-gpu" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#1E5359]/40 to-transparent 
                        animate-float-delayed rounded-full blur-3xl scale-150 transform-gpu" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center animate-scale-up px-4 will-change-transform">
        {/* Logo del camarón con glow effect mejorado */}
        <div className="relative mb-6 sm:mb-8 md:mb-12">
          <div className="absolute inset-0 blur-[60px] sm:blur-[80px] bg-[#458C85]/60 rounded-full animate-pulse-slow scale-150 will-change-transform" />
          <div className="absolute inset-0 blur-[40px] sm:blur-[50px] bg-teal-400/40 rounded-full animate-pulse-slow scale-125 will-change-transform" />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
            <img 
              src="/logo-camaron.svg" 
              alt="Bookéalo Logo"
              className="w-full h-full object-contain drop-shadow-2xl transform-gpu"
              loading="eager"
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(69, 140, 133, 0.9)) drop-shadow(0 0 60px rgba(20, 184, 166, 0.5))',
                animation: 'pulse-slow 3s ease-in-out infinite, float 4s ease-in-out infinite',
                willChange: 'transform'
              }}
            />
          </div>
        </div>
        
        {/* Nombre del restaurante */}
        <div className="text-center space-y-2 sm:space-y-3 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <h1 className="font-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.2em] sm:tracking-[0.3em] 
                         drop-shadow-2xl animate-fade-in px-2"
              style={{ 
                textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(20,184,166,0.2)',
                animationDelay: '0.5s',
                animationFillMode: 'both'
              }}>
            BOOKÉALO
          </h1>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 animate-fade-in" 
               style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[hsl(173,80%,40%)] to-transparent" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[hsl(173,80%,40%)] shadow-lg shadow-[hsl(173,80%,40%)]/50" />
            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[hsl(173,80%,40%)] to-transparent" />
          </div>
          
          <p className="text-white/90 text-base sm:text-lg md:text-xl tracking-[0.3em] sm:tracking-[0.5em] font-light animate-fade-in"
             style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
            CEVICHERÍA
          </p>
          
          <p className="text-[hsl(173,80%,60%)] text-xs sm:text-sm md:text-base tracking-wider sm:tracking-widest font-light animate-fade-in px-4"
             style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
            Sabores del Pacífico Peruano
          </p>
        </div>
      </div>

      {/* Burbujas decorativas flotantes - Más sofisticadas y responsivas */}
      <div className="hidden sm:block absolute top-[15%] right-[10%] md:right-[20%] w-16 md:w-20 h-16 md:h-20 rounded-full 
                      bg-gradient-to-br from-[hsl(38,95%,51%)]/30 to-transparent 
                      animate-float blur-xl" 
           style={{ animationDelay: '0.2s' }} />
      <div className="hidden sm:block absolute bottom-[25%] left-[10%] md:left-[15%] w-12 md:w-16 h-12 md:h-16 rounded-full 
                      bg-gradient-to-br from-[hsl(173,80%,40%)]/40 to-transparent 
                      animate-float-delayed blur-lg" 
           style={{ animationDelay: '0.5s' }} />
      <div className="hidden md:block absolute top-[40%] right-[15%] md:right-[25%] w-10 md:w-12 h-10 md:h-12 rounded-full 
                      bg-gradient-to-br from-white/20 to-transparent 
                      animate-float-slow blur-md" 
           style={{ animationDelay: '0.8s' }} />
      <div className="hidden lg:block absolute bottom-[35%] right-[30%] md:right-[35%] w-20 md:w-24 h-20 md:h-24 rounded-full 
                      bg-gradient-to-br from-[hsl(14,78%,63%)]/25 to-transparent 
                      animate-float blur-2xl" 
           style={{ animationDelay: '0.3s' }} />
      <div className="hidden sm:block absolute top-[30%] left-[15%] md:left-[25%] w-10 md:w-14 h-10 md:h-14 rounded-full 
                      bg-gradient-to-br from-[hsl(173,80%,40%)]/30 to-transparent 
                      animate-float-delayed blur-lg" 
           style={{ animationDelay: '1s' }} />

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 
                   text-white/50 text-xs sm:text-sm hover:text-white/80
                   transition-all duration-300 underline-offset-4 hover:underline
                   tracking-wider animate-fade-in px-4"
        style={{ animationDelay: '1.5s', animationFillMode: 'both' }}
        aria-label="Saltar introducción"
      >
        Saltar intro
      </button>
    </div>
  );
}
