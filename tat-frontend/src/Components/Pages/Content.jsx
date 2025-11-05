import React, { useState } from 'react';
import '../Styles/Content.css';

const Content = () => {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'Blog Post', details: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your request has been sent — we will contact you soon.');
    setForm({ name: '', email: '', projectType: 'Blog Post', details: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  const services = [
    { title: 'SEO Blog Posts', desc: 'Research-led long-form posts that rank and convert.' },
    { title: 'Website Copy & Landing Pages', desc: 'Persuasive copy that improves conversions and clarity.' },
    { title: 'Product Descriptions', desc: 'Short, SEO-friendly descriptions that sell.' },
    { title: 'Social Media Content', desc: 'Snackable posts and captions tailored to platform.' },
    { title: 'Email Campaigns', desc: 'Sequence writing that nurtures and converts subscribers.' }
  ];

  const pricing = [
    { plan: 'Starter', price: '₹2,000', items: ['1x 600-800 word article', 'Basic SEO'] },
    { plan: 'Growth', price: '₹6,000', items: ['4x 800+ word articles', 'Keyword research', 'Revisions'] },
    { plan: 'Custom', price: 'Contact', items: ['Custom packages for agencies & brands'] }
  ];

  const portfolio = [
    { title: 'How to Boost Local SEO', type: 'Blog', link: '#' },
    { title: 'Product Page for XPhone', type: 'Copy', link: '#' },
    { title: 'Campaign for CleanUp NGO', type: 'Email', link: '#' }
  ];

  return (
    <section className="cw-page" id='content'>
      <header className="cw-hero">
        <div className="cw-hero-inner container">
          <h1>Content Writing Services for Startups & Growing Brands</h1>
          <p className="lead">Clear messaging, SEO-first articles, and marketing copy that converts visitors into customers.</p>
          <a href="#contact" className="cw-cta">Request a Quote</a>
        </div>
      </header>

      <div className="container">
        {/* Services */}
        <section className="cw-services">
          <h2>What We Do</h2>
          <div className="cw-services-grid">
            {services.map((s, i) => (
              <article key={i} className="cw-service-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="cw-pricing">
          <h2>Packages</h2>
          <div className="cw-pricing-grid">
            {pricing.map((p, i) => (
              <div className="cw-pricing-card" key={i}>
                <h3>{p.plan}</h3>
                <p className="price">{p.price}</p>
                <ul>
                  {p.items.map((it, idx) => <li key={idx}>{it}</li>)}
                </ul>
                <button className="btn-outline" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Get Started</button>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section className="cw-portfolio">
          <h2>Recent Work</h2>
          <div className="cw-portfolio-row">
            {portfolio.map((p, i) => (
              <a key={i} className="cw-portfolio-card" href={p.link} target="_blank" rel="noreferrer">
                <div className="thumb" aria-hidden="true">{p.type}</div>
                <h4>{p.title}</h4>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="cw-testimonials">
          <h2>What Clients Say</h2>
          <div className="cw-testimonials-row">
            <blockquote>
              “TrulyAim’s content helped us increase organic traffic 3x in 4 months — clear research and great tone.”
              <cite>— Priya, Founder</cite>
            </blockquote>
            <blockquote>
              “Quick turnarounds and excellent communication. Their copy improved our product conversion.”
              <cite>— Rohit, Head of Marketing</cite>
            </blockquote>
          </div>
        </section>

        {/* Contact / Brief Form */}
        <section id="contact" className="cw-contact">
          <h2>Start Your Project</h2>
          <form className="cw-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>

            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>

            <label>
              Project Type
              <select name="projectType" value={form.projectType} onChange={handleChange}>
                <option>Blog Post</option>
                <option>Website Copy</option>
                <option>Product Descriptions</option>
                <option>Email Campaign</option>
                <option>Social Media</option>
              </select>
            </label>

            <label>
              Project Details
              <textarea name="details" rows="5" value={form.details} onChange={handleChange} placeholder="Brief about your goals, audience, tone, and deadlines"></textarea>
            </label>

            <button type="submit" className="btn-primary">Send Request</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>

      </div>

      <footer className="cw-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} TrulyAim Technologies — Content & Marketing Services</p>
        </div>
      </footer>
    </section>
  );
};

export default Content;