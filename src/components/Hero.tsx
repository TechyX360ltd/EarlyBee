import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '../assets/hero2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/50 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Nigeria's #1 Food Enterprise Program
            </div>

            {/* Main headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Business Sustainability 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Enterprise</span> Program
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">(BSEP)</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Are you planning to start a Food Business or already have one? Join EarlyBee's entrprise program for 
             small scale food businesses to connect with fellow entrepreneurs, and get the skills you need to grow your food business with prizes for top participants to market their businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/enroll"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="#program"
                className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
              <span>✓ Free to apply</span>
              <span>✓ No hidden costs</span>
              <span>✓ Scholarship available</span>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Main image placeholder replaced with a sample image */}
            <div className="relative bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl p-4 sm:p-8 shadow-2xl max-w-xs mx-auto lg:max-w-none">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={heroImage}
                  alt="Hero section image - EarlyBee Food Business"
                  className="object-cover w-full h-full rounded-2xl"
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