import React from 'react';
import { BookOpen, Users, TrendingUp, Award, Utensils, Store } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: "Virtual Training",
    description: "3-week intensive virtual program covering everything you need to know from start to launch of your food business."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guidance from successful food entrepreneurs and industry professionals throughout your journey."
  },
  {
    icon: TrendingUp,
    title: "Business Scaling",
    description: "Learn proven strategies to scale your food business from local to regional and beyond."
  },
  {
    icon: Award,
    title: "Certification & Recognition",
    description: "Receive certificate of partcipation and join our network of business owners and enrepreneurs like you."
  },
  {
    icon: Utensils,
    title: "Food Industry Focus",
    description: "Specialized curriculum designed specifically for all local and small food business owners."
  },
  {
    icon: Store,
    title: "Market Access",
    description: "Connect with suppliers, distributors, and customers through our extensive network."
  }
];

const ProgramHighlights: React.FC = () => {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why apply for the
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> BSE Prorgam?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This program is specifically designed for Nigerian small scale food entrepreneurs who want to build 
            sustainable and profitable businesses in the food industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 group-hover:bg-orange-200 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <highlight.icon className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-800 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Program Structure */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">BSEP 3-Week Program Structure</h3>
            <p className="text-orange-100 text-lg">What we've designed for you as a participant</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-200 mb-4">01</div>
              <h4 className="text-xl font-bold mb-3">Foundation (Week 1)</h4>
              <p className="text-orange-100">Food Busniess Structure and Planning.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-200 mb-4">02</div>
              <h4 className="text-xl font-bold mb-3">Development (Week 2)</h4>
              <p className="text-orange-100">Digital Marketing for small food ventures.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-200 mb-4">03</div>
              <h4 className="text-xl font-bold mb-3">Launch (Weeks 3-4)</h4>
              <p className="text-orange-100">Food business finance and compliance | Business Pitching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;