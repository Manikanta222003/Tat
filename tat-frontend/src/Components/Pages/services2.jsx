import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Volume2,
  Palette,
  Figma,
  Cloud,
  Gamepad2,
  Server,
  CheckCircle,
  Clock,
  Award,
  Code,
  Zap,
  Users,
  Target,
  FileText,
  Brush,
} from "lucide-react";
import { FaBullhorn } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// This component encapsulates the entire application, including styles.
const App = () => {
  // --- STATE MANAGEMENT ---
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [showBooking, setShowBooking] = useState(false);
  const [activeTab, setActiveTab] = useState("services");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: 'ease-in-out-cubic', // Animation easing
      once: true, // Animation happens only once
      offset: 60, // Trigger animations 100px before element enters viewport
      delay: 10 // Global delay for all animations
    });
  }, []);

  // --- DATA ---
  const services = [
    {
      id: 1,
      name: "Web Development",
      icon: <BsCodeSlash className="icon-large" />,
      description:
        "Custom responsive websites and web applications built with modern technologies",
      features: [
        "React/Next.js",
        "Mobile Responsive",
        "SEO Optimized",
        "Fast Loading",
      ],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deliveryTime: "7-14 days",
      slug: "web-development",
    },
    {
      id: 2,
      name: "App Development",
      icon: <Smartphone className="icon-large" />,
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native",
        "iOS & Android",
        "App Store Ready",
        "Push Notifications",
      ],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deliveryTime: "14-21 days",
      slug: "app-development",
    },
    {
      id: 3,
      name: "Digital Marketing",
      icon: <FaBullhorn className="icon-large" />,
      description:
        "Complete digital marketing solutions to grow your online presence",
      features: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deliveryTime: "5-10 days",
      slug: "digital-marketing",
    },
    {
      id: 4,
      name: "UI/UX Design",
      icon: <Figma className="icon-large" />,
      description:
        "Beautiful, user-centered designs that convert visitors into customers",
      features: [
        "Figma Design",
        "User Research",
        "Prototyping",
        "Design System",
      ],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deliveryTime: "5-7 days",
      slug: "uiux-design",
    },
    // {
    //   id: 5,
    //   name: "Cloud Computing",
    //   icon: <Cloud className="icon-large" />,
    //   description: "Scalable cloud infrastructure and migration services",
    //   features: ["AWS/Azure", "Auto Scaling", "Security First", "99.9% Uptime"],
    //   bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    //   deliveryTime: "10-15 days",
    //   slug: "cloud-computing",
    // },
    {
      id: 6,
      name: "Gaming Development",
      icon: <Gamepad2 className="icon-large" />,
      description: "Engaging games for mobile, web, and desktop platforms",
      features: [
        "Unity/Unreal",
        "Multi-platform",
        "3D/2D Graphics",
        "Monetization",
      ],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deliveryTime: "21-30 days",
      slug: "gaming-development",
    },
    {
      id: 7,
      name: "Hosting Services",
      icon: <Server className="icon-large" />,
      description: "Reliable, fast, secure, and scalable web hosting solutions",
      features: [
        "SSD Storage",
        "SSL Certificate",
        "24/7 Support",
        "Daily Backups",
      ],
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      deliveryTime: "Instant Setup",
      slug: "hosting-services",
    },
  ];

  
  // --- EVENT HANDLERS ---
  const handleBookService = (service) => {
    setSelectedService(service);
    setShowBooking(true);
    window.scrollTo(0, 0);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleBackToServices = () => {
    setShowBooking(false);
    setSelectedService(null);
    setSelectedDate("");
    window.scrollTo(0, 0);
  };

  // --- SUB-COMPONENTS ---
  const ServiceCard = ({ service, index }) => (
    <div 
      className="service-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div
        className="card-bg-gradient"
        style={{ background: service.bgImage }}
      />
      <div className="card-content">
        <div 
          className="card-icon-wrapper"
          data-aos="zoom-in"
          data-aos-delay={(index * 100) + 200}
        >
          {service.icon}
        </div>
        <h3 
          className="card-title"
          data-aos="fade-right"
          data-aos-delay={(index * 100) + 300}
        >
          {service.name}
        </h3>
        <p 
          className="card-description"
          data-aos="fade-up"
          data-aos-delay={(index * 100) + 400}
        >
          {service.description}
        </p>
        <div 
          className="card-features-list"
          data-aos="fade-up"
          data-aos-delay={(index * 100) + 500}
        >
          {service.features.map((feature, featureIndex) => (
            <div 
              key={featureIndex} 
              className="card-feature-item"
              data-aos="fade-left"
              data-aos-delay={(index * 100) + 600 + (featureIndex * 50)}
            >
              <CheckCircle className="icon-small text-green" /> {feature}
            </div>
          ))}
        </div>
        <Link to={`/${service.slug}`}>
          <button
            onClick={() => handleBookService(services)}
            className="button-primary card-cta-button"
            data-aos="zoom-in"
            data-aos-delay={(index * 60) + 480}
          >
            Explore More <ArrowRight className="icon-small icon-arrow" />
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <CustomStyles />
      <div className="page-container">
        <header className="header-section">
          <div className="sev-container">
            <div 
              className="header-content"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <h1 
                className="page-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Transform Your{" "}
                <span className="text-gradient"> Digital Vision</span>
              </h1>
              <p 
                className="page-subtitle"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                From concept to deployment, we deliver cutting-edge technology
                solutions that drive your business forward.
              </p>
            </div>

            <nav 
              className="tabs-nav"
              data-aos="fade-in"
              data-aos-delay="600"
            >
              <div className="tabs-wrapper">
                {["services", "process", "contact"].map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    data-aos="zoom-in"
                    data-aos-delay={700 + (index * 100)}
                  >
                    {tab === "contact"
                      ? "Contact Us"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </nav>

            <div className="tab-content">
              {activeTab === "services" && (
                <div className="services-grid">
                  {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                  ))}
                </div>
              )}
              {activeTab === "process" && <ProcessTab />}
              {activeTab === "contact" && <ContactTab services={services} />}
            </div>
          </div>
        </header>

      </div>
    </>
  );
};

