import React from 'react';
import '../hero.css';
const Hero = () => (
    <header className="hero-section d-flex align-items-center justify-content-center text-center">
    <div className="overlay"></div>
    <div className="container">
        <h1 className="display-3 fw-bold">Canvas and Code</h1>
        <p className="lead">Web development, branding, and photography all in one place.</p>
        <a href="#services" className="btn btn-primary btn-lg mt-3">Explore Services</a>
    </div>
    </header>
);

export default Hero;
