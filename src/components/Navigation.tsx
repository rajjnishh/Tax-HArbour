import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Knowledge Center', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tighter text-brand-blue-dark">
              Tax<span className="text-brand-red">Harbour</span>
            </span>
          </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-red',
                location.pathname === item.path ? 'text-brand-red' : 'text-brand-blue-dark'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-brand-blue-dark">
            <a href={`tel:${BRAND.contact.phone}`} className="hover:text-brand-red transition-colors">
              <Phone size={18} />
            </a>
            <a href={`https://wa.me/${BRAND.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
          <a
            href={BRAND.contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="fintech-button-primary text-sm py-2 px-5"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-blue-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === item.path ? 'text-brand-red' : 'text-brand-blue-dark'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <div className="flex flex-col gap-4 pt-2">
                <a href={`tel:${BRAND.contact.phone}`} className="flex items-center gap-3 text-brand-blue-dark">
                  <Phone size={20} /> {BRAND.contact.phone}
                </a>
                <a href={BRAND.contact.calendly} target="_blank" rel="noopener noreferrer" className="fintech-button-primary text-center">
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <span className="text-2xl font-bold tracking-tighter text-white">
              Tax<span className="text-brand-red">Harbour</span>
            </span>
          </Link>
          <p className="text-brand-blue-light text-sm leading-relaxed">
            Premium tax advisory firm specialising in ITR filing, NRI taxation, and maritime compliance. Trusted by 1000+ professionals worldwide.
          </p>
          <div className="flex gap-4">
            <a href={BRAND.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Facebook size={18} />
            </a>
            <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-brand-blue-light">
            <li><Link to="/services" className="hover:text-white transition-colors">ITR Filing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">NRI Taxation</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Seafarer Tax Residency</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Notice Handling</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-brand-blue-light">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Knowledge Center</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-brand-blue-light">
            <li className="flex items-center gap-3">
              <Phone size={16} /> {BRAND.contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} /> {BRAND.contact.whatsapp}
            </li>
            <li className="flex items-center gap-3">
              <Calendar size={16} /> {BRAND.contact.calendly.replace('https://', '')}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-blue-light">
        <p>© {new Date().getFullYear()} TaxHarbour. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          <Link to="/disclaimer" className="hover:text-white">Tax Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${BRAND.contact.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${BRAND.contact.phone}`}
        className="w-14 h-14 bg-brand-blue-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-brand-blue-dark/40 transition-shadow"
      >
        <Phone size={28} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={BRAND.contact.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-brand-red text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-brand-red/40 transition-shadow"
      >
        <Calendar size={28} />
      </motion.a>
    </div>
  );
};
