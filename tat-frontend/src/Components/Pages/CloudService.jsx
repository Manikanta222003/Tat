import React, { useState } from 'react';
import '../Styles/CloudService.css';
import ContactUs from './ContactUs';

const CloudComputing = () => {
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
    <section id='Cloud Computing'>
    <div className="cloud-computing-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <h1>Scalable, Secure & Future-Ready Cloud Solutions</h1>
          <p>
            At TrulyAim Technologies, we empower businesses to modernize their IT infrastructure and accelerate digital transformation through robust and scalable cloud computing services.
          </p>
          
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1>Cloud Computing Services</h1>
          <p>
            Whether you’re migrating legacy systems to the cloud, building cloud-native applications, or optimizing performance and cost — our cloud experts ensure secure, efficient, and future-proof solutions tailored to your needs. We help startups, SMEs, and enterprises unlock the power of the cloud — making operations more agile, scalable, and cost-effective.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Cloud Computing Services</h2>
          <div className="services-grid">
            {[
              {
                icon: "☁️",
                title: "Cloud Infrastructure Setup & Management",
                desc: "We design, deploy, and manage cloud environments on platforms like AWS, Microsoft Azure, Google Cloud, and DigitalOcean — ensuring speed, security, and high availability."
              },
              {
                icon: "🔄",
                title: "Cloud Migration Services",
                desc: "Migrate your existing applications, databases, servers, or websites to the cloud seamlessly — with minimal downtime and zero data loss."
              },
              {
                icon: "🧩",
                title: "Cloud-Native App Development",
                desc: "We build apps specifically optimized for the cloud using microservices architecture, containerization (Docker), and Kubernetes orchestration."
              },
              {
                icon: "🛡️",
                title: "Cloud Security & Compliance",
                desc: "Security is at the core of everything we do. We implement data encryption, access control, identity management, threat detection, and compliance frameworks (GDPR, ISO, HIPAA, etc.)."
              },
              {
                icon: "📊",
                title: "Cloud Consulting & Strategy",
                desc: "Our cloud consultants help you choose the right platform, design an architecture roadmap, and adopt best practices tailored to your business goals."
              },
              {
                icon: "💻",
                title: "DevOps & CI/CD on Cloud",
                desc: "We implement modern DevOps pipelines, continuous integration/continuous delivery, and infrastructure automation using tools like Jenkins, GitHub Actions, Terraform, and Ansible."
              },
              {
                icon: "💰",
                title: "Cost Optimization & Performance Tuning",
                desc: "We monitor and analyze your cloud usage to reduce costs and improve system performance through autoscaling, load balancing, and resource optimization."
              },
              {
                icon: "📦",
                title: "Disaster Recovery & Backup",
                desc: "Protect your data and ensure business continuity with automated cloud backup systems and disaster recovery plans."
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
      <section className="platforms-section">
        <div className="container">
          <h2>Cloud Platforms We Work With</h2>
          <ul className="platforms-list">
            {[
              { icon: "🌐", name: "Amazon Web Services (AWS)" },
              { icon: "☁️", name: "Microsoft Azure" },
              { icon: "🔍", name: "Google Cloud Platform (GCP)" },
              { icon: "💧", name: "DigitalOcean" },
              { icon: "🖥️", name: "Linode / Vultr" },
              { icon: "🔥", name: "Firebase / Heroku" }
            ].map((platform, index) => (
              <li key={index}>
                <span className="platform-icon">{platform.icon}</span>
                {platform.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <h2>Tools & Technologies</h2>
          <ul className="tools-list">
            {[
              { icon: "🐳", name: "Docker, Kubernetes, Helm" },
              { icon: "🛠️", name: "Terraform, Ansible" },
              { icon: "🔄", name: "Jenkins, GitLab CI/CD" },
              { icon: "☁️", name: "Cloudflare, S3, EC2, Lambda" },
              { icon: "🗄️", name: "MongoDB Atlas, RDS, Firestore" },
              { icon: "🔒", name: "API Gateway, IAM, CloudWatch" }
            ].map((tool, index) => (
              <li key={index}>
                <span className="tool-icon">{tool.icon}</span>
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
              "✅ Certified Cloud Experts & DevOps Engineers",
              "✅ Vendor-Neutral Advice & Custom Solutions",
              "✅ Enterprise-Level Security & Monitoring",
              "✅ End-to-End Cloud Lifecycle Support",
              "✅ Scalable Pricing for Businesses of All Sizes"
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

export default CloudComputing;