import { motion } from 'motion/react';
import { INSURANCE_PARTNERS } from '@/constants';
import { ShieldCheck, CreditCard, Heart, CheckCircle2 } from 'lucide-react';

export default function Insurance() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-950 mb-6"
          >
            Insurance & Cashless Treatment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We focus on making healthcare accessible and affordable through extensive insurance tie-ups and government schemes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Cashless Treatment</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Lucknow Surgical Hospital is empaneled with major insurance companies and TPAs (Third Party Administrators). This allows eligible patients to receive treatment without immediate out-of-pocket expenses.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Hassle-free documentation support</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Dedicated TPA desk for assistance</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Fast authorization process</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 p-10 rounded-3xl border border-green-100 shadow-sm"
          >
            <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-950 mb-6">Ayushman Bharat (PM-JAY)</h2>
            <p className="text-green-900/70 text-lg leading-relaxed mb-8">
              We are proud to be empaneled under the Ayushman Bharat scheme, providing free healthcare services to eligible beneficiaries as per government guidelines.
            </p>
            <div className="bg-white/50 p-6 rounded-2xl border border-green-200">
              <h4 className="font-bold text-green-950 mb-2">Required Documents:</h4>
              <ul className="list-disc list-inside text-green-900/70 space-y-1">
                <li>Ayushman Card / Golden Card</li>
                <li>Aadhar Card</li>
                <li>Ration Card</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Insurance Partners</h3>
          <p className="text-gray-500">We work with all major insurance providers to serve you better.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INSURANCE_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-center text-center font-bold text-gray-700 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-all min-h-[100px]"
            >
              <span className="text-sm md:text-base">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
