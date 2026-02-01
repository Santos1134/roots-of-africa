import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SmallIntro } from './components/Intro';
import { TourPackages } from './components/TourPackages';
import { SmallQuotes } from './components/SmallQuotes';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Photos } from './components/PhotoGallery';
import { Booking } from './components/BookingSection';
import { Footer } from './components/Footer';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
function HomePage() {
  return (
    <div className="bg-cream min-h-screen w-full overflow-x-hidden selection:bg-terracotta selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <SmallIntro />
        <TourPackages />
        <SmallQuotes />
        <JourneyTimeline />
        <Photos />
        <Booking />
      </main>
      <Footer />
    </div>);

}
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tour/:tourId" element={<TourDetailPage />} />
      </Routes>
      <FloatingWhatsApp />
    </HashRouter>);

}