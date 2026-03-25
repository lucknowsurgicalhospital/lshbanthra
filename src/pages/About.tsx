import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Our Hospital</span>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
                Dedicated to Providing the <span className="text-blue-600">Best Medical Care</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Lucknow Surgical Hospital is a premier multi-specialty healthcare institution located in the heart of Lucknow. We are committed to delivering high-quality, compassionate, and affordable medical services to our community.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With a team of highly skilled surgeons, physicians, and medical staff, we combine advanced medical technology with a patient-centric approach to ensure the best possible outcomes for every individual who walks through our doors.
              </p>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-3xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital Building" 
              className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Mission Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h3>
            <p className="text-gray-600">To provide accessible, high-quality healthcare services through medical excellence and compassionate care.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center"
          >
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the most trusted healthcare provider in the region, recognized for clinical innovation and patient safety.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center"
          >
            <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Values</h3>
            <p className="text-gray-600">Integrity, Compassion, Excellence, and Respect are at the core of everything we do.</p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600">We set the standard for healthcare excellence in Lucknow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-950 text-lg mb-2">Expert Team</h4>
                <p className="text-gray-500 text-sm">Highly qualified and experienced medical professionals across all specialties.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-950 text-lg mb-2">Quality Care</h4>
                <p className="text-gray-500 text-sm">Adherence to international standards of medical safety and clinical protocols.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-950 text-lg mb-2">Cashless Facility</h4>
                <p className="text-gray-500 text-sm">Empaneled with major insurance companies for hassle-free treatment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
