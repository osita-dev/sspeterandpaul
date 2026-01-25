import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800&h=600&fit=crop",
    alt: "Sunday Mass congregation",
    category: "Mass",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&h=800&fit=crop",
    alt: "Church altar decorations",
    category: "Liturgy",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    alt: "Parish feast celebration",
    category: "Events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=800&fit=crop",
    alt: "Children's catechism class",
    category: "Education",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=600&fit=crop",
    alt: "Choir performance",
    category: "Music",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1445633629932-0029acc44e88?w=800&h=800&fit=crop",
    alt: "Parish community gathering",
    category: "Community",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&h=800&fit=crop",
    alt: "Church exterior view",
    category: "Architecture",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop",
    alt: "Youth group activities",
    category: "Youth",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const goPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <section id="gallery" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Parish Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Life at SS Peter & Paul
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Glimpses of our vibrant parish community in worship, celebration, and service.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-sm px-3 py-1 bg-black/50 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium">{galleryImages[currentIndex].alt}</p>
              <p className="text-white/60 text-sm mt-1">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
