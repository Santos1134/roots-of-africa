import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroImage from '../Assets/8.jpeg';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const scrollToStories = () => {
    document.getElementById('stories')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div ref={ref} className="relative h-[70vh] md:h-screen w-full overflow-hidden">

      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`
          }} />

        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
      </motion.div>

      <motion.div
        style={{
          opacity,
          y: textY
        }}
        className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">

        <motion.span
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="font-sans text-white/90 uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base mb-4 md:mb-6">

          Roots of Africa Tours
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-6 md:mb-8 text-shadow">

          Where Every Journey <br />
          <span className="italic">Tells an African Story</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="font-display text-lg sm:text-xl md:text-2xl text-white/90 italic max-w-2xl mb-8 md:mb-10">

          Discover West Africa's hidden treasures, from cascading waterfalls
          to vibrant cities and pristine beaches.
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          onClick={scrollToStories}
          className="bg-terracotta text-white px-6 py-3 md:px-8 md:py-4 font-sans uppercase tracking-widest text-xs md:text-sm flex items-center gap-3 hover:bg-ochre transition-colors rounded-sm">

          Explore Tours
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white/80 cursor-pointer"
        onClick={scrollToStories}>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut'
          }}>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.div>
    </div>);

}