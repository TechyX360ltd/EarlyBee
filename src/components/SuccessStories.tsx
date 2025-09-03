import React from 'react';
import { Star, Quote } from 'lucide-react';

const stories = [
  {
    name: "Amaka Okafor",
    business: "Mama Amaka's Kitchen",
    image: "🍲",
    story: "Started with ₦50,000 capital, now generating ₦800,000 monthly revenue. The program helped me scale from cooking at home to running 3 locations in Lagos.",
    revenue: "₦800K/month",
    location: "Lagos, Nigeria"
  },
  {
    name: "Ibrahim Yusuf",
    business: "North Spice Restaurant",
    image: "🍛",
    story: "EarlyBee taught me digital marketing and customer retention after I intially started as a road-side vendor in Canada.",
    revenue: "$2K/month",
    location: "Toronto, Canada"
  },
  {
    name: "Grace Adeolu",
    business: "Sweet Grace Bakery",
    image: "🧁",
    story: "From baking for neighbors to supplying 20 offices around me and events. The business planning module is still somethnig I always go back to.",
    revenue: "₦650K/month",
    location: "Port Harcourt, Nigeria"
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section id="success" className="py-20 bg-[#F5ECD6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Success Stories from 
            <span className="bg-[#C9A14A] bg-clip-text text-transparent"> Real Food Entrepreneurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how EarlyBee graduates have transformed their food businesses and achieved remarkable success across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-[#C9A14A] absolute -top-2 -left-2" />
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  "{story.story}"
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#C9A14A] rounded-full flex items-center justify-center text-2xl">
                  {story.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{story.name}</h4>
                  <p className="text-[#C9A14A] font-medium">{story.business}</p>
                  <p className="text-sm text-gray-500">{story.location}</p>
                </div>
              </div>

              {/* Revenue badge */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-center font-bold">
                  {story.revenue}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Applications are currently closed for this cohort
            </p>
            <button 
              disabled
              className="inline-flex bg-gray-400 text-gray-600 px-8 py-4 rounded-full font-semibold cursor-not-allowed opacity-75"
            >
              Applications Closed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;