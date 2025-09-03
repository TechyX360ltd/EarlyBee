import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Award, 
  ChefHat,
  Utensils,
  Store,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProgramHighlights from '../components/ProgramHighlights';
import SuccessStories from '../components/SuccessStories';
import ProgramBenefits from '../components/ProgramBenefits';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Application Closed Banner */}
      <div className="bg-red-600 text-white py-4 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-lg font-bold">APPLICATIONS ARE NOW CLOSED</span>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm mt-1 opacity-90">Thank you for your interest. Applications for this cohort are no longer being accepted.</p>
        </div>
      </div>
      
      <Hero />
      <ProgramHighlights />
      <ProgramBenefits />
      <SuccessStories />
      
      {/* CTA Section */}
      <section className="py-20 bg-[#C9A14A]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Food Business?
            </h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Join hundreds of successful food entrepreneurs who have grown their businesses with EarlyBee. 
              Applications are now closed for this cohort.
            </p>
            <button 
              disabled
              className="inline-flex items-center bg-gray-400 text-gray-600 px-8 py-4 rounded-full font-semibold text-lg cursor-not-allowed opacity-75"
            >
              Applications Closed
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="mt-4 text-black text-sm">
              Applications closed • No application fees • Free busniess growth funding available
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;