import React from 'react';
import vid from '../assets/ban_vid123.mp4';
import '../Styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home">
    <div className="hero-section">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
        src={vid}
        type="video/mp4"
      />
      <div className="overlay-content">
        <div className="content-wrapper">
          <p className="company-name">TrulyAim Technologies</p>
          <h1 className="main-heading">
            Bridging Innovation and <br />
            Connectivity
          </h1>
          <h6 className="sub-heading">
            Empowering businesses and individuals with cutting-edge<br /> 
            technology solutions.
          </h6>
          <div className="cta-buttons">
            <a href="#services" >
            <button className="btn-primary">Explore More</button>
            </a>
            <a href="#contact">
            <button className="btn-secondary">Get in Touch</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;