import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Clock, Users, Activity } from 'lucide-react';
import { SERVICES, FACILITIES } from '@/constants';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Hospital Hallway" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 tracking-wide uppercase">
                Trusted Care, Advanced Healing
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-blue-950 leading-tight mb-6">
                Your Health is Our <span className="text-blue-600">Top Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Lucknow Surgical Hospital provides world-class multi-specialty healthcare with modern diagnostic facilities and compassionate medical experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/appointment" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:9555255348" 
                  className="bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-500 font-medium">Emergency Care</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-500 font-medium">Specialties</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">Cashless</p>
                <p className="text-sm text-gray-500 font-medium">Treatment Available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 group hover:bg-blue-600 transition-all duration-500">
              <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                <Clock className="h-7 w-7 text-white group-hover:text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-white">24/7 Emergency</h3>
              <p className="text-gray-600 group-hover:text-blue-50">Our emergency department is always ready to provide immediate medical attention when every second counts.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-3xl border border-green-100 group hover:bg-green-600 transition-all duration-500">
              <div className="bg-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                <ShieldCheck className="h-7 w-7 text-white group-hover:text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4 group-hover:text-white">Cashless Treatment</h3>
              <p className="text-gray-600 group-hover:text-green-50">Empaneled with major insurance companies and TPAs to ensure hassle-free treatment for our patients.</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 group hover:bg-orange-600 transition-all duration-500">
              <div className="bg-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                <Activity className="h-7 w-7 text-white group-hover:text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-950 mb-4 group-hover:text-white">Modern Diagnostics</h3>
              <p className="text-gray-600 group-hover:text-orange-50">Equipped with the latest medical technology for accurate diagnosis and effective treatment planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-950 mb-6">Our Core Medical Services</h2>
            <p className="text-gray-600">We offer a wide range of specialized medical services delivered by experienced professionals using advanced technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-semibold text-sm flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-blue-600 font-bold text-lg hover:underline">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 z-0" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Need Immediate Medical Assistance?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Our emergency team is available 24/7. For appointments, you can book online or call our helpline directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/appointment" 
              className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-2xl"
            >
              Book Online Appointment
            </Link>
            <a 
              href="tel:9936351264" 
              className="bg-blue-700 text-white border border-blue-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all"
            >
              Emergency Call: 9936351264
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
