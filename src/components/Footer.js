import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic will be implemented later
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  D
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Denz-Realors</h3>
                <p className="text-gray-400 text-sm">Your Property Partner</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted real estate partner in Bangalore with 15+ years of experience in helping customers find their dream properties.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#apartments" className="text-gray-400 hover:text-white transition-colors">Apartments</a></li>
              <li><a href="#villas" className="text-gray-400 hover:text-white transition-colors">Villas</a></li>
              <li><a href="#plots" className="text-gray-400 hover:text-white transition-colors">Plots</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Buying</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Selling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Investment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Loans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Valuation</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest property updates and market insights.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@denzrealors.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-400">Brigade Road, Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Denz-Realors. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400 text-xs">
            <span>RERA Registered</span>
            <span>ISO 9001:2015 Certified</span>
            <span>CREDAI Member</span>
            <span>Karnataka Real Estate Association</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;