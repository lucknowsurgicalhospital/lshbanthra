import { motion } from 'motion/react';
import { FACILITIES } from '@/constants';
import { CheckCircle2 } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-950 mb-6"
          >
            Modern Facilities & Diagnostics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We are equipped with state-of-the-art diagnostic and support facilities to ensure accurate results and effective treatment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <facility.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-950 rounded-[3rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">24/7 Support Services</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Round-the-Clock Pharmacy</h4>
                    <p className="text-blue-200/70">Our pharmacy is open 24/7 to provide essential medications at any time of the day or night.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Emergency Lab Services</h4>
                    <p className="text-blue-200/70">Critical diagnostic tests are performed round-the-clock for emergency cases and inpatients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Ambulance Support</h4>
                    <p className="text-blue-200/70">Equipped ambulance services for safe and rapid patient transport in emergency situations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-80 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                alt="Hospital Laboratory" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
