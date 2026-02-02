import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  ChevronDown,
  ArrowLeft,
  Check,
  Minus,
  Plus } from
'lucide-react';
import { tours } from '../data/tours';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const [selectedTour, setSelectedTour] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [adults, setAdults] = useState(1);

  useEffect(() => {
    const tourParam = searchParams.get('tour');
    if (tourParam && tours.find(t => t.id === tourParam)) {
      setSelectedTour(tourParam);
    }
  }, [searchParams]);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [showTourDropdown, setShowTourDropdown] = useState(false);
  const selectedTourData = tours.find((t) => t.id === selectedTour);
  const totalGuests = adults + children;
  const totalPrice = (selectedTourData?.price || 0) * totalGuests;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTour || !selectedDate || !name || !email) return;
    
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    let guestDetails = `${adults} adult${adults > 1 ? 's' : ''}`;
    if (children > 0) guestDetails += `, ${children} child${children > 1 ? 'ren' : ''}`;
    
    const message = `*New Booking Request*

*Tour:* ${selectedTourData?.name}
*Location:* ${selectedTourData?.location}
*Date:* ${formattedDate}

*Guests:* ${guestDetails}
*Total:* $${totalPrice.toFixed(0)}

*Contact Details:*
• Name: ${name}
• Email: ${email}
• Phone: ${phone || 'Not provided'}

${notes ? `*Special Requests:*\n${notes}` : ''}

I would like to book this tour. Please confirm availability.`;

    const whatsappNumber = '231888351388';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };
  const goBack = () => {
    window.history.back();
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-deep-brown text-cream py-4 px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors font-sans text-sm">

            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <a href="/" className="font-serif text-xl md:text-2xl font-bold">
            Roots of Africa
          </a>
          <div className="w-16" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
            Plan Your Adventure
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-brown mt-2">
            Book Your Tour
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-sm p-5 md:p-6 border border-deep-brown/10">
                <h3 className="font-serif text-lg text-deep-brown mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-terracotta text-cream rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  Select Your Tour
                </h3>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowTourDropdown(!showTourDropdown)}
                    className="w-full bg-cream border border-deep-brown/20 rounded-sm p-4 text-left flex items-center justify-between hover:border-terracotta transition-colors">

                    {selectedTourData ?
                    <div className="flex items-center gap-3">
                        <img
                        src={selectedTourData.image}
                        alt=""
                        className="w-12 h-12 object-cover rounded-sm" />

                        <div>
                          <p className="font-sans text-deep-brown font-medium">
                            {selectedTourData.name}
                          </p>
                          <p className="font-sans text-warm-gray text-sm">
                            {selectedTourData.location}
                          </p>
                        </div>
                      </div> :

                    <span className="text-warm-gray">Choose a tour...</span>
                    }
                    <ChevronDown
                      className={`w-5 h-5 text-warm-gray transition-transform ${showTourDropdown ? 'rotate-180' : ''}`} />

                  </button>

                  {showTourDropdown &&
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-deep-brown/10 rounded-sm shadow-lg z-20 max-h-80 overflow-y-auto">

                      {tours.map((tour) =>
                    <button
                      key={tour.id}
                      type="button"
                      onClick={() => {
                        setSelectedTour(tour.id);
                        setShowTourDropdown(false);
                      }}
                      className={`w-full p-4 flex items-center gap-3 hover:bg-cream transition-colors text-left border-b border-deep-brown/5 last:border-0 ${selectedTour === tour.id ? 'bg-cream' : ''}`}>

                          <img
                        src={tour.image}
                        alt=""
                        className="w-14 h-14 object-cover rounded-sm flex-shrink-0" />

                          <div className="flex-1 min-w-0">
                            <p className="font-sans text-deep-brown font-medium truncate">
                              {tour.name}
                            </p>
                            <p className="font-sans text-warm-gray text-sm">
                              {tour.location}
                            </p>
                            <p className="font-sans text-terracotta text-sm font-medium">
                              ${tour.price}
                            </p>
                          </div>
                          {selectedTour === tour.id &&
                      <Check className="w-5 h-5 text-terracotta flex-shrink-0" />
                      }
                        </button>
                    )}
                    </motion.div>
                  }
                </div>
              </div>

              <div className="bg-white rounded-sm p-5 md:p-6 border border-deep-brown/10">
                <h3 className="font-serif text-lg text-deep-brown mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-terracotta text-cream rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  Choose Your Date
                </h3>

                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray pointer-events-none" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={minDate}
                    required
                    className="w-full bg-cream border border-deep-brown/20 rounded-sm p-4 pl-12 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors" />

                </div>
              </div>

              <div className="bg-white rounded-sm p-5 md:p-6 border border-deep-brown/10">
                <h3 className="font-serif text-lg text-deep-brown mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-terracotta text-cream rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Number of Guests
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-deep-brown/10">
                    <div>
                      <p className="font-sans text-deep-brown font-medium">
                        Adults
                      </p>
                      <p className="font-sans text-warm-gray text-sm">
                        Ages 13+
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded-full border border-deep-brown/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors disabled:opacity-50"
                        disabled={adults <= 1}
                        aria-label="Decrease number of adults"
                        title="Decrease number of adults">

                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-sans text-deep-brown w-8 text-center font-medium">
                        {adults}
                      </span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-full border border-deep-brown/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                        title="Increase number of adults"
                        aria-label="Increase number of adults">
                          
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-deep-brown/10">
                    <div>
                      <p className="font-sans text-deep-brown font-medium">
                        Children
                      </p>
                      <p className="font-sans text-warm-gray text-sm">
                        Ages 2-12
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded-full border border-deep-brown/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors disabled:opacity-50"
                        disabled={children <= 0}
                        aria-label="Decrease number of children"
                        title="Decrease number of children">

                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-sans text-deep-brown w-8 text-center font-medium">
                        {children}
                      </span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded-full border border-deep-brown/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                        title="Increase number of children"
                        aria-label="Increase number of children">

                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              <div className="bg-white rounded-sm p-5 md:p-6 border border-deep-brown/10">
                <h3 className="font-serif text-lg text-deep-brown mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-terracotta text-cream rounded-full flex items-center justify-center text-sm">
                    4
                  </span>
                  Your Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block font-sans text-sm text-warm-gray mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors" />

                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-sm text-warm-gray mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors" />

                    </div>
                    <div>
                      <label className="block font-sans text-sm text-warm-gray mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors" />

                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-warm-gray mb-1">
                      Special Requests
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors resize-none" />

                  </div>
                </div>
              </div>

              <div className="lg:hidden">
                <button
                  type="submit"
                  disabled={!selectedTour || !selectedDate || !name || !email}
                  className="w-full bg-terracotta text-cream py-4 font-sans uppercase tracking-widest text-sm hover:bg-ochre transition-colors disabled:opacity-50 disabled:cursor-not-allowed">

                  Request Booking
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm border border-deep-brown/10 sticky top-20 overflow-hidden">
              {selectedTourData ?
              <>
                  <div className="aspect-[16/9] relative">
                    <img
                    src={selectedTourData.image}
                    alt={selectedTourData.name}
                    className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-lg">
                        {selectedTourData.name}
                      </h3>
                      <p className="font-sans text-sm text-white/80">
                        {selectedTourData.location}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-3">
                      Booking Summary
                    </h4>
                    <div className="flex justify-between items-center mb-2 text-sm">
                      <span className="text-warm-gray">Total Guests</span>
                      <span className="text-deep-brown font-medium">{totalGuests}</span>
                    </div>

                    {selectedDate &&
                  <div className="flex justify-between py-2 border-b border-deep-brown/10 text-sm">
                        <span className="text-warm-gray">Date</span>
                        <span className="text-deep-brown font-medium">
                          {new Date(selectedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                        </span>
                      </div>
                  }

                    <div className="flex justify-between py-3 border-t border-deep-brown/10 font-serif text-lg">
                      <span className="text-deep-brown">Total</span>
                      <span className="text-terracotta font-bold">
                        ${totalPrice.toFixed(0)}
                      </span>
                    </div>

                    <button
                    type="submit"
                    form="booking-form"
                    onClick={handleSubmit}
                    disabled={
                    !selectedTour || !selectedDate || !name || !email
                    }
                    className="hidden lg:block w-full bg-terracotta text-cream py-3 font-sans uppercase tracking-widest text-sm hover:bg-ochre transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2">

                      Request Booking
                    </button>

                    <p className="text-xs text-warm-gray text-center mt-3">
                      You won't be charged yet. We'll confirm availability
                      first.
                    </p>
                  </div>
                </> :

              <div className="p-8 text-center">
                  <Users className="w-12 h-12 text-warm-gray/30 mx-auto mb-3" />
                  <p className="font-sans text-warm-gray text-sm">
                    Select a tour to see pricing details
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </main>
    </div>);

}