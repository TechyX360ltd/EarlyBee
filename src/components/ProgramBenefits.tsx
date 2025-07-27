import React from 'react';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const benefits = [
  "Free comprehensive food business training program",
  "Mentorship with successful food entrepreneurs",
  "Digital marketing training for food businesses",
  "Business registration and legal compliance support",
  "Financial planning and funding opportunity guidance",
  "Networking opportunities with fellow food entrepreneurs",
  "Certificate of completion"
];

const ProgramBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What you stand to get at the
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> BSEP</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              All you need to start and grow a food business in the Nigerian market
            </p>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#C9A14A] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="h-8 w-8 text-[#C9A14A] mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">2.3M+</div>
                <div className="text-gray-600">Food Businesses in Nigeria</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
                <TrendingUp className="h-8 w-8 text-[#C9A14A] mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">67%</div>
                <div className="text-gray-600">Growth Rate (2023)</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Award className="h-8 w-8 text-[#C9A14A] mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">₦4.2T</div>
                <div className="text-gray-600">Food Industry Value</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
                <div className="text-2xl mb-4">🍽️</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">45%</div>
                <div className="text-gray-600">MSME Food Sector</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramBenefits;