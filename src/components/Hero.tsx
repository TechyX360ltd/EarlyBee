import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';
import heroImage from '../assets/hero2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#e7c8a0] py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-100 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-amber-100 text-orange-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Nigeria's #1 Food Enterprise Program
            </div>

            {/* Main headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Join BSEP, Stand a chance
              <span className="bg-[#C9A14A] bg-clip-text text-transparent"> to win a Grant of ₦100K</span> to market your Business
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Are you planning to start a Food Business or already have one? Join EarlyBee's Business Sustainability and Enterprise Program for 
             small scale food businesses to connect with fellow entrepreneurs and get the skills you need to grow your food business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/enroll"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="#program"
                className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-[#C9A14A]" />
                <span>100+ Entrepreneurs Trained</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-[#C9A14A]" />
                <span>Free Business registration for selected participants</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-[#C9A14A]" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 overflow-x-hidden">
            {/* Main image placeholder replaced with a sample image */}
            <div className="relative bg-gradient-to-br from-[#C9A14A] to-[#F5ECD6] rounded-3xl p-4 sm:p-8 shadow-2xl max-w-xs mx-auto lg:max-w-none border-4" style={{ borderColor: '#C9A14A' }}>
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={heroImage}
                  alt="Hero section image - EarlyBee Food Business"
                  className="object-cover w-full h-full rounded-2xl border-4"
                  style={{ borderColor: '#C9A14A' }}
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 right-2 sm:-top-4 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg text-center min-w-[90px]">
                <div className="text-green-500 font-bold text-sm sm:text-base">₦100K Grant</div>
                <div className="text-xs text-gray-600">For Top Participants</div>
              </div>
              <div className="absolute -bottom-4 left-2 sm:-bottom-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg text-center min-w-[90px]">
                <div className="text-orange-500 font-bold text-sm sm:text-base">3 Weeks</div>
                <div className="text-xs text-gray-600">Program Duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;