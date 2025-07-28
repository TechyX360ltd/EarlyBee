import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChefHat, Clock, Users, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const applicationRef = location.state?.applicationRef || `EB-BSEP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8 overflow-x-hidden">
      {/* Print-only content */}
      <div className="hidden print:block print:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Confirmation</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Application Reference Number</h2>
              <div className="text-2xl font-mono font-bold text-[#C9A14A]">{applicationRef}</div>
            </div>
            <p className="text-gray-600 mb-4">
              Thank you for applying to the EarlyBee Food Business Program. 
              We have received your application and will review it. You will be notified of the next steps if you are selected.
            </p>
            <div className="text-sm text-gray-500">
              <p>Date: {new Date().toLocaleDateString()}</p>
              <p>Time: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen-only content */}
      <div className="print:hidden">
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
              <div className="bg-[#C9A14A] text-black p-6 rounded-2xl mb-8">
                <h3 className="text-lg font-bold mb-2">Application Reference Number</h3>
                <div className="text-2xl font-mono font-bold">{applicationRef}</div>
                <p className="text-orange-100 text-sm mt-2">Please save this reference number for your records</p>
              </div>

              {/* Next Steps */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Review Process</h3>
                  <p className="text-gray-600 text-sm">We'll review your application and reach out to you if you are selected.</p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Selection Process</h3>
                  <p className="text-gray-600 text-sm">Eligible candidates will be selected and contacted to notify them of the next steps.</p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChefHat className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Program Start</h3>
                  <p className="text-gray-600 text-sm">The 3 weeks program then begins as we have you on board.</p>
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
                    <span>Questions? Call us at <strong>+234 801 234 5678</strong> or email <strong>temi@earlybee.ca</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors"
                >
                  Back to Home
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  Print Confirmation
                </button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">Join our community while you wait:</p>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.facebook.com/share/1VNeZzzeVY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/earlybee_inc?igsh=MTZnYmhxYWJ1MmI2bg==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://chat.whatsapp.com/IcoVlqyhNO80yza5qJ7Bgj?mode=ac_t" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                    <div className="h-5 w-5 bg-green-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">W</span>
                    </div>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a href="https://www.linkedin.com/company/earlybeeinc/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;