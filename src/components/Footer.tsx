import { Instagram, Facebook } from 'lucide-react';
import logo from '../Assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-cream border-t border-deep-brown/10 pt-10 md:pt-14 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10">
        <div>
          <a
            href="#"
            className="block mb-4">
            <img 
              src={logo} 
              alt="Roots of Africa Tours" 
              className="w-24 h-24 md:w-28 md:h-28 object-contain"
            />
          </a>
          <p className="font-sans text-warm-gray text-sm leading-relaxed mb-4">
            Where Every Journey Tells an African Story. Authentic Liberian
            tourism experiences.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/roots_of_africa_tours"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-brown hover:text-terracotta transition-colors p-1.5"
              aria-label="Instagram">

              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1aZLrAUT3n/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-brown hover:text-terracotta transition-colors p-1.5"
              aria-label="Facebook">

              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@roots_of_africa_tours"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-brown hover:text-terracotta transition-colors p-1.5"
              aria-label="TikTok">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5">

                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-deep-brown font-bold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 font-sans text-warm-gray text-sm">
            <li>
              <a href="#/about" className="hover:text-terracotta transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#/book" className="hover:text-terracotta transition-colors">
                Book a Tour
              </a>
            </li>
            <li>
              <a href="#/contact" className="hover:text-terracotta transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://wa.me/231888351388" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-deep-brown/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-sans text-warm-gray/60">
        <p>&copy; 2026 Roots of Africa Tours</p>
        <p>Built by: <a href="https://wa.me/231776428126" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors">The Devs</a></p>
      </div>
    </footer>);

}