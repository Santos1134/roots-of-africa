import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import image1 from '../Assets/1.jpeg';
import image2 from '../Assets/2.jpeg';
import image3 from '../Assets/3.jpeg';
import image4 from '../Assets/4.jpeg';
import image5 from '../Assets/5.jpeg';
import image6 from '../Assets/6.jpeg';
import image7 from '../Assets/7.jpeg';
import image8 from '../Assets/8.jpeg';
import image9 from '../Assets/9.jpeg';
import image10 from '../Assets/10.jpeg';
import image11 from '../Assets/11.jpeg';
import image12 from '../Assets/12.jpeg';
import image13 from '../Assets/13.jpeg';
import image14 from '../Assets/14.jpeg';
import image15 from '../Assets/15.jpeg';
import image16 from '../Assets/16.jpg';

const photos = [
  { src: image1, alt: 'Liberian Heritage', span: 'md:row-span-2' },
  { src: image2, alt: 'Cultural Traditions', span: '' },
  { src: image3, alt: 'Local Craftsmanship', span: '' },
  { src: image4, alt: 'Village Welcome', span: '' },
  { src: image5, alt: 'Nature Walk', span: 'md:row-span-2' },
  { src: image6, alt: 'Sunset Views', span: '' },
  { src: image7, alt: 'Scenic Landscape', span: '' },
  { src: image8, alt: 'River Journey', span: '' },
  { src: image9, alt: 'Forest Trail', span: 'md:row-span-2' },
  { src: image10, alt: 'Liberian Coastline', span: '' },
  { src: image11, alt: 'Mountain Vista', span: '' },
  { src: image12, alt: 'Local Village Life', span: '' },
  { src: image13, alt: 'Cultural Dance', span: 'md:row-span-2' },
  { src: image14, alt: 'Traditional Attire', span: '' },
  { src: image15, alt: 'Community Gathering', span: '' },
  { src: image16, alt: 'Festive Celebration', span: '' },
];

export function GalleryPage() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-deep-brown text-cream py-4 px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors font-sans text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <a href="/" className="font-serif text-xl md:text-2xl font-bold">
            Roots of Africa
          </a>
          <div className="w-16" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
            Visual Essays
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-brown mt-2">
            Our Gallery
          </h1>
          <p className="font-sans text-warm-gray text-sm mt-2">
            Glimpses of Liberia's vibrant culture and landscapes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 15
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.5
              }}
              className={`relative group overflow-hidden rounded-sm ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <span className="text-white font-sans text-xs tracking-wide">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
