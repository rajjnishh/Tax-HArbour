import React from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../constants';
import { PricingCard, LeadForm } from '../components/UI';
import { Search, ArrowRight, BookOpen, Clock } from 'lucide-react';

// Pricing Page
export const PricingPage = () => {
  const pricingData: { category: string, plans: { title: string, price: string, features: string[], startingFrom?: boolean }[] }[] = [
    {
      category: "Income Tax Return Filing",
      plans: [
        { title: "ITR Filing (Basic)", price: "₹2,499", features: ["Salary Income", "Income from Other Sources"] },
        { title: "ITR Filing (Standard)", price: "₹2,999", features: ["Salary Income", "Income from Other Sources", "Income from House Property"] },
        { title: "ITR Filing (Plus)", price: "₹3,499", features: ["Salary Income", "Income from Other Sources", "Income from House Property", "Income from Capital Gains"] },
        { title: "ITR Filing (Pro)", price: "₹3,999", features: ["Salary Income", "Income from Other Sources", "Income from House Property", "Income from Capital Gains", "F&O and Speculative Income"] },
        { title: "ITR Filing (Premium)", price: "₹4,499", features: ["Salary Income", "Income from Other Sources", "Income from House Property", "Income from Capital Gains", "F&O and Speculative Income", "Crypto Income"] },
      ]
    },
    {
      category: "Income Tax Notice",
      plans: [
        { title: "Defective ITR Notice", price: "₹2,999", features: ["Notice for Defective ITR U/S 139 (9)"], startingFrom: true },
        { title: "Scrutiny Cases", price: "₹24,999", features: ["Expert Guidance on Response", "Preparation and Filing of Documents", "Representation with Tax Authorities", "Complete Follow up and Resolution"], startingFrom: true },
        { title: "Appeal Cases", price: "₹29,999", features: ["Expert Guidance on Response", "Preparation and Filing of Documents", "Representation with Tax Authorities", "Complete Follow up and Resolution"], startingFrom: true },
      ]
    },
    {
      category: "Tax Planning",
      plans: [
        { title: "Tax Planning (Basic)", price: "₹1,499", features: ["Advance Tax Calculation"] },
        { title: "Tax Planning (Consultancy)", price: "₹2,499", features: ["Advance Tax Calculation", "Consultancy"] },
      ]
    },
    {
      category: "TDS Return Filing",
      plans: [
        { title: "TDS on Sale of Property", price: "₹2,499", features: ["Filing of Form-26QB for TDS on Sale of Property", "Generation of TDS Certificate in Form 16B"] },
        { title: "TDS on Rent of Property", price: "₹2,499", features: ["Filing of Form-26QC for TDS on Rent of Property", "Generation of TDS Certificate in Form 16C"] },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-brand-blue-dark">Transparent Pricing</h1>
          <p className="text-xl text-gray-500">Premium tax advisory with no hidden costs. Professional expertise at fair rates.</p>
        </div>
        
        <div className="space-y-24">
          {pricingData.map((section, idx) => (
            <div key={idx} className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-gray-100"></div>
                <h2 className="text-2xl font-bold text-brand-blue-dark uppercase tracking-widest">{section.category}</h2>
                <div className="h-px flex-grow bg-gray-100"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.plans.map((plan, pIdx) => (
                  <PricingCard 
                    key={pIdx}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    startingFrom={plan.startingFrom}
                    recommended={plan.title.includes('Premium') || plan.title.includes('Scrutiny')}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-12 rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-brand-blue-dark">Custom Requirements?</h3>
            <p className="text-gray-500">If you have multiple income sources, complex capital gains, or ongoing tax notices, we can provide a custom quote tailored to your needs.</p>
            <div className="flex gap-4">
              <a href={`tel:${BRAND.contact.phone}`} className="fintech-button-primary">Talk to Expert</a>
              <a href={BRAND.contact.calendly} target="_blank" rel="noopener noreferrer" className="fintech-button-secondary">Book Meeting</a>
            </div>
          </div>
          <div className="bg-brand-blue-dark/5 p-8 rounded-3xl space-y-4">
            <h4 className="font-bold">What's included in every plan:</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">✅ CA-led review of every filing</li>
              <li className="flex items-center gap-2">✅ Secure document storage</li>
              <li className="flex items-center gap-2">✅ Post-filing support</li>
              <li className="flex items-center gap-2">✅ Tax saving recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Knowledge Center (Blog)
const BLOG_POSTS = [
  {
    title: "Tax Residency Rules for Seafarers in 2024",
    category: "Seafarer Taxation",
    date: "March 10, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/ship/800/600"
  },
  {
    title: "How NRIs can save tax on Indian Rental Income",
    category: "NRI Tax Rules",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/house/800/600"
  },
  {
    title: "Top 5 Deductions for Salaried Professionals",
    category: "ITR Filing",
    date: "Feb 28, 2024",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/money/800/600"
  },
  {
    title: "Understanding DTAA: Avoiding Double Taxation",
    category: "DTAA",
    date: "Feb 20, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/global/800/600"
  }
];

export const BlogPage = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl font-bold text-brand-blue-dark">Knowledge Center</h1>
            <p className="text-xl text-gray-500">Expert insights on Indian taxation, NRI compliance, and maritime tax rules.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search articles..." className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Seafarer Taxation", "NRI Tax Rules", "ITR Filing", "Tax Saving", "DTAA"].map(cat => (
            <button key={cat} className="px-6 py-3 rounded-full border border-gray-100 bg-white text-sm font-bold text-brand-blue-dark hover:border-brand-red hover:text-brand-red transition-all">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card rounded-[2.5rem] overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-red">
                  <span>{post.category}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-blue-dark leading-tight group-hover:text-brand-red transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock size={14} /> {post.readTime}
                  </div>
                  <button className="text-brand-blue-dark font-bold text-sm flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-blue-dark rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8">
          <BookOpen size={48} className="mx-auto text-brand-red" />
          <h2 className="text-3xl md:text-4xl font-bold">Get Our Free Seafarer Tax Guide</h2>
          <p className="text-brand-blue-light max-w-2xl mx-auto">A comprehensive 20-page guide on residency rules, tax exemptions, and compliance for maritime professionals.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20 transition-all" />
            <button className="fintech-button-accent whitespace-nowrap">Download Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};
