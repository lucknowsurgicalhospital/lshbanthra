import { motion } from 'motion/react';
import { SERVICES } from '@/constants';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-950 mb-6"
          >
            Our Medical Specialties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Lucknow Surgical Hospital provides a comprehensive range of surgical and medical services delivered by experts in their respective fields.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  <service.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.details}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Expert Specialist Doctors
                  </li>
                  <li className="flex items-center text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Modern Diagnostic Support
                  </li>
                  <li className="flex items-center text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Personalized Patient Care
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={`https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600&seed=${service.id}`}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
