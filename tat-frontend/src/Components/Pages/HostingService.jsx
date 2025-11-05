import React, { useState } from 'react';
import '../Styles/HostingService.css';
import { FaGlobe, FaServer, FaCloud, FaHdd, FaWordpress, FaLock, FaEnvelope, FaChartLine } from 'react-icons/fa';
import { SiWordpress, SiPhp, SiNodedotjs, SiPython, SiMysql, SiMongodb, SiPostgresql, SiApache, SiNginx, SiCloudflare, SiGit, SiGithub } from 'react-icons/si';
import { MdDns } from 'react-icons/md';
import ContactUs from './ContactUs';

const HostingServices = () => {
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
    <section id='hosting-services'>
    <div className="hosting-services-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <h1>Reliable, Secure & Scalable Web Hosting Solutions</h1>
          <p>
            At TrulyAim Technologies, we provide high-performance hosting services designed for speed, uptime, and security, tailored for businesses and developers.
          </p>
         
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1>Web Hosting Services</h1>
          <p>
            Whether you need to host a website, web application, or cloud infrastructure, our hosting solutions offer speed, security, and scalability. With fully managed environments, 24/7 support, and performance optimization, we ensure your digital presence is always online and thriving, so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Hosting Services</h2>
          <div className="services-grid">
            {[
              {
                icon: <FaGlobe />,
                title: "Shared Hosting",
                desc: "An affordable, beginner-friendly solution for small websites and blogs, including cPanel, custom domains, free SSL, and email hosting."
              },
              {
                icon: <FaServer />,
                title: "VPS Hosting (Virtual Private Server)",
                desc: "Dedicated resources, root access, and high-speed SSD storage for growing websites and apps in a secure virtual environment."
              },
              {
                icon: <FaCloud />,
                title: "Cloud Hosting",
                desc: "Scalable cloud infrastructure using AWS, Google Cloud, Azure, or DigitalOcean, with auto-scaling, backups, and load balancing."
              },
              {
                icon: <FaHdd />,
                title: "Dedicated Server Hosting",
                desc: "Full control over a powerful physical server with maximum performance, advanced security, and custom configurations for high-traffic sites."
              },
              {
                icon: <FaWordpress />,
                title: "Managed WordPress Hosting",
                desc: "Optimized for WordPress with fast loading speeds, auto-updates, and built-in caching for seamless performance."
              },
              {
                icon: <FaLock />,
                title: "SSL Certificates & Security Services",
                desc: "Protect user data with HTTPS using domain validation, wildcard SSL, and advanced firewall/security configurations."
              },
              {
                icon: <FaEnvelope />,
                title: "Domain Registration & Email Hosting",
                desc: "Custom domain registration, DNS management, and professional email hosting for a complete online identity."
              },
              {
                icon: <FaChartLine />,
                title: "Monitoring, Backup & Performance Optimization",
                desc: "Daily backups, uptime monitoring, server load tracking, and performance tuning for smooth hosting operations."
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

      {/* Platforms Section */}
      <section className="h-platforms-section">
        <div className="container">
          <h2>Supported Platforms & Technologies</h2>
          <ul className="h-platforms-list">
            {[
              { icon: <SiWordpress />, name: "WordPress" },
              { icon: <SiPhp />, name: "PHP" },
              { icon: <SiNodedotjs />, name: "Node.js" },
              { icon: <SiPython />, name: "Python" },
              { icon: <SiMysql />, name: "MySQL" },
              { icon: <SiMongodb />, name: "MongoDB" },
              { icon: <SiPostgresql />, name: "PostgreSQL" },
              { icon: <SiApache />, name: "Apache" },
              { icon: <SiNginx />, name: "Nginx" },
              { icon: <SiNginx />, name: "LiteSpeed" }, // Note: Using Nginx icon as placeholder
              { icon: <SiWordpress />, name: "WHM/cPanel" }, // Note: Using WordPress icon as placeholder
              { icon: <SiWordpress />, name: "Plesk" }, // Note: Using WordPress icon as placeholder
              { icon: <SiCloudflare />, name: "Cloudflare CDN" },
              { icon: <SiGit />, name: "Git" },
              { icon: <SiGithub />, name: "GitHub" },
              { icon: <MdDns />, name: "FTP/SFTP" },
              { icon: <MdDns />, name: "SSH Access" } // Note: Using DNS icon as placeholder
            ].map((platform, index) => (
              <li key={index}>
                <span className="h-platform-icon">{platform.icon}</span>
                {platform.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose TrulyAim Technologies for Hosting?</h2>
          <ul className="why-choose-list">
            {[
              "✅ 99.9% Uptime Guarantee",
              "✅ Fast SSD Servers & Global CDN Integration",
              "✅ Free SSL, Daily Backups & DDoS Protection",
              "✅ 24/7 Technical Support & Monitoring",
              "✅ Flexible Hosting Plans for All Budgets",
              "✅ Custom Hosting Setup for Complex Projects",
              "✅ Easy Control Panels: cPanel, Plesk, or Custom Dashboards",
              "✅ Scalable Solutions to Grow with Your Business"
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

export default HostingServices;