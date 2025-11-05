import React, { useState } from 'react';
import '../Styles/UIUX.css';
import { FaPaintBrush, FaBrain, FaDesktop, FaMobileAlt, FaSitemap, FaCode, FaPalette, FaChartBar } from 'react-icons/fa';
import { SiFigma, SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiInvision, SiReact, SiVuedotjs, SiBootstrap, SiFramer, SiGit, SiGithub } from 'react-icons/si';
import { MdWeb } from 'react-icons/md';
import ContactUs from './ContactUs';

const UIUXDesign = () => {
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
    <section id='uiux-design'>
    <div className="uiux-design-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <h1>Crafting Beautiful, Intuitive & User-Centric Digital Experiences</h1>
          <p>
            At TrulyAim Technologies, we create visually stunning and functionally seamless UI/UX designs that align with your business goals.
          </p>
         
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
           <h1>UI/UX Design & Development</h1>
          <p>
            Great design is more than just how it looks — it’s how it works. Our UI/UX design and development services focus on creating intuitive and engaging digital experiences for websites, mobile apps, and software products. We ensure every user interaction is smooth, meaningful, and drives your business forward.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="services-grid">
            {[
              {
                icon: <FaPaintBrush />,
                title: "User Interface (UI) Design",
                desc: "We design beautiful and consistent interfaces that reflect your brand identity, focusing on clarity, color balance, typography, and responsiveness."
              },
              {
                icon: <FaBrain />,
                title: "User Experience (UX) Design",
                desc: "We conduct user research, journey mapping, wireframing, and usability testing to build intuitive and user-focused experiences."
              },
              {
                icon: <FaDesktop />,
                title: "Web UI/UX Design",
                desc: "We create intuitive interfaces for websites, web apps, dashboards, e-commerce platforms, and portals, optimized for responsiveness and conversion."
              },
              {
                icon: <FaMobileAlt />,
                title: "Mobile UI/UX Design",
                desc: "We design sleek mobile app interfaces for Android, iOS, and cross-platform apps, ensuring smooth onboarding and interactions."
              },
              {
                icon: <FaSitemap />,
                title: "Wireframing & Prototyping",
                desc: "We create wireframes and interactive prototypes using Figma, Adobe XD, or Sketch to visualize structure and flow before development."
              },
              {
                icon: <FaCode />,
                title: "UI Development",
                desc: "We convert designs into responsive, pixel-perfect frontends using HTML5, CSS3, JavaScript, Bootstrap, React.js, and more."
              },
              {
                icon: <FaPalette />,
                title: "Design System & Branding",
                desc: "We build scalable design systems with color palettes, iconography, and components to ensure consistency across your product."
              },
              {
                icon: <FaChartBar />,
                title: "Usability Testing & Feedback Integration",
                desc: "We perform A/B testing, heatmap analysis, and user feedback integration to enhance product performance and satisfaction."
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

      {/* Tools Section */}
      <section className="ui-tools-section">
        <div className="container">
          <h2>Tools & Technologies We Use</h2>
          <ul className="ui-tools-list">
            {[
              { icon: <SiFigma />, name: "Figma" },
              { icon: <SiAdobexd />, name: "Adobe XD" },
              { icon: <SiAdobexd />, name: "Sketch" }, // Note: Using Adobe XD icon as placeholder
              { icon: <SiAdobephotoshop />, name: "Photoshop" },
              { icon: <SiAdobeillustrator />, name: "Illustrator" },
              { icon: <SiInvision />, name: "InVision" },
              { icon: <SiInvision />, name: "Marvel" }, // Note: Using InVision icon as placeholder
              { icon: <MdWeb />, name: "HTML5" },
              { icon: <MdWeb />, name: "CSS3" }, // Note: Using Web icon as placeholder
              { icon: <SiFigma />, name: "JavaScript" }, // Note: Using Figma icon as placeholder
              { icon: <SiReact />, name: "React.js" },
              { icon: <SiVuedotjs />, name: "Vue.js" },
              { icon: <SiBootstrap />, name: "Bootstrap" },
              { icon: <SiFramer />, name: "Framer" },
              { icon: <SiFigma />, name: "Lottie" }, // Note: Using Figma icon as placeholder
              { icon: <SiFigma />, name: "GSAP" }, // Note: Using Figma icon as placeholder
              { icon: <SiGit />, name: "Git" },
              { icon: <SiGithub />, name: "GitHub" },
              { icon: <SiFigma />, name: "Zeplin" }, // Note: Using Figma icon as placeholder
              { icon: <SiFigma />, name: "Figma Inspect" } // Note: Using Figma icon as placeholder
            ].map((tool, index) => (
              <li key={index}>
                <span className="ui-tool-icon">{tool.icon}</span>
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose TrulyAim Technologies?</h2>
          <ul className="why-choose-list">
            {[
              "✅ Creative, User-Centered Design Approach",
              "✅ Collaborative Process with Wireframes & Prototypes",
              "✅ Cross-Platform UI Consistency",
              "✅ Designs Optimized for Conversion & Accessibility",
              "✅ Frontend Development Support with Pixel-Perfect Results",
              "✅ Scalable Design Systems for Long-Term Growth"
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

export default UIUXDesign;