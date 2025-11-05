import React, { useState } from 'react';
import '../Styles/DmService.css';
import ContactUs from './ContactUs';

const DigitalMarketing = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id='Digital Marketing' >
    <div className="digital-marketing-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <h1>Grow Your Brand Online with TrulyAim Technologies</h1>
          <p>
            In today’s digital era, having an online presence isn’t enough — you need a strategy that drives visibility, traffic, leads, and sales.
          </p>
          
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1>Digital Marketing Services</h1>
          <p>
            At <span className="highlight">TrulyAim Technologies</span>, we offer result-oriented digital marketing services that help businesses grow, engage their target audience, and outperform competitors across digital platforms. Our team of marketing strategists, content creators, SEO experts, and ad specialists works together to craft custom marketing campaigns that align with your business goals — whether it’s increasing brand awareness, generating leads, or boosting online sales.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Digital Marketing Services</h2>
          <div className="services-grid">
            {[
              {
                icon: "🔍",
                title: "Search Engine Optimization (SEO)",
                desc: "We help your website rank higher on Google and other search engines with complete on-page and off-page SEO strategies, keyword optimization, and technical SEO audits."
              },
              {
                icon: "📱",
                title: "Social Media Marketing (SMM)",
                desc: "From Instagram and Facebook to LinkedIn and Twitter, we manage your brand’s social media presence, create engaging content, and run ad campaigns that connect with your audience."
              },
              {
                icon: "💰",
                title: "Pay-Per-Click Advertising (PPC)",
                desc: "We create targeted and data-driven ad campaigns on platforms like Google Ads, Facebook Ads, and YouTube, ensuring high ROI and lead generation."
              },
              {
                icon: "📧",
                title: "Email Marketing",
                desc: "Reach and retain your customers through effective email campaigns, newsletters, and automation tools to promote offers, products, and updates."
              },
              {
                icon: "🖋️",
                title: "Content Marketing",
                desc: "We create high-quality blogs, website content, videos, and infographics to educate, entertain, and engage your customers while improving SEO."
              },
              {
                icon: "🌐",
                title: "Website & Landing Page Optimization",
                desc: "Your marketing efforts are only as good as your website. We ensure your site or landing pages are optimized for conversions, speed, and mobile-friendliness."
              },
              {
                icon: "🛍️",
                title: "E-commerce Marketing",
                desc: "We help online stores attract more customers and increase sales through SEO, ads, retargeting campaigns, product listings, and customer engagement tactics."
              },
              {
                icon: "📈",
                title: "Analytics & Reporting",
                desc: "We track everything — traffic, conversions, ad performance, bounce rates — and deliver actionable insights to improve results continuously."
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

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose TrulyAim Technologies?</h2>
          <ul className="why-choose-list">
            {[
              "✅ Certified Digital Marketing Experts",
              "✅ Custom Strategies for Every Business Size",
              "✅ Focus on ROI, Conversions & Real Growth",
              "✅ Transparent Communication & Detailed Reporting",
              "✅ Affordable Packages for Startups & Enterprises"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          <h2>Platforms We Work With</h2>
          <ul className="platforms-list">
            {[
              "Google Ads",
              "Facebook / Instagram Ads",
              "LinkedIn Marketing",
              "Twitter / X Marketing",
              "YouTube Advertising",
              "Mailchimp, Sendinblue, Zoho Mail",
              "Google Analytics & Google Search Console",
              "SEMrush, Ahrefs, Ubersuggest"
            ].map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>
      </section>
      <ContactUs />
    </div>
    </section>
  );
};

export default DigitalMarketing;