// --- STATIC SUB-COMPONENTS & STYLES ---

const ProcessTab = () => (
  <div className="process-container">
    <div 
      className="section-header"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <h2 className="section-title">Our Development Process</h2>
      <p className="section-subtitle">
        A proven methodology that ensures project success
      </p>
    </div>
    <div className="process-grid">
      {[
        {
          icon: <Target className="icon-large" />,
          title: "1. Discovery",
          description: "Understanding your vision, goals, and requirements",
          color: "color-1"
        },
        {
          icon: <Palette className="icon-large" />,
          title: "2. Design", 
          description: "Creating intuitive designs and user experiences",
          color: "color-2"
        },
        {
          icon: <Code className="icon-large" />,
          title: "3. Development",
          description: "Building robust, scalable solutions with modern tech",
          color: "color-3"
        },
        {
          icon: <Zap className="icon-large" />,
          title: "4. Launch",
          description: "Deployment, testing, and ongoing support",
          color: "color-4"
        }
      ].map((step, index) => (
        <div 
          key={index}
          className="process-step"
          data-aos="zoom-in-up"
          data-aos-delay={200 + (index * 150)}
        >
          <div className={`process-icon-wrapper ${step.color}`}>
            {step.icon}
          </div>
          <h3 className="process-title">{step.title}</h3>
          <p className="process-description">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ContactTab = ({ services }) => (
  <div className="contact-container">
    <div 
      className="section-header"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="section-title">Ready to Start Your Project?</h2>
      <p className="section-subtitle">
        Let's discuss how we can bring your ideas to life.
      </p>
    </div>
    <div className="contact-grid">
      <div 
        className="contact-form"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h3 className="contact-form-title">Get a Free Consultation</h3>
        <form>
          <div 
            className="form-group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="input-field dark"
            />
          </div>
          <div 
            className="form-group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="input-field dark"
            />
          </div>
          <div 
            className="form-group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <select className="input-field dark select-field">
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div 
            className="form-group"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <textarea
              placeholder="Tell us about your project..."
              rows="4"
              className="textarea-field dark"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="button-primary full-width"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div 
        className="why-us-section"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h3 className="why-us-title">Why Choose Us?</h3>
        <div className="why-us-list">
          {[
            {
              icon: <Users className="icon-medium text-blue" />,
              title: "Expert Team",
              description: "Skilled developers and designers with 5+ years experience"
            },
            {
              icon: <Award className="icon-medium text-green" />,
              title: "Quality Guaranteed", 
              description: "30-day money-back guarantee on all projects"
            },
            {
              icon: <Clock className="icon-medium text-purple" />,
              title: "On-Time Delivery",
              description: "98% of projects delivered on or before deadline"
            },
            {
              icon: <CheckCircle className="icon-medium text-yellow" />,
              title: "Ongoing Support",
              description: "Free support and maintenance for 6 months"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="why-us-item"
              data-aos="fade-up"
              data-aos-delay={400 + (index * 100)}
            >
              {item.icon}
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CustomStyles = () => (
  <style>{`
        /* --- BASE & TYPOGRAPHY --- */
        :root {
            --primary-blue: #2563eb;
            --primary-purple: #7c3aed;
            --primary-green: #16a34a;
            --dark-gray: #334155;
            --medium-gray: #64748b;
            --light-gray: #f1f5f9;
            --white: #ffffff;
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        /* Smooth scroll behavior */
        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-sans);
            scroll-behavior: smooth;
            background-color: var(--white);
            color: var(--dark-gray);
            margin: 0;
        }
        h1, h2, h3, h4 { font-weight: 700; }
        .page-title {
            font-size: 2.5rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            color: var(--dark-gray);
        }
        .page-subtitle {
            font-size: 1.125rem;
            color: var(--medium-gray);
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        .text-gradient {
            background-image: linear-gradient(45deg, var(--primary-blue), var(--primary-purple));
            background-size: 200% 200%;
            animation: gradientShift 4s ease infinite;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        /* Enhanced gradient animation */
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* --- LAYOUT --- */
        .sev-container {
            width: 100%;
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding:20px
        }
        .page-container {
            min-height: 100vh;
            background-color: var(--white);
        }

        /* --- HEADER --- */
       
        .header-content { text-align: center; margin-bottom: 1rem; }
        .header-tag {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--primary-blue);
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 1.5rem;
        }

        /* --- TABS --- */
        .tabs-nav { display: flex; justify-content: center; margin-bottom: 2rem; }
        .tabs-wrapper {
            display: inline-flex;
            flex-direction: row;
            gap: 0.5rem;
            background-color: var(--light-gray);
            border-radius: 1rem;
            padding: 0.5rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        .tab-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
            cursor: pointer;
            background-color: transparent;
            color: var(--medium-gray);
            position: relative;
            overflow: hidden;
        }
        .tab-btn:hover { 
            color: var(--dark-gray); 
            transform: translateY(-2px);
        }
        .tab-btn.active {
            background-image: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
            color: var(--white);
            border-color: transparent;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        /* --- SERVICE CARDS --- */
        .services-grid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
            padding: 10px;
            background:linear-gradient(135deg, rgb(102 126 234 / 0%) 0%, rgb
(118 75 162 / 0%) 100%);
        }
        .service-card {
            position: relative;
            overflow: hidden;
            border-radius: 1.5rem;
            background-color: var(--white);
           transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            border-color: rgba(37, 99, 235, 0.2);
        }
        .service-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            border-color: rgba(37, 99, 235, 0.2);
        }
        .card-bg-gradient {
            position: absolute;
            inset: 0;
            opacity: 0.03;
            transition: opacity 0.6s ease;
        }
        .service-card:hover .card-bg-gradient { opacity: 0.08; }
        .card-content { position: relative; padding: 0rem; }
        .card-icon-wrapper {
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background-image: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            margin-bottom: 1.5rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
        }
        .service-card:hover .card-icon-wrapper { 
            transform: scale(1.15) rotate(5deg);
            box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
        }
        .card-title { 
            font-size: 1.5rem; 
            color: var(--dark-gray); 
            margin-bottom: 0.75rem; 
            transition: all 0.3s ease;
        }
        .service-card:hover .card-title { 
            color: var(--primary-blue);
            transform: translateX(5px);
        }
        .card-description { 
            color: var(--medium-gray); 
            margin-bottom: 1.5rem; 
            line-height: 1.6; 
            transition: all 0.3s ease;
        }
        .service-card:hover .card-description {
            color: var(--dark-gray);
        }
        .card-features-list { 
            display: flex; 
            flex-direction: column; 
            gap: 0.5rem; 
            margin-bottom: 1.5rem; 
        }
        .card-feature-item { 
            display: flex; 
            align-items: center; 
            gap: 0.5rem; 
            font-size: 0.875rem; 
            color: var(--medium-gray);
            transition: all 0.3s ease;
        }
        .service-card:hover .card-feature-item {
            transform: translateX(8px);
            color: var(--dark-gray);
        }
        .card-cta-button { 
            width: 100%; 
            font-size: 1.125rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }

        /* --- BUTTONS --- */
        .button-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-weight: 600;
            color: var(--white);
            background-image: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
            border: none;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            position: relative;
            overflow: hidden;
        }
        .button-primary:hover { 
            transform: translateY(-3px) scale(1.05); 
            box-shadow: 0 12px 35px rgba(37, 99, 235, 0.4);
        }
        .button-primary.light {
            background: var(--white);
            color: var(--primary-blue);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .button-primary.light:hover {
            background-image: linear-gradient(135deg, var(--primary-blue), var(--primary-purple));
            color: var(--white);
        }
        .button-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-weight: 600;
            color: var(--white);
            background-color: transparent;
            border: 2px solid var(--white);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .button-secondary:hover { 
            background-color: var(--white); 
            color: var(--primary-blue); 
            transform: translateY(-3px) scale(1.05);
        }

        /* --- ICONS --- */
        .icon-large { width: 2rem; height: 2rem; }
        .icon-medium { width: 1.25rem; height: 1.25rem; }
        .icon-small { width: 1rem; height: 1rem; }
        .icon-star { width: 1rem; height: 1rem; fill: currentColor; }
        .icon-arrow { transition: transform 0.3s ease; }
        .button-primary:hover .icon-arrow { transform: translateX(4px); }
        .text-green { color: var(--primary-green); }
        .text-blue { color: var(--primary-blue); }
        .text-purple { color: var(--primary-purple); }
        .text-yellow { color: #f59e0b; }

        /* --- FOOTER --- */
        .sev-footer {
            background-image: linear-gradient(135deg, #1e3a8a, #5b21b6);
            padding: 1rem 0;
            text-align: center;
            color: var(--white);
            position: relative;
            overflow: hidden;
        }
        .sev-footer::before {
            content: '';
            inset: 0;
            background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
        }
        .sev-footer > .sev-container { position: relative; z-index: 1; margin-top: -4rem; }
        .sev-footer-title { font-size: 2rem; margin-bottom: 1rem; }
        .sev-footer-subtitle { font-size: 1.125rem; color: #dbeafe; margin-bottom: 2rem; }
        .sev-footer-buttons { display: flex; flex-direction: column; gap: 1rem; justify-content: center; }
        .sev-footer-info { font-size: 0.875rem; color: #dbeafe; margin-top: 2rem; opacity: 0.75; }

        /* --- PROCESS & CONTACT TABS --- */
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-title { font-size: 2rem; margin-bottom: 1rem; color: var(--dark-gray); }
        .section-subtitle { color: var(--medium-gray); font-size: 1.125rem; }
        .process-grid { display: grid; gap: 2rem; grid-template-columns: 1fr; }
        .process-step { 
            text-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .process-step:hover {
            transform: translateY(-8px);
        }
        .process-icon-wrapper {
            width: 5rem;
            height: 5rem;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem auto;
            color: white;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        .process-step:hover .process-icon-wrapper { 
            transform: scale(1.15) rotate(-5deg); 
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        .process-icon-wrapper.color-1 { background-image: linear-gradient(135deg, #3b82f6, #06b6d4); }
        .process-icon-wrapper.color-2 { background-image: linear-gradient(135deg, #a855f7, #ec4899); }
        .process-icon-wrapper.color-3 { background-image: linear-gradient(135deg, #22c55e, #3b82f6); }
        .process-icon-wrapper.color-4 { background-image: linear-gradient(135deg, #f59e0b, #ef4444); }
        .process-title { font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--dark-gray); }
        .process-description { color: var(--medium-gray); }

        .contact-container {
            max-width: 900px;
            margin: auto;
            background-color: var(--light-gray);
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        .contact-grid { display: grid; gap: 3rem; grid-template-columns: 1fr; }
        .contact-form-title, .why-us-title { font-size: 1.25rem; margin-bottom: 1.5rem; color: var(--dark-gray); }
        .why-us-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .why-us-item { 
            display: flex; 
            align-items: flex-start; 
            gap: 1rem;
            transition: all 0.3s ease;
            padding: 1rem;
            border-radius: 0.75rem;
        }
        .why-us-item:hover {
            background-color: rgba(37, 99, 235, 0.05);
            transform: translateX(8px);
        }
        .why-us-item h4 { margin: 0 0 0.5rem 0; color: var(--dark-gray); }
        .why-us-item p { margin: 0; font-size: 0.875rem; color: var(--medium-gray); }

        /* --- FORMS --- */
        .form-group { margin-bottom: 1.5rem; }
        .input-field, .textarea-field {
            width: 100%;
            padding: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            transition: all 0.3s ease;
        }
        .input-field.dark, .textarea-field.dark {
             background-color: rgba(255,255,255,0.1);
             border-color: rgba(255,255,255,0.2);
             color: black;
        }
        .input-field.dark::placeholder, .textarea-field.dark::placeholder { color: #9ca3af; }
        .input-field:focus, .textarea-field:focus { 
            outline: none; 
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
        }
        .select-field {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1.2em;
        }

        /* Add subtle pulse animation for loading states */
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }

        .icon-small:hover {
            animation: pulse 1.5s ease-in-out infinite;
        }

        /* --- RESPONSIVE DESIGN --- */
        @media (min-width: 640px) {
            .page-title { font-size: 3.5rem; }
            .page-subtitle { font-size: 1.25rem; }
            .tabs-wrapper { flex-direction: row; }
            .footer-buttons { flex-direction: row; }
        }
        @media (min-width: 768px) {
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .process-grid { grid-template-columns: repeat(4, 1fr); }
            .contact-grid { grid-template-columns: repeat(2, 1fr); }
            .contact-container { padding: 3rem; }
        }
        @media (min-width: 1280px) {
            .services-grid { grid-template-columns: repeat(3, 1fr); margin-bottom: -20px;}

        }
    `}</style>
);

export default App;
