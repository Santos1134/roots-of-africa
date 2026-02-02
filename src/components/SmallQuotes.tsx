import { motion } from 'framer-motion';
import bgImage from '../Assets/11.jpeg';

export function SmallQuotes() {
  return (
    <section className="py-14 md:py-20 bg-deep-brown text-cream relative overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
      <div className="absolute inset-0 opacity-15">
        <img
          src={bgImage}
          alt=""
          className="object-cover w-full h-full grayscale" />

      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>

          <span className="font-serif text-4xl md:text-6xl text-terracotta/50 block leading-none mb-2">
            "
          </span>
          <h2 className="font-display italic text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug text-warm-white mb-6 md:mb-8">
            To visit West Africa is to touch the roots of freedom, where the forest
            meets the sea.
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 md:w-12 bg-terracotta" />
            <span className="font-sans uppercase tracking-widest text-xs text-terracotta">
              Roots of Africa
            </span>
            <div className="h-px w-8 md:w-12 bg-terracotta" />
          </div>
        </motion.div>
      </div>
    </section>);

}