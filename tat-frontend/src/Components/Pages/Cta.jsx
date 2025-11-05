// ...existing code...
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cta.css';

const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out-cubic', // Animation easing
      once: true, // Animation happens only once
      offset: 100, // Trigger animations 100px before element enters viewport
      delay: 50, // Global delay for all animations
    });
  }, []);

  return (
    <footer
      className="sev-footer"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container">
        <h2
          className="sev-footer-title"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Ready to Transform Your Business?
        </h2>
        <p
          className="sev-footer-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join 500+ satisfied clients who trusted us with their digital
          transformation.
        </p>
        <div
          className="sev-footer-buttons"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a href="tel:+917989659195" style={{ textDecoration: 'none' }}>
            <span className="button-primary light">Schedule Free Call</span>
          </a>
        </div>
        <p
          className="sev-footer-info"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          2_419/33 Near Sreepeetam, Bhirdhavanam apartment Bapandora Colony,
          Kakinada, Andhra Pradesh, India.
        </p>
      </div>
    </footer>
  );
};

export default Cta;