import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutPreview from './components/AboutPreview';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Portfolio />
      <AboutPreview />
      <Footer />
    </>
  );
}

export default App;
