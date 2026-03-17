import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND, SERVICES } from '../constants';
import { CheckCircle2, Star, ArrowRight, FileText, PieChart, AlertCircle, ClipboardCheck, Globe, Ship, TrendingUp, ShieldCheck, Calendar, ExternalLink, ChevronDown } from 'lucide-react';

const IconMap: Record<string, any> = {
  FileText,
  PieChart,
  AlertCircle,
  ClipboardCheck,
  Globe,
  Ship,
  TrendingUp,
  ShieldCheck,
};

export const AddToCalendar = ({ 
  title = "Tax Consultation - TaxHarbour", 
  description = "Consultation regarding Seafarer/NRI Taxation with TaxHarbour Experts.", 
  location = "Online / Google Meet",
  duration = 30 // minutes
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate a date for tomorrow at 10:00 AM
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0, 0);
  const end = new Date(start.getTime() + duration * 60000);

  const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');

  const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${formatDate(start)}/${formatDate(end)}`;
  
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&startdt=${start.toISOString()}&enddt=${end.toISOString()}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(start)}`,
    `DTEND:${formatDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');

  const icsUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
      >
        <Calendar size={16} className="text-brand-red" /> Add to Calendar
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Google Calendar
            </a>
            <a href={outlookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-700" /> Outlook Calendar
            </a>
            <a href={icsUrl} download="consultation.ics" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-gray-400" /> iCal / Apple
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export const LeadForm = ({ title = "Get Free Consultation", subtitle = "Our experts will get back to you within 24 hours." }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = BRAND.contact.calendly;
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 rounded-3xl text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={32} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Thank You!</h3>
          <p className="text-gray-600">Redirecting you to schedule a meeting...</p>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Or add a reminder</p>
          <AddToCalendar />
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-3xl space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
          <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark/10 transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
          <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark/10 transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone Number</label>
          <input 
            required 
            type="tel" 
            pattern="(\+\d{1,4}[- ]?)?\d{10}"
            title="Please enter a valid phone number with 10 digits (excluding country code)"
            placeholder="+91 98765 43210" 
            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark/10 transition-all" 
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Service Needed</label>
          <select required className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark/10 transition-all appearance-none">
            <option value="">Select a service</option>
            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </div>
        <button type="submit" className="w-full fintech-button-primary py-4 mt-2 flex items-center justify-center gap-2">
          Get Free Consultation <ArrowRight size={18} />
        </button>
      </form>
      <div className="flex items-center justify-center gap-2 pt-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
        </div>
        <span className="text-xs font-medium text-gray-500">4.9/5 based on 500+ reviews</span>
      </div>
    </div>
  );
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = IconMap[service.icon] || FileText;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-3xl group transition-all duration-300 hover:border-brand-red/20"
    >
      <div className="w-12 h-12 bg-brand-blue-dark/5 text-brand-blue-dark rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-bold mb-3">{service.title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <a href={`tel:${BRAND.contact.phone}`} className="text-brand-red font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
        Talk to Expert <ArrowRight size={16} />
      </a>
    </motion.div>
  );
};

export const PricingCard: React.FC<{ title: string, price: string, features: string[], recommended?: boolean, startingFrom?: boolean }> = ({ title, price, features, recommended = false, startingFrom = false }) => {
  return (
    <div className={cn(
      "p-8 rounded-3xl flex flex-col h-full transition-all duration-300",
      recommended ? "bg-brand-blue-dark text-white shadow-2xl scale-105 z-10" : "glass-card"
    )}>
      <div className="mb-8">
        <h4 className={cn("text-sm font-bold uppercase tracking-widest mb-2", recommended ? "text-brand-blue-light" : "text-brand-red")}>{title}</h4>
        <div className="flex items-baseline gap-2">
          {startingFrom && (
            <span className={cn("text-[10px] uppercase tracking-tighter font-bold", recommended ? "text-brand-blue-light" : "text-gray-400")}>
              Starting<br/>from
            </span>
          )}
          <span className="text-4xl font-bold">{price}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={18} className={recommended ? "text-brand-blue-light" : "text-brand-red"} />
            <span className={recommended ? "text-gray-200" : "text-gray-600"}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={BRAND.contact.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full py-4 rounded-full font-bold text-center transition-all",
          recommended ? "bg-white text-brand-blue-dark hover:bg-gray-100" : "bg-brand-blue-dark text-white hover:bg-brand-blue-dark/90"
        )}
      >
        Book Consultation
      </a>
    </div>
  );
};

export const TestimonialCard: React.FC<{ name: string, role: string, feedback: string, image: string }> = ({ name, role, feedback, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-3xl space-y-6 flex flex-col h-full border border-transparent hover:border-brand-red/10 transition-all duration-300"
    >
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-gray-600 italic leading-relaxed flex-grow">"{feedback}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue-dark/5" referrerPolicy="no-referrer" />
        <div>
          <h5 className="font-bold text-brand-blue-dark">{name}</h5>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const FAQAccordion = ({ items }: { items: { question: string, answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-blue-dark hover:bg-gray-50/50 transition-colors"
          >
            <span>{item.question}</span>
            <ChevronDown 
              size={20} 
              className={cn("transition-transform duration-300", openIndex === i ? "rotate-180" : "")} 
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
