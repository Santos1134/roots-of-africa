import React, { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence } from
'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from '../Assets/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  const navLinks = [
  {
    name: 'Tours',
    href: '#stories'
  },
  {
    name: 'Gallery',
    href: '#/gallery',
    isPage: true
  },
  {
    name: 'About',
    href: '#/about',
    isPage: true
  },
  {
    name: 'Contact',
    href: '#/contact',
    isPage: true
  },
  {
    name: 'Book Now',
    href: '#book'
  }];

  const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  isPage?: boolean) =>
  {
    setIsMobileMenuOpen(false);
    
    if (isPage) {
      return;
    }
    
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isMobileMenuOpen ? 'z-[60] bg-cream py-3' : isScrolled ? 'z-50 bg-cream shadow-md py-3 md:py-4' : 'z-50 bg-transparent py-4 md:py-6'}`}
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="relative z-[60] flex items-center gap-2">
            <img 
              src={logo} 
              alt="Roots of Africa Tours" 
              className={`transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'h-[35px] md:h-[40px]' : 'h-[40px] md:h-[45px]'}`}
            />
            <span
              className={`font-serif text-lg md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-deep-brown' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'}`}>
              Roots of Africa Tours
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.isPage)}
              className={`font-sans text-sm uppercase tracking-widest font-medium hover:text-terracotta transition-colors duration-300 ${isScrolled ? 'text-deep-brown' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] hover:text-white'}`}>

                {link.name}
              </a>
            )}
          </div>

          <button
            className="md:hidden relative z-[60] p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
            <X className="w-6 h-6 text-deep-brown" /> :

            <Menu
              className={`w-6 h-6 ${isScrolled ? 'text-deep-brown' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'}`} />

            }
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="fixed inset-0 z-[55] bg-cream md:hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}>

            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              <nav className="flex flex-col items-center space-y-6">
                {navLinks.map((link, index) =>
              <motion.a
                key={link.name}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}
                className="font-serif text-2xl sm:text-3xl text-deep-brown hover:text-terracotta transition-colors"
                onClick={(e) => handleLinkClick(e, link.href, link.isPage)}>

                    {link.name}
                  </motion.a>
              )}
              </nav>

              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.4
              }}
              className="flex flex-col items-center gap-4 mt-10 pt-8 border-t border-deep-brown/10">
                <span className="font-sans text-xs uppercase tracking-widest text-warm-gray">Follow Us</span>
                <div className="flex gap-6">
                <a
                href="https://www.instagram.com/roots_of_africa_tours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-brown hover:text-terracotta transition-colors p-2"
                title="Instagram"
                aria-label="Instagram">

                  <Instagram className="w-6 h-6" />
                </a>
                <a
                href="https://www.facebook.com/share/1aZLrAUT3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-brown hover:text-terracotta transition-colors p-2"
                title="Facebook"
                aria-label="Facebook">

                  <Facebook className="w-6 h-6" />
                </a>
                <a
                href="https://www.tiktok.com/@roots_of_africa_tours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-brown hover:text-terracotta transition-colors p-2"
                title="TikTok"
                aria-label="TikTok">

                  <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6">

                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}