import React, { useState } from 'react';
import '../Styles/GamingDevelopment.css';
import { FaGamepad, FaMobileAlt, FaDesktop, FaUsers, FaChalkboardTeacher, FaTrophy, FaPaintBrush, FaBug, FaApple } from 'react-icons/fa';
import { SiUnity, SiUnrealengine, SiGodotengine, SiJavascript, SiCplusplus, SiBlender, SiAdobephotoshop, SiFirebase, SiNodedotjs } from 'react-icons/si';
import { MdAndroid } from 'react-icons/md';
import ContactUs from './ContactUs';

const GamingDevelopment = () => {
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
    <section id='Gaming Development'>
    <div className="gaming-development-container">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <h1>Turning Imagination into Interactive Reality</h1>
          <p>
            At TrulyAim Technologies, we bring ideas to life through immersive and engaging game development for startups, brands, and more.
          </p>
          
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1>Game Development Services</h1>
          <p>
            Whether you're a startup, brand, educational institute, or entertainment company — our team of game designers and developers delivers high-performance, visually stunning, and addictive games across multiple platforms. From concept art to coding and deployment, we offer end-to-end game development services tailored to your audience, platform, and goals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Game Development Services</h2>
          <div className="services-grid">
            {[
              {
                icon: <FaGamepad />,
                title: "2D & 3D Game Development",
                desc: "We design and build 2D/3D games with appealing characters, smooth gameplay, and custom mechanics using advanced engines and frameworks."
              },
              {
                icon: <FaMobileAlt />,
                title: "Mobile Game Development",
                desc: "We develop fun and optimized games for Android and iOS, compatible with a wide range of mobile devices."
              },
              {
                icon: <FaDesktop />,
                title: "PC & Web-Based Games",
                desc: "We create browser-based games and downloadable PC games using modern technologies and cross-platform game engines."
              },
              {
                icon: <FaUsers />,
                title: "Multiplayer & Online Game Development",
                desc: "Build real-time multiplayer games with chat, scoring, leaderboards, matchmaking, and online events using robust backend architecture."
              },
              {
                icon: <FaChalkboardTeacher />,
                title: "Educational & Simulation Games",
                desc: "We design educational, training, and simulation-based games that make learning fun and interactive — suitable for schools, corporate training, and healthcare."
              },
              {
                icon: <FaTrophy />,
                title: "Gamification Solutions for Businesses",
                desc: "Integrate game mechanics into your mobile apps or websites to boost user engagement, loyalty, and customer interaction."
              },
              {
                icon: <FaPaintBrush />,
                title: "Game UI/UX & Asset Design",
                desc: "We craft intuitive game interfaces and create or integrate assets such as characters, environments, animations, music, and effects."
              },
              {
                icon: <FaBug />,
                title: "Game Testing & Optimization",
                desc: "Ensure smooth gameplay with rigorous QA testing, bug fixing, performance tuning, and compatibility checks for different devices and platforms."
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
      <section className="G-platforms-section">
        <div className="container">
          <h2>Platforms & Engines We Use</h2>
          <ul className="G-platforms-list">
            {[
              { icon: <SiUnity />, name: "Unity" },
              { icon: <SiUnrealengine />, name: "Unreal Engine" },
              { icon: <SiGodotengine />, name: "Godot" },
              { icon: <SiJavascript />, name: "Phaser (JavaScript)" },
              { icon: <SiJavascript />, name: "Construct (JavaScript)" },
              { icon: <SiCplusplus />, name: "C++" },
              { icon: <SiJavascript />, name: "JavaScript" },
              { icon: <SiJavascript />, name: "TypeScript" },
              { icon: <SiBlender />, name: "Blender" },
              { icon: <SiAdobephotoshop />, name: "Photoshop" },
              { icon: <SiBlender />, name: "Spine 2D" }, // Note: Using Blender icon as placeholder
              { icon: <SiAdobephotoshop />, name: "Adobe Animate" }, // Note: Using Photoshop icon as placeholder
              { icon: <MdAndroid />, name: "Android" },
              { icon: <FaApple />, name: "iOS" },
              { icon: <SiJavascript />, name: "Web (HTML5)" }, // Note: Using JavaScript icon as placeholder
              { icon: <FaDesktop />, name: "Windows" },
              { icon: <FaDesktop />, name: "macOS" }, // Note: Using Desktop icon as placeholder
              { icon: <SiFirebase />, name: "Firebase" },
              { icon: <SiNodedotjs />, name: "Node.js" },
              { icon: <SiFirebase />, name: "Photon" }, // Note: Using Firebase icon as placeholder
              { icon: <SiFirebase />, name: "PlayFab" } // Note: Using Firebase icon as placeholder
            ].map((platform, index) => (
              <li key={index}>
                <span className="G-platform-icon">{platform.icon}</span>
                {platform.name}
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
              "✅ Creative Game Designers & Experienced Developers",
              "✅ Cross-Platform Game Deployment",
              "✅ Optimized for Performance & User Experience",
              "✅ High-Quality Graphics, Sounds & Animations",
              "✅ Affordable Packages for Indie Projects & Enterprises",
              "✅ Post-Launch Support & Maintenance"
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

export default GamingDevelopment;