import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import cevicheClasico from "@/assets/ceviche-clasico.jpg";
import tiraditoNikkei from "@/assets/tiradito-nikkei.jpg";
import cevicheMixto from "@/assets/ceviche-mixto.jpg";
import arrozMariscos from "@/assets/arroz-mariscos.jpg";
import chicharronCalamar from "@/assets/chicharron-calamar.jpg";
import causaLimena from "@/assets/causa-limena.jpg";

const dishes = [
  {
    id: 1,
    name: "Ceviche Clásico",
    description: "Pescado fresco del día marinado en limón, ají limo, cebolla morada y cilantro",
    price: "S/ 45",
    image: cevicheClasico,
    tags: ["Tradicional", "Picante", "Fresco"],
  },
  {
    id: 2,
    name: "Tiradito Nikkei",
    description: "Pescado en finas láminas con salsa nikkei, sésamo y microgreens",
    price: "S/ 48",
    image: tiraditoNikkei,
    tags: ["Fusión", "Premium", "Suave"],
  },
  {
    id: 3,
    name: "Ceviche Mixto",
    description: "Variedad de mariscos frescos: pescado, camarones, pulpo y calamar",
    price: "S/ 52",
    image: cevicheMixto,
    tags: ["Popular", "Abundante", "Mar"],
  },
  {
    id: 4,
    name: "Arroz con Mariscos",
    description: "Arroz amarillo con frutos del mar, camarones, mejillones y calamar",
    price: "S/ 42",
    image: arrozMariscos,
    tags: ["Caliente", "Contundente", "Tradicional"],
  },
  {
    id: 5,
    name: "Chicharrón de Calamar",
    description: "Anillas de calamar crujientes con limón y salsa tártara",
    price: "S/ 38",
    image: chicharronCalamar,
    tags: ["Crispy", "Entrada", "Favorito"],
  },
  {
    id: 6,
    name: "Causa Limeña",
    description: "Papa amarilla en capas con atún, palta y mayonesa criolla",
    price: "S/ 35",
    image: causaLimena,
    tags: ["Tradicional", "Vegetariano", "Clásico"],
  },
];

const tagColors: Record<string, string> = {
  Tradicional: "bg-teal-fresh/20 text-teal-fresh",
  Picante: "bg-red-500/20 text-red-400",
  Fresco: "bg-emerald-500/20 text-emerald-400",
  Fusión: "bg-purple-500/20 text-purple-400",
  Premium: "bg-amber-warm/20 text-amber-warm",
  Popular: "bg-blue-500/20 text-blue-400",
  Abundante: "bg-orange-500/20 text-orange-400",
  Mar: "bg-cyan-500/20 text-cyan-400",
  Caliente: "bg-red-500/20 text-red-400",
  Contundente: "bg-yellow-500/20 text-yellow-400",
  Crispy: "bg-amber-500/20 text-amber-400",
  Entrada: "bg-green-500/20 text-green-400",
  Favorito: "bg-pink-500/20 text-pink-400",
  Vegetariano: "bg-lime-500/20 text-lime-400",
  Clásico: "bg-indigo-500/20 text-indigo-400",
  Suave: "bg-sky-500/20 text-sky-400",
};

const MenuSection = () => {
  return (
    <section id="menu" className="bg-ocean-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-warm text-sm uppercase tracking-[0.3em] mb-4">
            Sabores del Pacífico
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Del Océano a tu Paladar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ceviches frescos y creaciones marinas que celebran la tradición peruana
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="bg-ocean-surface rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-surface via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-amber-warm text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {dish.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {dish.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className={`${tagColors[tag] || "bg-gray-500/20 text-gray-400"} px-3 py-1 rounded-full text-xs border-0`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Add Button */}
                <Button
                  variant="outline"
                  className="w-full border-amber-warm/50 text-amber-warm hover:bg-amber-warm hover:text-white rounded-lg transition-colors"
                  onClick={() => toast.info(`${dish.name} agregado a tu reserva`, {
                    description: "Podrás revisar tu pedido al confirmar la mesa",
                    duration: 3000,
                  })}
                  aria-label={`Agregar ${dish.name} a la reserva`}
                >
                  Agregar a Reserva
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-3 rounded-xl group"
            onClick={() => toast.info("Menú completo disponible próximamente", {
              duration: 3000,
            })}
            aria-label="Ver menú completo del restaurante"
          >
            Ver Menú Completo
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
