import React, { useState } from 'react';
import '../Styles/WebDevelopment.css';
import { FaCode, FaMobileAlt, FaRocket, FaShoppingCart, FaWordpress, FaPlug, FaThLarge, FaTools } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiVuedotjs, SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiDjango, SiMongodb, SiMysql, SiPostgresql, SiWordpress, SiShopify, SiWix, SiGit, SiGithub, SiDocker } from 'react-icons/si';
import ContactUs from './ContactUs';

const WebDevelopment = () => {
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
    <section id="web-development">
    <div className="web-development-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
         
          <h1>Build Your Digital Presence with TrulyAim Technologies</h1>
          <p>
            We offer end-to-end web development services to create visually appealing, technically robust, and performance-driven websites tailored to your brand.
          </p>
         
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1>Web Development Services</h1>
          <p>
            Your website is a powerful tool for engaging customers and driving business growth. At TrulyAim Technologies, we design and develop custom websites that are visually stunning, user-friendly, and aligned with your unique business objectives, whether you're a startup, small business, or enterprise.
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
                icon: <FaCode />,
                title: "Custom Website Development",
                desc: "We build fully customized websites from scratch based on your brand's vision, goals, and functionality requirements."
              },
              {
                icon: <FaMobileAlt />,
                title: "Responsive & Mobile-First Design",
                desc: "Websites optimized for desktops, tablets, and smartphones to ensure maximum user engagement."
              },
              {
                icon: <FaRocket />,
                title: "Fast, Secure & SEO-Friendly",
                desc: "Optimized code, meta-structure, and page speed improvements with top SEO and security practices."
              },
              {
                icon: <FaShoppingCart />,
                title: "E-Commerce Website Development",
                desc: "Feature-rich, scalable e-commerce platforms with inventory management, secure payments, and smooth checkout."
              },
              {
                icon: <FaWordpress />,
                title: "CMS Integration",
                desc: "Integration and customization of CMS platforms like WordPress, Shopify, and Wix for easy content updates."
              },
              {
                icon: <FaPlug />,
                title: "API & Third-Party Integrations",
                desc: "Seamless integration with payment gateways, CRM tools, or booking systems for enhanced functionality."
              },
              {
                icon: <FaThLarge />,
                title: "Web Application Development",
                desc: "Interactive and data-driven web applications like admin dashboards and booking portals to streamline processes."
              },
              {
                icon: <FaTools />,
                title: "Maintenance & Support",
                desc: "Post-launch support, performance monitoring, regular updates, and security patches for smooth operation."
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

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <h2>Technologies We Use</h2>
          <ul className="technologies-list">
            {[
              { icon: <SiHtml5 />, name: "HTML5" },
              { icon: <SiCss3 />, name: "CSS3" },
              { icon: <SiJavascript />, name: "JavaScript" },
              { icon: <SiBootstrap />, name: "Bootstrap" },
              { icon: <SiReact />, name: "React.js" },
              { icon: <SiVuedotjs />, name: "Vue.js" },
              { icon: <SiNodedotjs />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express.js" },
              { icon: <SiPhp />, name: "PHP" },
              { icon: <SiLaravel />, name: "Laravel" },
              { icon: <SiDjango />, name: "Django" },
              { icon: <SiMongodb />, name: "MongoDB" },
              { icon: <SiMysql />, name: "MySQL" },
              { icon: <SiPostgresql />, name: "PostgreSQL" },
              { icon: <SiWordpress />, name: "WordPress" },
              { icon: <SiShopify />, name: "Shopify" },
              { icon: <SiWix />, name: "Wix" },
              { icon: <SiGit />, name: "Git" },
              { icon: <SiGithub />, name: "GitHub" },
              { icon: <SiDocker />, name: "Docker" },
              { icon: <SiDocker />, name: "Vite" }, // Note: Using Docker icon as placeholder
              { icon: <SiDocker />, name: "Webpack" } // Note: Using Docker icon as placeholder
            ].map((tech, index) => (
              <li key={index}>
                <span className="tech-icon">{tech.icon}</span>
                {tech.name}
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
              "✅ Experienced Team of Developers & Designers",
              "✅ Client-Centric Approach with Transparent Communication",
              "✅ Timely Delivery & Ongoing Support",
              "✅ Affordable Packages for Startups & SMEs",
              "✅ Focus on Quality, Security & Performance"
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

export default WebDevelopment;