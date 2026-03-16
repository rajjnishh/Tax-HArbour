import React from 'react';
import { motion } from 'motion/react';
import { BRAND, SERVICES } from '../constants';
import { ServiceCard, LeadForm } from '../components/UI';
import { Mail, Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';

// About Page
export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-brand-blue-dark">Our Mission</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            At TaxHarbour, we bridge the gap between complex Indian tax laws and the unique financial lives of maritime professionals and NRIs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-brand-blue-dark">Meet the Founders</h2>
            <p className="text-gray-500 leading-relaxed">
              TaxHarbour was founded by a unique team combining maritime experience and financial expertise. We understand the sea, and we understand the law.
            </p>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <img src={BRAND.images.sharad} alt="Sharad Mittal" className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Sharad Mittal</h4>
                  <p className="text-brand-red font-bold text-sm uppercase tracking-widest">Co-Founder</p>
                  <p className="text-gray-500 text-sm">DMET Alumnus (2012–2016). Specialist in Seafarer Taxation & Maritime Compliance. Bringing first-hand maritime experience to tax advisory.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <img src={BRAND.images.jaya} alt="CA Jaya Mittal" className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">CA Jaya Mittal</h4>
                  <p className="text-brand-red font-bold text-sm uppercase tracking-widest">Co-Founder</p>
                  <p className="text-gray-500 text-sm">Chartered Accountant & Alumnus of SRCC. Expert in NRI Taxation & Indian Income Tax Compliance. Ensuring precision in every filing.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-brand-blue-dark rounded-[3rem] p-12 text-white space-y-8">
            <h3 className="text-3xl font-bold">Why We Started</h3>
            <p className="text-brand-blue-light leading-relaxed">
              "As a DMET graduate, I saw my colleagues struggling with tax notices and residency status confusion while they were at sea. We built TaxHarbour to be the reliable 'harbour' for their taxes, ensuring they can focus on their careers while we handle the compliance with CA-led precision."
            </p>
            <p className="font-bold">— Sharad Mittal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
export const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-brand-blue-dark">Get in Touch</h1>
            <p className="text-xl text-gray-500">Have questions? Our experts are ready to help you navigate your taxes.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-blue-dark/5 text-brand-blue-dark rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-gray-500">{BRAND.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-blue-dark/5 text-brand-blue-dark rounded-2xl flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp</h4>
                <p className="text-gray-500">{BRAND.contact.whatsapp}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-blue-dark/5 text-brand-blue-dark rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-500">{BRAND.contact.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-blue-dark/5 text-brand-blue-dark rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Office</h4>
                <p className="text-gray-500">{BRAND.contact.address}</p>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.432658!2d80.4141246!3d28.1552573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f670775cc6929%3A0xf6b336891a82656a!2sTax%20Harbour!5e0!3m2!1sen!2sin!4v1710595141000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tax Harbour Location"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          <LeadForm title="Send a Message" subtitle="Fill out the form below and we'll get back to you shortly." />
          <div className="glass-card p-8 rounded-3xl text-center space-y-6">
            <h4 className="text-xl font-bold">Prefer a Direct Meeting?</h4>
            <p className="text-gray-500 text-sm">Schedule a 30-minute consultation directly with our tax experts.</p>
            <a href={BRAND.contact.calendly} target="_blank" rel="noopener noreferrer" className="fintech-button-primary w-full flex items-center justify-center gap-2">
              <Calendar size={18} /> Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Page
export const ServicesPage = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-brand-blue-dark">Our Services</h1>
          <p className="text-xl text-gray-500">Comprehensive tax solutions for global professionals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
      </div>
    </div>
  );
};
