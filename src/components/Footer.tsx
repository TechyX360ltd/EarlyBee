import React from 'react';
import { ChefHat, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logoImage from '../assets/Earlybee-Logo-revamp-e1750946982329.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoImage} alt="EarlyBee Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering Nigerian food entrepreneurs to build sustainable and profitable businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/earlybee_inc?igsh=MWxiNXhmcDc1MXo0eQ==" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Program Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Program</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#program" className="hover:text-white transition-colors">Program Overview</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#success" className="hover:text-white transition-colors">Success Stories</a></li>
              <li className="text-gray-500 cursor-not-allowed">Application Closed</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sponsor the BSEP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join our Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Reach Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#C9A14A]" />
                <span>Kosofe, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#C9A14A]" />
                <span>+234 902 251 6693</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#C9A14A]" />
                <span>support@earlybee.ca</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EarlyBee Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;