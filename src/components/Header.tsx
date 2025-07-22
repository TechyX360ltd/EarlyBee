import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-orange-500 p-2 rounded-full">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">Early</span>
              <span className="text-xl sm:text-2xl font-bold text-orange-500">Bee</span>
              <div className="text-xs text-gray-600 -mt-1">BSE Program</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#program" className="text-gray-700 hover:text-orange-500 transition-colors">Program</a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-500 transition-colors">Benefits</a>
            <a href="#success" className="text-gray-700 hover:text-orange-500 transition-colors">Success Stories</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <Link 
            to="/enroll"
            className="hidden md:inline-flex bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium"
          >
            Apply Now
          </Link>

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
              <a href="#program" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Program</a>
              <a href="#benefits" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              <a href="#success" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Success Stories</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Link 
                to="/enroll"
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;