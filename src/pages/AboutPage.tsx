import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Users, Heart, Compass } from 'lucide-react';
import aboutImage from '../Assets/5.jpeg';
import founderImage from '../Assets/founder.jpg';

export function AboutPage() {
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
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={aboutImage}
            alt="Roots of Africa Tours"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-white/80 uppercase tracking-widest text-xs md:text-sm"
              >
                Our Story
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mt-2"
              >
                About Roots of Africa Tours
              </motion.h1>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="font-sans text-warm-gray text-lg md:text-xl leading-relaxed mb-6">
              Roots of Africa Tours is a Liberia-based tour and cultural experience company dedicated to showcasing the true spirit, history, and beauty of Liberia and West Africa. We specialize in immersive, responsible travel experiences that go beyond sightseeing — connecting visitors to people, culture, history, and everyday life.
            </p>

            <p className="font-sans text-warm-gray leading-relaxed mb-6">
              Founded on the belief that travel should educate, inspire, and create meaningful connections, Roots of Africa Tours offers curated tours across Monrovia, Freetown, Abidjan and beyond the region, including heritage sites, cultural communities, natural landmarks, and historical locations that define Liberia's story. From iconic landmarks such as Providence Island and Ducor Hill to rural villages, waterfalls, beaches, and national parks, our experiences are designed to be authentic, insightful, and memorable.
            </p>

            <p className="font-sans text-warm-gray leading-relaxed mb-6">
              Our team is made up of passionate local guides with deep knowledge of Liberia's history, traditions, and social landscape. We take pride in providing personalized itineraries, professional guiding services, and thoughtful storytelling that allow travelers to understand Liberia through a local lens. Whether you are a solo traveler, content creator, researcher, or group visitor, we tailor each journey to match your interests, pace, and purpose.
            </p>

            <p className="font-sans text-warm-gray leading-relaxed">
              At Roots of Africa Tours, we are also committed to responsible tourism. We work closely with local communities, support small businesses and organizations (<a href="https://fourhunger.org" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-ochre underline transition-colors">fourhunger.org</a>), and encourage respectful cultural exchange that benefits both visitors and host communities. Our goal is not only to show Liberia to the world, but to ensure that tourism contributes positively to the country's growth and global image.
            </p>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="bg-warm-gray/10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="font-sans text-terracotta uppercase tracking-widest text-xs md:text-sm">
                Meet the Visionary
              </span>
              <h2 className="font-serif text-2xl md:text-4xl text-deep-brown mt-2">
                About the Founder
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={founderImage}
                  alt="Windell S. King - Founder of Roots of Africa Tours"
                  className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-4 -right-4 bg-terracotta text-white px-6 py-3 rounded-sm hidden md:block">
                  <p className="font-serif text-lg">Windell S. King</p>
                  <p className="font-sans text-xs uppercase tracking-wider opacity-80">Founder & Lead Guide</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="font-sans text-warm-gray leading-relaxed">
                  <span className="font-semibold text-deep-brown">Windell S. King</span> is a West African tourism professional, cultural storyteller, and founder of Roots of Africa Tours. Born and raised in Liberia, Windell has dedicated his work to reshaping how the world experiences West Africa through authentic encounters, community-led travel, and immersive storytelling.
                </p>

                <p className="font-sans text-warm-gray leading-relaxed">
                  With years of experience guiding travelers, creators, and global explorers across Liberia and the region, Windell is known for designing tours that go beyond sightseeing. His approach centers on people, history, culture, and real connection — from coastal communities and historic landmarks to everyday life rarely seen by visitors.
                </p>

                <p className="font-sans text-warm-gray leading-relaxed">
                  Windell has organized and led experiences for international travelers, YouTubers, media personalities, and cultural explorers, helping position Liberia and West Africa as destinations of depth, adventure, and warmth. His work is rooted in responsible tourism, local empowerment, and pride in African heritage.
                </p>

                <div className="bg-cream p-4 rounded-lg border-l-4 border-terracotta">
                  <p className="font-sans text-sm text-warm-gray italic">
                    <span className="font-semibold not-italic">Notable guests guided:</span> IShowSpeed, Drew Binsky, Traveltomtom, I Roam Alone, Kristijan Ilicic, Dos Loco De Viaje, Jason Wang, Wanderreds, Chris - Authentic Travelling, Wander Expedition, Cameron Mofid (youngest person to visit every country as of 2025), and 200+ others.
                  </p>
                </div>

                <p className="font-sans text-warm-gray leading-relaxed">
                  Through Roots of Africa Tours, Windell invites the world to experience West Africa not as outsiders, but as welcomed guests — discovering the region's beauty, resilience, and untold stories, one journey at a time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-deep-brown py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">Local Expertise</h3>
                <p className="font-sans text-cream/70 text-sm">
                  Deep knowledge of West Africa history, traditions, and hidden gems
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">Personalized Tours</h3>
                <p className="font-sans text-cream/70 text-sm">
                  Tailored itineraries to match your interests, pace, and purpose
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">Responsible Tourism</h3>
                <p className="font-sans text-cream/70 text-sm">
                  Supporting local communities and respectful cultural exchange
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">Authentic Experiences</h3>
                <p className="font-sans text-cream/70 text-sm">
                  Beyond sightseeing — real connections with people and culture
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-deep-brown mb-4">
              Discover Liberia and West Africa beyond the surface.
            </h2>
            <p className="font-display text-xl md:text-2xl text-terracotta italic mb-8">
              Travel with purpose. Travel with Roots of Africa Tours.
            </p>
            <a
              href="/book"
              className="inline-block bg-terracotta text-white px-8 py-4 font-sans uppercase tracking-widest text-sm hover:bg-ochre transition-colors rounded-sm"
            >
              Book Your Tour
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
