import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/staticData';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Denz-Realors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-yellow-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.8/5</div>
            <div className="text-blue-200 text-sm">Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-blue-200 text-sm">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-blue-200 text-sm">Legal Compliance</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-blue-200 text-sm">Customer Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-blue-100 mb-6">
            Join thousands of satisfied customers who found their dream property with us
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg">
            Start Your Property Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;