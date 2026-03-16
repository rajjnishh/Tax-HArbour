import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, FloatingButtons } from './components/Navigation';
import { Home } from './pages/Home';
import { About, Contact, ServicesPage } from './pages/OtherPages';
import { PricingPage, BlogPage } from './pages/BlogAndPricing';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Pages - Simple placeholders */}
            <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
            <Route path="/terms" element={<LegalPage title="Terms of Service" />} />
            <Route path="/disclaimer" element={<LegalPage title="Tax Disclaimer" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

const LegalPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-24 px-6 max-w-3xl mx-auto space-y-8">
    <h1 className="text-4xl font-bold">{title}</h1>
    <div className="space-y-4 text-gray-600 leading-relaxed">
      <p>This is a placeholder for the {title} content. In a production environment, this would contain the full legal text required for TaxHarbour.</p>
      <p>TaxHarbour is a professional tax advisory firm. While we strive for accuracy, tax laws are subject to change and interpretation. Always consult with a qualified professional for your specific situation.</p>
    </div>
  </div>
);
