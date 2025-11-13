import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/src/assets/gallery-1.jpg", alt: "Ceviche fresco servido en plato artesanal" },
  { id: 2, src: "/src/assets/gallery-2.jpg", alt: "Interior del restaurante con iluminación cálida" },
  { id: 3, src: "/src/assets/gallery-3.jpg", alt: "Tiradito Nikkei con presentación elegante" },
  { id: 4, src: "/src/assets/gallery-4.jpg", alt: "Barra del restaurante con vista a la cocina" },
  { id: 5, src: "/src/assets/gallery-5.jpg", alt: "Arroz con mariscos recién preparado" },
  { id: 6, src: "/src/assets/gallery-6.jpg", alt: "Terraza exterior con ambiente natural" },
  { id: 7, src: "/src/assets/gallery-7.jpg", alt: "Detalle de copa de vino en mesa" },
  { id: 8, src: "/src/assets/gallery-8.jpg", alt: "Chef preparando ceviche fresco" },
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
