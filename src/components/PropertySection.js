import React, { useState } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import PropertyCard from './PropertyCard';

const PropertySection = ({ title, properties, type, sectionId }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [filterLocation, setFilterLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique locations from properties
  const locations = [...new Set(properties.map(property => property.location))];

  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => !filterLocation || property.location === filterLocation)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.pricePerSqft.replace(/[₹,]/g, '')) - parseFloat(b.pricePerSqft.replace(/[₹,]/g, ''));
        case 'price-high':
          return parseFloat(b.pricePerSqft.replace(/[₹,]/g, '')) - parseFloat(a.pricePerSqft.replace(/[₹,]/g, ''));
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <section id={sectionId} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the finest {type} in Bangalore with premium amenities and prime locations
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0">
          {/* Filter and Sort Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* View Mode and Results Count */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {filteredProperties.length} properties found
            </span>
            <div className="flex items-center bg-white rounded-lg border border-gray-300">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Prices</option>
                  <option value="0-50">Under ₹50 Lakhs</option>
                  <option value="50-100">₹50L - ₹1 Cr</option>
                  <option value="100-200">₹1 Cr - ₹2 Cr</option>
                  <option value="200+">Above ₹2 Cr</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Status</option>
                  <option value="ready">Ready to Move</option>
                  <option value="construction">Under Construction</option>
                  <option value="launch">New Launch</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Properties Grid */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" 
          : "space-y-6"
        }>
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              type={type}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertySection;