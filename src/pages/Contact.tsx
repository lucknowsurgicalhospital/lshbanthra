import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-950 mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Have questions? We're here to help. Reach out to us via phone, email, or visit our hospital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">+91 9555255348</p>
            <p className="text-red-600 font-bold">Emergency: 9936351264</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Email</h3>
            <p className="text-gray-600">lshbanthra@gmail.com</p>
            <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Location</h3>
            <p className="text-gray-600">Banthra Sikanderpur, Kanpur Road, Lucknow</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-blue-950 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              <textarea 
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 h-[500px] lg:h-auto rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.303964893944!2d80.8124!3d26.7124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQyJzQ0LjYiTiA4MMKwNDgnNDQuNiJF!5e0!3m2!1sen!2sin!4v1648000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Lucknow Surgical Hospital Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
