/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Insurance from './pages/Insurance';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import { Phone, MessageCircle } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
      <a 
        href="https://wa.me/919555255348" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a 
        href="tel:9936351264" 
        className="bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all animate-bounce hover:scale-110 active:scale-95"
        title="Emergency Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

