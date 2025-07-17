import React, { useState } from 'react';
import { Search, MapPin, Building, Home, TreePine } from 'lucide-react';
import { locations, developers } from '../data/staticData';

const Hero = () => {
  const [searchType, setSearchType] = useState('all');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchDeveloper, setSearchDeveloper] = useState('');

  const handleSearch = () => {
    // Search functionality will be implemented later
    console.log('Search:', { searchType, searchLocation, searchDeveloper });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your
              <span className="text-yellow-400 block">Dream Property</span>
              in Bangalore
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Discover premium apartments, luxury villas, and investment plots with India's most trusted real estate partner.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">1000+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-blue-200">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-sm text-blue-200">Partner Developers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">
                Explore Properties
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Schedule Site Visit
              </button>
            </div>
          </div>

          {/* Right Content - Search Form */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Find Your Perfect Property
            </h3>

            {/* Property Type Selector */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              <button
                onClick={() => setSearchType('all')}
                className={`p-3 rounded-lg text-center transition-colors ${
                  searchType === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex flex-col items-center">
                  <Search className="h-5 w-5 mb-1" />
                  <span className="text-xs">All</span>
                </div>
              </button>
              <button
                onClick={() => setSearchType('apartments')}
                className={`p-3 rounded-lg text-center transition-colors ${
                  searchType === 'apartments' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex flex-col items-center">
                  <Building className="h-5 w-5 mb-1" />
                  <span className="text-xs">Apartments</span>
                </div>
              </button>
              <button
                onClick={() => setSearchType('villas')}
                className={`p-3 rounded-lg text-center transition-colors ${
                  searchType === 'villas' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex flex-col items-center">
                  <Home className="h-5 w-5 mb-1" />
                  <span className="text-xs">Villas</span>
                </div>
              </button>
              <button
                onClick={() => setSearchType('plots')}
                className={`p-3 rounded-lg text-center transition-colors ${
                  searchType === 'plots' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex flex-col items-center">
                  <TreePine className="h-5 w-5 mb-1" />
                  <span className="text-xs">Plots</span>
                </div>
              </button>
            </div>

            {/* Search Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Developer
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={searchDeveloper}
                    onChange={(e) => setSearchDeveloper(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Developer</option>
                    {developers.map((developer) => (
                      <option key={developer} value={developer}>
                        {developer}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Search Properties</span>
            </button>

            {/* Quick Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Whitefield</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Sarjapur Road</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Electronic City</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Koramangala</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;