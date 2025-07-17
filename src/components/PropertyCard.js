import React from 'react';
import { MapPin, Home, Maximize, IndianRupee, Building, Star, Clock, ArrowRight } from 'lucide-react';

const PropertyCard = ({ property, type = 'apartment' }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready to Move':
        return 'bg-green-100 text-green-800';
      case 'Under Construction':
        return 'bg-yellow-100 text-yellow-800';
      case 'New Launch':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(property.status)}`}>
            {property.status}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Building className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.developer}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Home className="h-4 w-4 mr-2" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Maximize className="h-4 w-4 mr-2" />
            <span className="text-sm">{property.area}</span>
          </div>
          {type === 'villa' && property.plotSize && (
            <div className="flex items-center text-gray-600 col-span-2">
              <div className="h-4 w-4 mr-2 bg-green-100 rounded"></div>
              <span className="text-sm">Plot: {property.plotSize}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600">{property.price}</div>
              <div className="text-sm text-gray-500 flex items-center">
                <IndianRupee className="h-3 w-3 mr-1" />
                {property.pricePerSqft}/sq ft
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {property.highlights?.slice(0, 3).map((highlight, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Amenities Preview */}
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Top Amenities:</div>
          <div className="flex flex-wrap gap-1">
            {property.amenities?.slice(0, 3).map((amenity, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {amenity}
              </span>
            ))}
            {property.amenities?.length > 3 && (
              <span className="text-xs text-blue-600">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            <Clock className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;