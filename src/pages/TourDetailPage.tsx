import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Check,
  X,
  Calendar,
  Users
} from 'lucide-react';
import { tours } from '../data/tours';

export function TourDetailPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const tour = tours.find((t) => t.id === tourId);

  const goBack = () => {
    window.history.back();
  };

  const handleBookNow = () => {
    navigate(`/book?tour=${tourId}`);
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-deep-brown mb-4">Tour not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-terracotta hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-deep-brown text-cream py-4 px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors font-sans text-sm"
            aria-label="Go back"
            title="Go back"
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

      <main>
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {tour.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </span>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">
                  {tour.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl md:text-3xl text-white">
                    ${tour.price}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-2xl text-deep-brown mb-4">
                  Tour Highlights
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 font-sans text-warm-gray"
                    >
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-2xl text-deep-brown mb-6">
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="font-sans text-terracotta text-sm font-medium">
                            {index + 1}
                          </span>
                        </div>
                        {index < tour.itinerary.length - 1 && (
                          <div className="w-0.5 h-full bg-terracotta/20 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <span className="font-sans text-terracotta text-sm font-medium">
                          {item.time}
                        </span>
                        <h3 className="font-serif text-lg text-deep-brown mt-1">
                          {item.title}
                        </h3>
                        <p className="font-sans text-warm-gray text-sm mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                <div>
                  <h2 className="font-serif text-xl text-deep-brown mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 font-sans text-warm-gray text-sm"
                      >
                        <Check className="w-4 h-4 text-sage" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {tour.notIncluded && tour.notIncluded.length > 0 && (
                  <div>
                    <h2 className="font-serif text-xl text-deep-brown mb-4">
                      Not Included
                    </h2>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 font-sans text-warm-gray text-sm"
                        >
                          <X className="w-4 h-4 text-warm-gray/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-sm border border-deep-brown/10 p-6 sticky top-20"
              >
                <div className="text-center mb-6">
                  <span className="font-sans text-warm-gray text-sm">From</span>
                  <div className="font-serif text-3xl text-deep-brown">
                    ${tour.price}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-warm-gray">
                    <Clock className="w-5 h-5" />
                    <span className="font-sans text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-warm-gray">
                    <MapPin className="w-5 h-5" />
                    <span className="font-sans text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-warm-gray">
                    <Calendar className="w-5 h-5" />
                    <span className="font-sans text-sm">Available daily</span>
                  </div>
                  <div className="flex items-center gap-3 text-warm-gray">
                    <Users className="w-5 h-5" />
                    <span className="font-sans text-sm">Private tour</span>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-terracotta text-white py-4 font-sans uppercase tracking-widest text-sm hover:bg-ochre transition-colors rounded-sm"
                >
                  Book This Tour
                </button>

                <button
                  onClick={() => window.open('https://wa.me/231888351388', '_blank')}
                  className="w-full mt-3 border border-deep-brown/20 text-deep-brown py-3 font-sans text-sm hover:bg-deep-brown/5 transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask a Question
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
