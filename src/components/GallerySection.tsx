import { useState } from "react";
import { X } from "lucide-react";

// Base URL de Cloudinary (TU cuenta)
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dkoshgzxo/image/upload';

const galleryImages = [
  // Usamos el parámetro w_500 para un tamaño adecuado en la galería y lightbox
  { 
    id: 1, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Ceviche_fresco_servido_en_plato_artesanal_uluhtf.png`, 
    alt: "Ceviche fresco servido en plato artesanal" 
  },
  { 
    id: 2, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Interior_del_restaurante_con_iluminaci%C3%B3n_c%C3%A1lida_d68eek.jpg`, 
    alt: "Interior del restaurante con iluminación cálida" 
  },
  { 
    id: 3, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Tiradito_Nikkei_con_presentaci%C3%B3n_elegante_cs2pod.jpg`, 
    alt: "Tiradito Nikkei con presentación elegante" 
  },
  { 
    id: 4, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Barra_del_restaurante_con_vista_a_la_cocina_n11b1y.jpg`, 
    alt: "Barra del restaurante con vista a la cocina" 
  },
  { 
    id: 5, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Arroz_con_mariscos_reci%C3%A9n_preparado_pqtbrx.png`, 
    alt: "Arroz con mariscos recién preparado" 
  },
  { 
    id: 6, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Terraza_exterior_con_ambiente_natural_tike5m.jpg`, 
    alt: "Terraza exterior con ambiente natural" 
  },
  { 
    id: 7, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095975/Detalle_de_copa_de_vino_en_mesa_zzwqgj.jpg`, 
    alt: "Detalle de copa de vino en mesa" 
  },
  { 
    id: 8, 
    src: `${CLOUDINARY_BASE}/w_500,q_auto,f_auto/v1763095974/Chef_preparando_ceviche_fresco_wsgeap.jpg`, 
    alt: "Chef preparando ceviche fresco" 
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-ocean-blue py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Momentos en Bookéalo
          </h2>
          <p className="text-lg text-muted-foreground">
            Capturamos la esencia de cada experiencia
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-ocean-dark/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              onClick={closeLightbox}
              aria-label="Cerrar galería"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="max-w-6xl w-full animate-scale-in">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;