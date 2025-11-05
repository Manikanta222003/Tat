import React, { useEffect } from "react";
import "../Styles/AboutDetails.css";
import banner from "../assets/images/aboutdetails.jpg";
import founder1 from "../assets/images/founder.jpg";
import founder2 from "../assets/images/co-founder.jpg";
import Tat from "../assets/images/aboutusdetail.png";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out-sine', // Animation easing
      once: true, // Animation happens only once
      offset: 120, // Trigger animations 120px before element enters viewport
      delay: 100 // Global delay for all animations
    });
  }, []);

  return (
    <main className="about-details-about-page">
      {/* Hero / Banner */}
      <header
        className="about-details-about-hero"
        role="img"
        aria-label="Company banner"
        style={{ backgroundImage: `url(${banner})` }}
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="about-details-about-hero__overlay" />
        <div className="about-details-about-hero__content about-details-container">
          <div 
            className="about-details-ban"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <h1>Home</h1>
            <h1>About</h1>
          </div>

          <h1 
            className="about-details-about-hero__title"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Innovative Web & Digital Solutions
          </h1>
          <p 
            className="about-details-about-hero__subtitle"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Building modern web experiences & digital growth strategies for
            startups and enterprises.
          </p>
        </div>
      </header>

      <section
        className="about-details-about-section about-details-container"
        aria-labelledby="about-heading"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="about-details-about-wrapper">
          {/* Image Section */}
          <div 
            className="about-details-about-image"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={Tat}
              alt="About Truly Aim Technologies - Team working together"
              className="about-details-about-img"
            />
          </div>
          {/* Content Section */}
          <article 
            className="about-details-about-content"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2
              id="about-heading"
              className="about-details-section-title about-details-gradient-text"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              About Us
            </h2>
            <div 
              data-aos="fade-up" 
              data-aos-delay="700"
            >
              Truly Aim Technologies, established on April 11, 2025, delivers creative and cost-effective digital solutions to help businesses grow and thrive online. We specialize in web & app development, gaming, UI/UX design, digital marketing, cloud computing, hosting, and graphic design, serving industries like healthcare, retail, real estate, education, and startups.
              Our team of designers, developers, and marketing experts work together to turn ideas into reality, empowering startups to launch and enterprises to modernize their digital presence. At Truly Aim Technologies, we drive innovation, trust, and brand growth with tailor-made strategies for success.
            </div>
          </article>
        </div>
      </section>

      {/* Founders Section */}
      <section
        className="about-details-founders-section about-details-container"
        aria-labelledby="founders-heading"
      >
        <h2
          id="founders-heading"
          className="about-details-section-title about-details-gradient-text"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Founders
        </h2>

        <div className="about-details-founders">
          {/* First Founder Card */}
          <div 
            className="about-details-founder-card"
            data-aos="zoom-in-right"
            data-aos-delay="300"
          >
            <img
              src={founder1}
              alt="Founder - Mr. Praveen Kumar"
              className="about-details-founder-card__avatar"
              data-aos="flip-left"
              data-aos-delay="500"
            />
            <div 
              className="about-details-founder-card__body"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="about-details-founder-card__bio">
                <h3>Mr. Praveen Kumar</h3>
                <p className="about-details-founder-card__name">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* Second Founder Card */}
          <div 
            className="about-details-founder-card"
            data-aos="zoom-in-left"
            data-aos-delay="200"
          >
            <img
              src={founder2}
              alt="Co-Founder - Mr. Shanmukh Sri Ram"
              className="about-details-founder-card__avatar"
              data-aos="flip-right"
              data-aos-delay="400"
            />
            <div 
              className="about-details-founder-card__body"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="about-details-founder-card__bio">
                <h3>Mr. Shanmukh Sri Ram</h3>
                <p className="about-details-founder-card__name">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-details-why-section about-details-container"
        aria-labelledby="why-heading"
      >
        <h2
          id="why-heading"
          className="about-details-section-title about-details-gradient-text"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Why Choose Us
        </h2>

        <ul className="about-details-why-list" role="list">
          <li 
            className="about-details-why-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="about-details-why-item__icon" aria-hidden="true">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M8 12l2.5 2.5L16 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="about-details-why-item__content">
              <h3 className="about-details-why-item__title">
                Proven Experience
              </h3>
              <p className="about-details-why-item__desc">
                Years of building successful web products and campaigns.
              </p>
            </div>
          </li>

          <li 
            className="about-details-why-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="about-details-why-item__icon" aria-hidden="true">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></rect>
                <path
                  d="M3 10h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </span>
            <div className="about-details-why-item__content">
              <h3 className="about-details-why-item__title">
                End-to-End Service
              </h3>
              <p className="about-details-why-item__desc">
                From strategy and design to development and growth.
              </p>
            </div>
          </li>

          <li 
            className="about-details-why-item"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="about-details-why-item__icon" aria-hidden="true">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M12 16v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M4 8l7 8 8-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <div className="about-details-why-item__content">
              <h3 className="about-details-why-item__title">
                Quality & Performance
              </h3>
              <p className="about-details-why-item__desc">
                Optimized code and measurable KPIs for every project.
              </p>
            </div>
          </li>

          <li 
            className="about-details-why-item"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="about-details-why-item__icon" aria-hidden="true">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M8 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <div className="about-details-why-item__content">
              <h3 className="about-details-why-item__title">
                Transparent Process
              </h3>
              <p className="about-details-why-item__desc">
                Clear timelines, regular updates and collaborative approach.
              </p>
            </div>
          </li>

          <li 
            className="about-details-why-item"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="about-details-why-item__icon" aria-hidden="true">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <polygon
                  points="12,2 22,9 12,22 2,9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </span>
            <div className="about-details-why-item__content">
              <h3 className="about-details-why-item__title">
                High Quality at Affordable Pricing
              </h3>
              <p className="about-details-why-item__desc">
                Premium digital experiences shouldn't come at a premium cost.
                Our solutions are cost-effective without compromising on
                quality.
              </p>
            </div>
          </li>

          <li 
            className="about-details-why-item"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span className="about-details-why-item__icon" aria-hidden="true">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12l4 4 4-4 4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="about-details-why-item__content">
              <h3 className="about-details-why-item__title">
                Client-Centric Approach
              </h3>
              <p className="about-details-why-item__desc">
                We listen, collaborate, and adapt. Our transparent communication
                and agile process keep clients involved and informed at every
                stage.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
