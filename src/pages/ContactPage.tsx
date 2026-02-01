import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send
} from 'lucide-react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const whatsappMessage = `*New Contact Message*

*From:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}

*Subject:* ${subject || 'General Inquiry'}

*Message:*
${message}`;

    const whatsappNumber = '231888351388';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

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

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-brown mt-2">
            Contact Us
          </h1>
          <p className="font-sans text-warm-gray mt-4 max-w-xl mx-auto">
            Have questions about our tours or want to plan a custom adventure?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-sm p-5 md:p-6 border border-deep-brown/10">
                <h3 className="font-serif text-lg text-deep-brown mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-terracotta" />
                  Send Us a Message
                </h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-sm text-warm-gray mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-warm-gray mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-sm text-warm-gray mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block font-sans text-sm text-warm-gray mb-1">
                          Subject
                        </label>
                        <select
                          id="contact-subject"
                          aria-label="Subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors"
                        >
                        <option value="">Select a topic...</option>
                        <option value="Tour Inquiry">Tour Inquiry</option>
                        <option value="Custom Tour Request">Custom Tour Request</option>
                        <option value="Group Booking">Group Booking</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-warm-gray mb-1">
                      Message *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full bg-cream border border-deep-brown/20 rounded-sm p-3 font-sans text-deep-brown focus:outline-none focus:border-terracotta transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={!name || !email || !message}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-terracotta text-cream py-4 font-sans uppercase tracking-widest text-sm hover:bg-ochre transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-sm"
              >
                <Send className="w-4 h-4" />
                Send
              </motion.button>

              <p className="text-xs text-warm-gray text-center">
                Your message will open in WhatsApp for direct communication.
              </p>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm border border-deep-brown/10 overflow-hidden sticky top-20">
              <div className="bg-deep-brown p-5 text-cream">
                <h3 className="font-serif text-lg mb-2">Contact Information</h3>
                <p className="font-sans text-sm text-cream/80">
                  Reach out through any of these channels.
                </p>
              </div>

              <div className="p-5 space-y-5">
                <a
                  href="https://wa.me/231888351388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/30 transition-colors">
                    <Phone className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="font-sans text-deep-brown font-medium text-sm">
                      WhatsApp / Phone
                    </p>
                    <p className="font-sans text-warm-gray text-sm group-hover:text-terracotta transition-colors">
                      +231 888 351 388
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@rootsofafricatours.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/30 transition-colors">
                    <Mail className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-sans text-deep-brown font-medium text-sm">
                      Email
                    </p>
                    <p className="font-sans text-warm-gray text-sm group-hover:text-terracotta transition-colors">
                      info@rootsofafricatours.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-ochre/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-ochre" />
                  </div>
                  <div>
                    <p className="font-sans text-deep-brown font-medium text-sm">
                      Location
                    </p>
                    <p className="font-sans text-warm-gray text-sm">
                      Monrovia, Liberia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-deep-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-deep-brown" />
                  </div>
                  <div>
                    <p className="font-sans text-deep-brown font-medium text-sm">
                      Response Time
                    </p>
                    <p className="font-sans text-warm-gray text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-deep-brown/10">
                  <p className="font-sans text-xs text-warm-gray mb-3">
                    Follow us on social media
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/roots_of_africa_tours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-cream rounded-full flex items-center justify-center text-deep-brown hover:text-terracotta hover:bg-terracotta/10 transition-colors"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1aZLrAUT3n/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-cream rounded-full flex items-center justify-center text-deep-brown hover:text-terracotta hover:bg-terracotta/10 transition-colors"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@roots_of_africa_tours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-cream rounded-full flex items-center justify-center text-deep-brown hover:text-terracotta hover:bg-terracotta/10 transition-colors"
                      aria-label="TikTok"
                      title="TikTok"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
