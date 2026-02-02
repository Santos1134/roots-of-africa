import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import image17 from '../Assets/17.jpg';
import image18 from '../Assets/18.jpg';
import image19 from '../Assets/19.jpg';
import image20 from '../Assets/20.jpg';
import image21 from '../Assets/21.jpg';
import image22 from '../Assets/22.jpg';
import image23 from '../Assets/23.jpg';
import image24 from '../Assets/24.jpg';
import image25 from '../Assets/IMG-20260202-WA0037.jpg';
import image26 from '../Assets/IMG-20260202-WA0041.jpg';
import image27 from '../Assets/IMG-20260202-WA0047.jpg';
import image28 from '../Assets/IMG-20260202-WA0052.jpg';
import image29 from '../Assets/IMG-20260202-WA0055.jpg';
import image30 from '../Assets/IMG-20260202-WA0057.jpg';
import image31 from '../Assets/IMG-20260202-WA0058.jpg';
import image32 from '../Assets/IMG-20260202-WA0059.jpg';
import image33 from '../Assets/IMG-20260202-WA0061.jpg';
import image34 from '../Assets/IMG-20260202-WA0067.jpg';
import image35 from '../Assets/IMG-20260202-WA0072.jpg';
import image36 from '../Assets/IMG-20260202-WA0076.jpg';
import image37 from '../Assets/IMG-20260202-WA0079.jpg';
import image38 from '../Assets/IMG-20260202-WA0082.jpg';
import image39 from '../Assets/IMG-20260202-WA0084.jpg';
import image40 from '../Assets/IMG-20260202-WA0086.jpg';
import image41 from '../Assets/IMG-20260202-WA0089.jpg';
import image42 from '../Assets/IMG-20260202-WA0091.jpg';
import image43 from '../Assets/IMG-20260202-WA0092.jpg';
import image44 from '../Assets/IMG-20260202-WA0093.jpg';
import image45 from '../Assets/IMG-20260202-WA0094.jpg';
import image46 from '../Assets/IMG-20260202-WA0095.jpg';
import image47 from '../Assets/IMG-20260202-WA0096.jpg';
import image48 from '../Assets/IMG-20260202-WA0097.jpg';
import image49 from '../Assets/IMG-20260202-WA0098.jpg';
import image50 from '../Assets/IMG-20260202-WA0099.jpg';
import image51 from '../Assets/IMG-20260202-WA0100.jpg';
import image52 from '../Assets/IMG-20260202-WA0101.jpg';
import image53 from '../Assets/IMG-20260202-WA0102.jpg';

const photos = [
  { src: image22, alt: 'Adventure Awaits', span: 'md:row-span-2' },
  { src: image23, alt: 'Cultural Journey', span: '' },
  { src: image24, alt: 'Explore Liberia', span: '' },
  { src: image1, alt: 'Liberian Heritage', span: '' },
  { src: image2, alt: 'Cultural Traditions', span: 'md:row-span-2' },
  { src: image3, alt: 'Local Craftsmanship', span: '' },
  { src: image4, alt: 'Village Welcome', span: '' },
  { src: image5, alt: 'Nature Walk', span: '' },
  { src: image6, alt: 'Sunset Views', span: 'md:row-span-2' },
  { src: image7, alt: 'Scenic Landscape', span: '' },
  { src: image8, alt: 'River Journey', span: '' },
  { src: image9, alt: 'Forest Trail', span: '' },
  { src: image10, alt: 'Liberian Coastline', span: 'md:row-span-2' },
  { src: image11, alt: 'Mountain Vista', span: '' },
  { src: image12, alt: 'Local Village Life', span: '' },
  { src: image13, alt: 'Cultural Dance', span: '' },
  { src: image14, alt: 'Traditional Attire', span: 'md:row-span-2' },
  { src: image15, alt: 'Community Gathering', span: '' },
  { src: image16, alt: 'Festive Celebration', span: '' },
  { src: image17, alt: 'Scenic Beauty', span: '' },
  { src: image18, alt: 'Local Experience', span: 'md:row-span-2' },
  { src: image19, alt: 'Natural Wonders', span: '' },
  { src: image20, alt: 'Village Life', span: '' },
  { src: image21, alt: 'Coastal Views', span: '' },
  { src: image25, alt: 'West African Adventure', span: 'md:row-span-2' },
  { src: image26, alt: 'Cultural Experience', span: '' },
  { src: image27, alt: 'Local Encounter', span: '' },
  { src: image28, alt: 'Journey Through Liberia', span: '' },
  { src: image29, alt: 'Authentic Moments', span: 'md:row-span-2' },
  { src: image30, alt: 'Travel Stories', span: '' },
  { src: image31, alt: 'Cultural Discovery', span: '' },
  { src: image32, alt: 'Heritage Tour', span: '' },
  { src: image33, alt: 'Exploration', span: 'md:row-span-2' },
  { src: image34, alt: 'Adventure Time', span: '' },
  { src: image35, alt: 'Local Culture', span: '' },
  { src: image36, alt: 'Scenic Tour', span: '' },
  { src: image37, alt: 'West Africa', span: 'md:row-span-2' },
  { src: image38, alt: 'Cultural Immersion', span: '' },
  { src: image39, alt: 'Tour Highlights', span: '' },
  { src: image40, alt: 'Local Life', span: '' },
  { src: image41, alt: 'Guided Tour', span: 'md:row-span-2' },
  { src: image42, alt: 'Travel Memories', span: '' },
  { src: image43, alt: 'Cultural Heritage', span: '' },
  { src: image44, alt: 'Liberian Landscapes', span: '' },
  { src: image45, alt: 'Tour Experience', span: 'md:row-span-2' },
  { src: image46, alt: 'Local Traditions', span: '' },
  { src: image47, alt: 'Adventure Awaits', span: '' },
  { src: image48, alt: 'Cultural Journey', span: '' },
  { src: image49, alt: 'Discover Liberia', span: 'md:row-span-2' },
  { src: image50, alt: 'Travel Adventure', span: '' },
  { src: image51, alt: 'West African Culture', span: '' },
  { src: image52, alt: 'Tour Moments', span: '' },
  { src: image53, alt: 'Cultural Exploration', span: '' },
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
          <Link to="/" className="font-serif text-xl md:text-2xl font-bold">
            Roots of Africa Tours
          </Link>
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
            Glimpses of Liberia and West Africa's vibrant culture and landscapes.
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
