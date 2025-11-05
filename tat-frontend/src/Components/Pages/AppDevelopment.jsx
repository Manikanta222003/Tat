
import '../Styles/AppDevelopment.css';

import React, { useState } from 'react';

import { FaAndroid, FaApple, FaSyncAlt, FaPuzzlePiece, FaPlug, FaVial, FaRocket, FaTools } from 'react-icons/fa';
import { MdShoppingCart, MdSchool, MdLocalHospital, MdHome, MdRestaurant, MdFlight, MdAttachMoney, MdBuild } from 'react-icons/md';
import { FaReact, FaJava, FaNodeJs, FaPhp, FaPython, FaDocker, FaGithub } from 'react-icons/fa';
import { SiFlutter, SiSwift, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiPostman, SiFigma } from 'react-icons/si';
import { MdMap, MdPayment, MdSecurity, MdNotifications, MdShare } from 'react-icons/md';
import ContactUs from './ContactUs';

const AppDevelopment = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id='app-development'>
    <div className="app-development-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <h1>Innovative Mobile App Solutions for Your Business Growth</h1>
          <p>
            At TrulyAim Technologies, we design and develop powerful, user-friendly, and scalable mobile applications that bring your ideas to life.
          </p>
          
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1>Mobile App Development Services</h1>
          <p>
            In an increasingly mobile-driven world, having a well-designed app is essential to connect with your customers, streamline operations, and grow your brand. We provide end-to-end mobile app development services, from concept and design to development, testing, and deployment — across Android, iOS, and cross-platform ecosystems.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our App Development Services</h2>
          <div className="services-grid">
            {[
              {
                icon: <FaAndroid />,
                title: "Android App Development",
                desc: "We build fast, intuitive, and scalable Android applications using Kotlin and Java, fully optimized for the latest Android OS versions and devices."
              },
              {
                icon: <FaApple />,
                title: "iOS App Development",
                desc: "Our iOS developers create elegant and high-performance apps using Swift and Objective-C, adhering to Apple’s design principles and App Store guidelines."
              },
              {
                icon: <FaSyncAlt />,
                title: "Cross-Platform App Development",
                desc: "Need to target both Android and iOS with one codebase? We build apps using React Native and Flutter to save time and cost while ensuring native-like performance."
              },
              {
                icon: <FaPuzzlePiece />,
                title: "Custom App Solutions",
                desc: "We design apps tailored to your specific business needs — from e-commerce and education to healthcare, real estate, food delivery, booking systems, and more."
              },
              {
                icon: <FaPlug />,
                title: "API Integration & Backend Development",
                desc: "We build secure and scalable backend systems and integrate your app with third-party services like payment gateways, chat systems, maps, CRMs, and more."
              },
              {
                icon: <FaVial />,
                title: "Quality Assurance & Testing",
                desc: "Every app we deliver goes through thorough testing — covering UI/UX, performance, security, and compatibility — ensuring a smooth, bug-free user experience."
              },
              {
                icon: <FaRocket />,
                title: "App Store Deployment & Support",
                desc: "We handle the full launch process including Google Play Store and Apple App Store submissions, compliance checks, ASO (App Store Optimization), and updates."
              },
              {
                icon: <FaTools />,
                title: "Maintenance & Upgrades",
                desc: "We provide long-term support, app monitoring, feature enhancements, and version updates to keep your app relevant and high-performing."
              }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <h2>Industries We Serve</h2>
          <ul className="industries-list">
            {[
              { icon: <MdShoppingCart />, name: "E-Commerce & Retail" },
              { icon: <MdSchool />, name: "Education & E-Learning" },
              { icon: <MdLocalHospital />, name: "Healthcare & Fitness" },
              { icon: <MdHome />, name: "Real Estate & Property" },
              { icon: <MdRestaurant />, name: "Food Delivery & Restaurant" },
              { icon: <MdFlight />, name: "Travel & Tourism" },
              { icon: <MdAttachMoney />, name: "Finance & Payments" },
              { icon: <MdBuild />, name: "Custom Business Solutions" }
            ].map((industry, index) => (
              <li key={index}>
                <span className="industry-icon">{industry.icon}</span>
                {industry.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <h2>Technologies We Use</h2>
          <div className="technologies-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul className="tech-list">
                {[
                  { icon: <FaReact />, name: "React Native" },
                  { icon: <SiFlutter />, name: "Flutter" },
                  { icon: <SiSwift />, name: "Swift" },
                  { icon: <SiSwift />, name: "Kotlin" }, // Note: Using Swift icon as placeholder; replace if needed
                  { icon: <FaJava />, name: "Java" }
                ].map((tech, index) => (
                  <li key={index}>
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul className="tech-list">
                {[
                  { icon: <FaNodeJs />, name: "Node.js" },
                  { icon: <FaNodeJs />, name: "Express.js" }, // Note: Using Node.js icon as placeholder
                  { icon: <SiFirebase />, name: "Firebase" },
                  { icon: <FaPhp />, name: "PHP" },
                  { icon: <FaPython />, name: "Django" }
                ].map((tech, index) => (
                  <li key={index}>
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <ul className="tech-list">
                {[
                  { icon: <SiMongodb />, name: "MongoDB" },
                  { icon: <SiFirebase />, name: "Firebase Firestore" },
                  { icon: <SiMysql />, name: "MySQL" },
                  { icon: <SiPostgresql />, name: "PostgreSQL" },
                  { icon: <SiPostgresql />, name: "SQLite" } // Note: Using PostgreSQL icon as placeholder
                ].map((tech, index) => (
                  <li key={index}>
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-category">
              <h3>Tools & DevOps</h3>
              <ul className="tech-list">
                {[
                  { icon: <FaAndroid />, name: "Android Studio" },
                  { icon: <FaApple />, name: "Xcode" },
                  { icon: <FaGithub />, name: "GitHub" },
                  { icon: <SiPostman />, name: "Postman" },
                  { icon: <SiFigma />, name: "Figma" },
                  { icon: <FaDocker />, name: "Docker" }
                ].map((tech, index) => (
                  <li key={index}>
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-category">
              <h3>Integrations</h3>
              <ul className="tech-list">
                {[
                  { icon: <MdMap />, name: "Google Maps" },
                  { icon: <MdPayment />, name: "Razorpay/Stripe" },
                  { icon: <MdSecurity />, name: "Firebase Auth" },
                  { icon: <MdNotifications />, name: "Push Notifications" },
                  { icon: <MdShare />, name: "Social Login" }
                ].map((tech, index) => (
                  <li key={index}>
                    <span className="tech-icon">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose TrulyAim Technologies?</h2>
          <ul className="why-choose-list">
            {[
              "✅ Experienced Developers & Designers",
              "✅ End-to-End App Development Lifecycle",
              "✅ Cross-Platform Expertise",
              "✅ Focus on UX, Performance & Security",
              "✅ Transparent Workflow & Timely Delivery",
              "✅ Startup-Friendly & Scalable Pricing Models"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
     <ContactUs />
    </div>
    </section>
  );
};

export default AppDevelopment;