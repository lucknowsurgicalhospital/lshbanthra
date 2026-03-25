import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, HeartPulse, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">
                  Lucknow Surgical
                </span>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Hospital
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Providing high-quality healthcare services with modern diagnostic facilities and compassionate care in Lucknow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/insurance" className="hover:text-white transition-colors">Insurance & TPA</Link></li>
              <li><Link to="/appointment" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Medical Services</h3>
            <ul className="space-y-4 text-sm">
              <li>General Surgery</li>
              <li>General Medicine</li>
              <li>Obstetrics & Gynecology</li>
              <li>Orthopedics</li>
              <li>Neurosurgery</li>
              <li>Pediatrics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Banthra Sikanderpur, Kanpur Road, Lucknow</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+91 9555255348</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>lshbanthra@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Lucknow Surgical Hospital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
