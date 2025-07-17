import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-1 md:mb-0">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@denzrealors.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                D
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Denz-Realors</h1>
              <p className="text-sm text-gray-600">Your Property Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#apartments" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Apartments
            </a>
            <a href="#villas" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Villas
            </a>
            <a href="#plots" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Plots
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4">
                Home
              </a>
              <a href="#apartments" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4">
                Apartments
              </a>
              <a href="#villas" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4">
                Villas
              </a>
              <a href="#plots" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4">
                Plots
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4">
                Contact
              </a>
              <div className="px-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Free Consultation
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;