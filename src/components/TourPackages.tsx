import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';

export function TourPackages() {
  return (
    <section id="stories" className="py-12 md:py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-deep-brown">
            Our Tour Packages
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...tours].sort((a, b) => a.price - b.price).map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/tour/${tour.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm shadow-md">
                    <span className="font-serif text-lg text-deep-brown font-medium">
                      ${tour.price}<span className="text-sm font-sans">/person</span>
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-warm-gray mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration.split('(')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-deep-brown mb-2 group-hover:text-terracotta transition-colors">
                    {tour.name}
                  </h3>

                  <p className="font-sans text-warm-gray text-sm leading-relaxed mb-4">
                    {tour.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="bg-terracotta text-white px-4 py-2 rounded-sm font-sans text-sm font-medium hover:bg-ochre transition-colors">
                      Book Now
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
