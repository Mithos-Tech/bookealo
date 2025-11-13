import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Ana Rodríguez",
    role: "Cliente frecuente",
    date: "Hace 2 semanas",
    rating: 5,
    text: "El mejor ceviche que he probado en Lima. La presentación es impecable y el pescado fresco se nota en cada bocado. ¡Altamente recomendado!",
    avatar: "AR"
  },
  {
    id: 2,
    name: "Carlos Vargas",
    role: "Cliente frecuente",
    date: "Hace 1 mes",
    rating: 5,
    text: "Ambiente perfecto para una cita especial. El servicio es excepcional y cada plato supera las expectativas. La terraza es simplemente hermosa.",
    avatar: "CV"
  },
  {
    id: 3,
    name: "María Gonzales",
    role: "Cliente frecuente",
    date: "Hace 3 semanas",
    rating: 5,
    text: "Los ceviches están a otro nivel. Se nota la calidad de los ingredientes y la dedicación del chef. Volveré sin duda una y otra vez.",
    avatar: "MG"
  }
];

const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-ocean-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          
          {/* Google Reviews Badge */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-warm fill-amber-warm" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9/5</span>
          </div>
          <p className="text-muted-foreground">(120+ reseñas en Google)</p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1.333rem)] min-w-0"
              >
                <div className="glass-dark rounded-2xl p-8 hover:shadow-2xl hover:shadow-teal-fresh/10 transition-all relative h-full">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-fresh/20" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-warm fill-amber-warm" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-muted-foreground text-base leading-relaxed italic mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-fresh to-amber-warm flex items-center justify-center border-2 border-teal-fresh/30 flex-shrink-0">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-muted-foreground/70 text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-teal-fresh/30 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
