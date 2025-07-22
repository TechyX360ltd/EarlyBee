import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChefHat, Clock, Users, Phone } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Application Submitted Successfully! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for applying to the EarlyBee Food Business Program. We're excited about your entrepreneurial journey and look forward to potentially welcoming you to our community of food business leaders.
          </p>

          {/* Application Reference */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl mb-8">
            <h3 className="text-lg font-bold mb-2">Application Reference Number</h3>
            <div className="text-2xl font-mono font-bold">EB-FB-{Math.random().toString(36).substring(2, 8).toUpperCase()}</div>
            <p className="text-orange-100 text-sm mt-2">Please save this reference number for your records</p>
          </div>

          {/* Next Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Review Process</h3>
              <p className="text-gray-600 text-sm">We'll review your application within 5-7 business days and contact you with updates.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600 text-sm">Selected candidates will be invited for a brief interview to discuss their goals and commitment.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Program Start</h3>
              <p className="text-gray-600 text-sm">Successful applicants will be notified and the next cohort begins in 3 weeks.</p>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">📧 Check Your Email</h3>
            <p className="text-gray-700 mb-4">
              We've sent a confirmation email with all the details about next steps and what to expect. 
              If you don't see it in your inbox, please check your spam/junk folder.
            </p>
            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>Questions? Call us at <strong>+234 801 234 5678</strong> or email <strong>hello@earlybeekosofe.com</strong></span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors"
            >
              Print Confirmation
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Join our community while you wait:</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Follow us on Facebook</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">Instagram @EarlyBeeKosofe</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">WhatsApp Community</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;