import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import image2 from '../Assets/2.jpeg';
import image4 from '../Assets/4.jpeg';
import image6 from '../Assets/6.jpeg';
import image8 from '../Assets/8.jpeg';

const stories = [
{
  id: 1,
  title: 'Kpatawee Waterfall',
  subtitle: 'Bong County • Signature Tour',
  description:
  "Journey to one of Liberia's most breathtaking natural wonders. Immerse yourself in the sound of rushing water and learn the cultural significance of the falls.",
  image: image2,
  quote: 'A symbol of life and heritage for the community.',
  price: '$455',
  align: 'left'
},
{
  id: 2,
  title: 'Lake Piso & Grand Cape Mount',
  subtitle: 'Grand Cape Mount County',
  description:
  "Experience the serenity of Lake Piso. Visit Fanti Town to see local fishing firsthand and taste authentic local food at Nana's Lodge.",
  image: image6,
  quote: 'Where the lake meets the ocean and culture thrives.',
  price: '$790',
  align: 'right'
},
{
  id: 3,
  title: 'Monrovia City Tour',
  subtitle: 'Full Day Experience',
  description:
  'A fast-paced, immersive journey through history. From the ruins of the Ducor Hotel to the bustling Waterside Market.',
  image: image8,
  quote: 'History here is written in every street corner.',
  price: '$80',
  align: 'left'
},
{
  id: 4,
  title: 'Gbaota Village Immersion',
  subtitle: 'Cultural Trip',
  description:
  'Deep cultural exchange in Bong County. Meet the community, participate in traditional welcome dances, and cook with locals.',
  image: image4,
  quote: 'Authentic connection, far from the beaten path.',
  price: '$220',
  align: 'right'
}];

export function TourStories() {
  const scrollToItinerary = () => {
    document.getElementById('journeys')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section id="stories" className="py-12 md:py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-14">
          <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
            Curated Experiences
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-deep-brown mt-3">
            Featured Journeys
          </h2>
        </div>

        <div className="space-y-10 md:space-y-20">
          {stories.map((story) =>
          <motion.div
            key={story.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6
            }}
            className={`flex flex-col ${story.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-5 md:gap-12 items-center`}>

              <div className="w-full md:w-3/5 relative group overflow-hidden rounded-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                  src={story.image}
                  alt={story.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />

                </div>
                <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2 font-serif text-base md:text-lg text-deep-brown shadow-lg rounded-sm">
                  {story.price}
                </div>
              </div>

              <div className="w-full md:w-2/5 space-y-3 md:space-y-4">
                <span className="font-sans text-sage text-xs uppercase tracking-widest font-medium block">
                  {story.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-deep-brown leading-tight">
                  {story.title}
                </h3>

                <blockquote className="border-l-2 border-ochre pl-3 py-1">
                  <p className="font-display italic text-base md:text-lg text-warm-gray leading-relaxed">
                    "{story.quote}"
                  </p>
                </blockquote>

                <p className="font-sans text-warm-gray leading-relaxed font-light text-sm md:text-base">
                  {story.description}
                </p>

                <button
                onClick={scrollToItinerary}
                className="group flex items-center gap-2 text-deep-brown font-serif italic text-base md:text-lg hover:text-terracotta transition-colors pt-1">

                  View itinerary
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}