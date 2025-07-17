import React, { useState } from 'react';
import './App.css';

// Static data for properties (will be replaced with dynamic data later)
const featuredProperties = [
  {
    id: 1,
    title: "Prestige High Fields",
    location: "Nanakramguda, Hyderabad",
    price: "₹1.2 - 2.8 Cr",
    type: "Apartments",
    bedrooms: "2-4 BHK",
    area: "1200-2800 sq.ft",
    developer: "Prestige Group"
  },
  {
    id: 2,
    title: "Brigade Cornerstone Utopia",
    location: "Varthur, Bangalore",
    price: "₹85 L - 1.5 Cr",
    type: "Apartments",
    bedrooms: "1-3 BHK",
    area: "650-1580 sq.ft",
    developer: "Brigade Group"
  },
  {
    id: 3,
    title: "Sobha Royal Pavilion",
    location: "Sarjapur Road, Bangalore",
    price: "₹2.5 - 4.2 Cr",
    type: "Villas",
    bedrooms: "3-4 BHK",
    area: "2200-3500 sq.ft",
    developer: "Sobha Limited"
  },
  {
    id: 4,
    title: "Godrej Park Retreat",
    location: "Sarjapur, Bangalore",
    price: "₹1.8 - 3.2 Cr",
    type: "Apartments",
    bedrooms: "2-3 BHK",
    area: "1100-1850 sq.ft",
    developer: "Godrej Properties"
  },
  {
    id: 5,
    title: "Premium Plots at Electronic City",
    location: "Electronic City, Bangalore",
    price: "₹45 L - 1.2 Cr",
    type: "Plots",
    bedrooms: "N/A",
    area: "1200-3000 sq.ft",
    developer: "Various Developers"
  },
  {
    id: 6,
    title: "Luxury Villas at Whitefield",
    location: "Whitefield, Bangalore",
    price: "₹3.5 - 6.8 Cr",
    type: "Villas",
    bedrooms: "4-5 BHK",
    area: "3000-5500 sq.ft",
    developer: "Premium Builders"
  }
];

const locations = [
  "All Locations", "Whitefield", "Electronic City", "Sarjapur Road", 
  "Bannerghatta Road", "Hennur Road", "Thanisandra", "Varthur", 
  "Nanakramguda", "Gachibowli"
];

const developers = [
  "All Developers", "Prestige Group", "Brigade Group", "Sobha Limited", 
  "Godrej Properties", "Embassy Group", "Puravankara", "Mantri Developers",
  "Salarpuria Sattva", "Shriram Properties"
];

const projects = [
  "All Projects", "Prestige High Fields", "Brigade Cornerstone Utopia", 
  "Sobha Royal Pavilion", "Godrej Park Retreat", "Embassy Boulevard",
  "Puravankara Zenium", "Mantri Glades", "Salarpuria Sattva Divinity"
];

function App() {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    developer: '',
    project: '',
    priceRange: ''
  });

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
  };

  const handleSearchChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search filters:', { ...searchFilters, propertyType: selectedPropertyType });
    // Here you would typically make an API call with the filters
    alert('Search functionality will be implemented with backend integration');
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="logo">
            Bangalore Premier Properties
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button className="contact-btn">
            +91 98765 43210
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Find Your Dream Home in Bangalore</h1>
          <p>
            Your trusted real estate channel partner connecting you with premium properties 
            from top developers across Bangalore. Discover apartments, villas, and plots 
            that match your lifestyle and budget.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Properties Listed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Trusted Developers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Families</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section" id="properties">
        <div className="search-container">
          <div className="search-title">
            <h2>What Are You Looking For?</h2>
            <p>Choose your preferred property type and search by your criteria</p>
          </div>

          {/* Property Types */}
          <div className="property-types">
            <div 
              className={`property-card ${selectedPropertyType === 'Apartments' ? 'selected' : ''}`}
              onClick={() => handlePropertyTypeSelect('Apartments')}
            >
              <div className="property-icon">🏢</div>
              <h3>Apartments</h3>
              <p>Modern apartments with world-class amenities in prime locations</p>
            </div>
            
            <div 
              className={`property-card ${selectedPropertyType === 'Villas' ? 'selected' : ''}`}
              onClick={() => handlePropertyTypeSelect('Villas')}
            >
              <div className="property-icon">🏡</div>
              <h3>Villas</h3>
              <p>Luxury independent villas with private gardens and premium finishes</p>
            </div>
            
            <div 
              className={`property-card ${selectedPropertyType === 'Plots' ? 'selected' : ''}`}
              onClick={() => handlePropertyTypeSelect('Plots')}
            >
              <div className="property-icon">🗾</div>
              <h3>Plots</h3>
              <p>DTCP approved plots in developing areas with excellent connectivity</p>
            </div>
          </div>

          {/* Search Form */}
          <div className="search-form">
            <div className="search-grid">
              <div className="form-group">
                <label>Search by Location</label>
                <select 
                  value={searchFilters.location}
                  onChange={(e) => handleSearchChange('location', e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Search by Developer</label>
                <select 
                  value={searchFilters.developer}
                  onChange={(e) => handleSearchChange('developer', e.target.value)}
                >
                  {developers.map(developer => (
                    <option key={developer} value={developer}>{developer}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Search by Project</label>
                <select 
                  value={searchFilters.project}
                  onChange={(e) => handleSearchChange('project', e.target.value)}
                >
                  {projects.map(project => (
                    <option key={project} value={project}>{project}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Budget Range</label>
                <select 
                  value={searchFilters.priceRange}
                  onChange={(e) => handleSearchChange('priceRange', e.target.value)}
                >
                  <option value="">Select Budget</option>
                  <option value="50L-1Cr">₹50L - ₹1Cr</option>
                  <option value="1Cr-2Cr">₹1Cr - ₹2Cr</option>
                  <option value="2Cr-3Cr">₹2Cr - ₹3Cr</option>
                  <option value="3Cr-5Cr">₹3Cr - ₹5Cr</option>
                  <option value="5Cr+">₹5Cr+</option>
                </select>
              </div>
            </div>
            
            <button className="search-btn" onClick={handleSearch}>
              🔍 Search Properties
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="section-title">
            <h2>Featured Properties</h2>
            <p>Handpicked premium properties from trusted developers</p>
          </div>
          
          <div className="properties-grid">
            {featuredProperties.map(property => (
              <div key={property.id} className="property-item">
                <div className="property-image">
                  {property.type} Preview
                </div>
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <div className="property-location">
                    📍 {property.location}
                  </div>
                  <div className="property-price">{property.price}</div>
                  <div className="property-features">
                    <div className="feature">
                      🏠 {property.bedrooms}
                    </div>
                    <div className="feature">
                      📐 {property.area}
                    </div>
                    <div className="feature">
                      🏗️ {property.developer}
                    </div>
                  </div>
                  <button className="view-details">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Bangalore Premier Properties</h3>
              <p>Your trusted real estate channel partner in Bangalore. We connect you with the best properties from top developers.</p>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#properties">Properties</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h3>Property Types</h3>
              <a href="#apartments">Apartments</a>
              <a href="#villas">Villas</a>
              <a href="#plots">Plots</a>
              <a href="#commercial">Commercial</a>
            </div>
            
            <div className="footer-section">
              <h3>Contact Info</h3>
              <a href="tel:+919876543210">📞 +91 98765 43210</a>
              <a href="mailto:info@bangalorepremier.com">✉️ info@bangalorepremier.com</a>
              <a href="#">📍 Bangalore, Karnataka</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Bangalore Premier Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
