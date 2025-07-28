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
              Applications are now open for our next cohort only for Lagos residents.
            </p>
            <Link 
              to="/enroll"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now - It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="mt-4 text-black text-sm">
              Limited spots available • No application fees • Free busniess growth funding available
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;