import React from 'react';
import { Users, Home, Award, Building, CheckCircle, TrendingUp, Shield, Heart } from 'lucide-react';
import { stats } from '../data/staticData';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "Every property is thoroughly verified for legal compliance and authenticity"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced team provides personalized consultation for your property needs"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Get detailed market analysis and investment advice for better decision making"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction with transparent processes and ongoing support"
    }
  ];

  const achievements = [
    "15+ Years of Excellence in Real Estate",
    "1000+ Happy Families Settled",
    "25+ Premium Developer Partnerships",
    "500+ Successful Property Transactions",
    "100% Legal Compliance Guarantee",
    "24/7 Customer Support"
  ];

  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      home: Home,
      award: Award,
      building: Building
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Denz-Realors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted real estate partner in Bangalore, committed to helping you find the perfect property with transparency, expertise, and personalized service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Denz-Realors?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in Bangalore's real estate market, we have established ourselves as a trusted partner for property buyers, sellers, and investors. Our deep understanding of the local market, combined with our commitment to transparency and customer service, makes us the preferred choice for thousands of satisfied customers.
            </p>

            {/* Achievements List */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Free Consultation
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Denz-Realors Office"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-yellow-500 text-blue-900 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To simplify the real estate journey for every customer by providing transparent, reliable, and personalized property solutions. We believe in building long-term relationships based on trust, integrity, and exceptional service quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;