import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertySection from './components/PropertySection';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { apartments, villas, plots } from './data/staticData';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* Apartments Section */}
      <PropertySection 
        title="Premium Apartments"
        properties={apartments}
        type="apartments"
        sectionId="apartments"
      />
      
      {/* Villas Section */}
      <PropertySection 
        title="Luxury Villas"
        properties={villas}
        type="villas"
        sectionId="villas"
      />
      
      {/* Plots Section */}
      <PropertySection 
        title="Investment Plots"
        properties={plots}
        type="plots"
        sectionId="plots"
      />
      
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;