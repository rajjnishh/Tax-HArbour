import React from 'react';
import { motion } from 'motion/react';
import { BRAND, SERVICES, FAQS, TESTIMONIALS } from '../constants';
import { LeadForm, ServiceCard, PricingCard, TestimonialCard, AddToCalendar, FAQAccordion } from '../components/UI';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { Shield, Users, Award, Clock, Star, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export const Home = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue-light/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-red/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-dark/5 text-brand-blue-dark text-sm font-bold border border-brand-blue-dark/10">
              <Shield size={16} className="text-brand-red" /> Specialists in Seafarer & NRI Taxation
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-brand-blue-dark">
              Stress-Free Tax Filing for <span className="text-brand-red">Seafarers & NRIs</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
              Expert assistance with ITR filing, NRI taxation, and maritime tax compliance in India. Trusted by maritime professionals worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BRAND.contact.phone}`} className="fintech-button-primary flex items-center gap-2">
                Talk to Expert <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-3">
                <a href={BRAND.contact.calendly} target="_blank" rel="noopener noreferrer" className="fintech-button-secondary">
                  Book Meeting
                </a>
                <AddToCalendar />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-2xl font-bold text-brand-blue-dark">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue-dark">1000+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Returns Filed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue-dark">4.9/5</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Google Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center lg:justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-brand-blue-dark">
            <Award size={24} className="text-brand-red" /> CA Certified Professionals
          </div>
          <div className="flex items-center gap-2 font-bold text-brand-blue-dark">
            <Shield size={24} className="text-brand-red" /> Secure Data Handling
          </div>
          <div className="flex items-center gap-2 font-bold text-brand-blue-dark">
            <Users size={24} className="text-brand-red" /> 1000+ Clients Served
          </div>
          <div className="flex items-center gap-2 font-bold text-brand-blue-dark">
            <Clock size={24} className="text-brand-red" /> Fast Turnaround
          </div>
        </div>
      </section>

      {/* Founders Message */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full" />
          <blockquote className="text-2xl md:text-3xl font-medium text-brand-blue-dark italic leading-relaxed">
            “Our goal at TaxHarbour is to provide seamless tax solutions for the global Indian community. We combine deep technical expertise with a personalized approach to ensure every seafarer and NRI feels confident and compliant with their Indian tax obligations. We are committed to simplifying the complex world of international taxation, providing you with peace of mind while you focus on your global career.”
          </blockquote>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-gray-100">
            <div className="space-y-3">
              <p className="text-xl font-bold text-brand-blue-dark">Sharad Mittal</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>DMET Alumnus (Batch 2012–2016)</p>
                <p>Maritime Professional</p>
                <p className="font-bold text-brand-red uppercase tracking-wider text-[10px]">Co-Founder, TaxHarbour</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xl font-bold text-brand-blue-dark">Jaya Mittal</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>SRCC Alumnus | Maritime Professional</p>
                <p className="font-bold text-brand-red uppercase tracking-wider text-[10px]">Co-Founder, TaxHarbour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-blue-dark">Expert Tax Services</h2>
            <p className="text-gray-500">Comprehensive tax solutions tailored for maritime professionals and NRIs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-brand-blue-dark text-white rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Why Maritime Professionals Choose TaxHarbour</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Maritime Expertise", desc: "Deep understanding of merchant navy tax rules." },
                { title: "NRI Specialists", desc: "Expert handling of foreign income & DTAA." },
                { title: "Transparent Pricing", desc: "No hidden fees. Upfront fixed pricing." },
                { title: "End-to-End Support", desc: "From filing to notice resolution." },
                { title: "Fast Turnaround", desc: "Returns filed within 48 hours." },
                { title: "Dedicated Advisor", desc: "Personal consultant for every client." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={18} /> {item.title}
                  </div>
                  <p className="text-sm text-brand-blue-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-12 flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold">100%</div>
                <p className="text-brand-blue-light uppercase tracking-widest text-xs font-bold">Compliance Rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">₹15Cr+</div>
                <p className="text-brand-blue-light uppercase tracking-widest text-xs font-bold">Tax Saved for Clients</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">24/7</div>
                <p className="text-brand-blue-light uppercase tracking-widest text-xs font-bold">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 px-6">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-blue-dark">Trusted by 1000+ Professionals</h2>
            <p className="text-gray-500">Don't just take our word for it. Here's what our clients have to say about their experience with TaxHarbour.</p>
          </div>
        </div>
        
        <div className="mt-12">
          <ReviewCarousel reviews={TESTIMONIALS} />
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-blue-dark">Simple, Transparent Pricing</h2>
            <p className="text-gray-500">Premium service at competitive rates. Choose the plan that fits your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="ITR Filing (Basic)" 
              price="₹2,499" 
              features={["Salary Income", "Income from Other Sources", "Tax saving advice", "Email support"]} 
            />
            <PricingCard 
              title="ITR Filing (Premium)" 
              price="₹4,499" 
              recommended={true}
              features={["Salary & Other Sources", "House Property & Capital Gains", "F&O & Speculative Income", "Crypto Income", "Priority support"]} 
            />
            <PricingCard 
              title="Income Tax Notice" 
              price="₹2,999" 
              startingFrom={true}
              features={["Defective ITR Notice", "Scrutiny Cases", "Appeal Cases", "Expert representation"]} 
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-brand-blue-dark text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-red rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-4xl md:text-5xl font-bold relative z-10">Ready to Secure Your Tax Future?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto relative z-10">
            Join 1000+ seafarers and NRIs who trust TaxHarbour for their Indian tax compliance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 relative z-10">
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BRAND.contact.calendly} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-brand-red rounded-full font-bold hover:bg-gray-100 transition-all">
                Book Free Consultation
              </a>
              <a href={`tel:${BRAND.contact.phone}`} className="px-8 py-4 bg-brand-blue-dark text-white rounded-full font-bold hover:bg-brand-blue-dark/90 transition-all">
                Talk to Expert
              </a>
            </div>
            <div className="bg-white/10 p-1 rounded-full backdrop-blur-md">
              <AddToCalendar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
