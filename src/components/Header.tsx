import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import logoImage from '../assets/Earlybee-Logo-revamp-e1750946982329.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="EarlyBee Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#program" className={`text-lg text-gray-700 transition-colors duration-200 underline-offset-8 decoration-2 ${location.hash === '#program' ? 'text-[#C9A14A] underline font-semibold' : 'hover:text-[#C9A14A] hover:underline'}`}>Program</a>
            <a href="#benefits" className={`text-lg text-gray-700 transition-colors duration-200 underline-offset-8 decoration-2 ${location.hash === '#benefits' ? 'text-[#C9A14A] underline font-semibold' : 'hover:text-[#C9A14A] hover:underline'}`}>Benefits</a>
            <a href="#success" className={`text-lg text-gray-700 transition-colors duration-200 underline-offset-8 decoration-2 ${location.hash === '#success' ? 'text-[#C9A14A] underline font-semibold' : 'hover:text-[#C9A14A] hover:underline'}`}>Success Stories</a>
            <a href="#contact" className={`text-lg text-gray-700 transition-colors duration-200 underline-offset-8 decoration-2 ${location.hash === '#contact' ? 'text-[#C9A14A] underline font-semibold' : 'hover:text-[#C9A14A] hover:underline'}`}>Contact</a>
          </nav>

          {/* Desktop CTA - Disabled */}
          <button 
            disabled
            className="hidden md:inline-flex bg-gray-400 text-gray-600 px-6 py-2 rounded-full cursor-not-allowed font-medium opacity-75"
          >
            Application Closed
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-2">
            <nav className="flex flex-col space-y-4">
              <a href="#program" className="text-gray-700 hover:text-[#C9A14A] transition-colors" onClick={() => setIsMenuOpen(false)}>Program</a>
              <a href="#benefits" className="text-gray-700 hover:text-[#C9A14A] transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              <a href="#success" className="text-gray-700 hover:text-[#C9A14A] transition-colors" onClick={() => setIsMenuOpen(false)}>Success Stories</a>
              <a href="#contact" className="text-gray-700 hover:text-[#C9A14A] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button 
                disabled
                className="bg-gray-400 text-gray-600 px-6 py-2 rounded-full cursor-not-allowed text-center opacity-75"
              >
                Application Closed
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;