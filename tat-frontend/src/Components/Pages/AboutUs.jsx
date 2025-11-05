import React,{useState,useEffect} from "react";
import "../Styles/AboutUs.css";
import Logo from '../assets/images/TAT Logo Blue Png.png';
import about from '../assets/images/about.jpg';

const Counter = ({value, duration = 1400}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = Number(value);
    if (start === end) return;
    const increment = Math.max(1, Math.floor(end / (duration / 30)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count}</span>;
};


const AboutUs = () => {
  const stats = [
    { label: "Projects Completed", value: 20 },
    { label: "Happy Clients", value: 40 },
  ];

  return (
    <div className="abouts-container">
      <div className="about-head">
        <h1 className="abouts-us-title">About Us</h1>

      {/* Top-right floating image */}
      <div className="corner-image-container">
        <img src={Logo} alt="Logo" className="corner-image" />
      </div>
      </div>

      <div className="about-us-row">
        {/* Left Image Section */}
        <div className="about-image-container">
          <img
            src={about}
            alt="About Us"
            className="about-image"
          />
        </div>

        {/* Right Text Section */}
        <div className="about-text">
          <p>
            <span style={{color: "#296c8eda", fontSize: "20px", fontWeight: "bold"}}>Truly Aim Technologies</span> is a software-based company established on April 11th, 2025. We deliver creative and cost-effective services to help businesses grow massively and thrive online.  
            Truly Aim Technologies specializes in Web & App Development, Gaming, UI/UX design, Digital Marketing, Cloud Computing, Hosting, and Graphic Designing. We serve industries like healthcare, retail, real estate, education, and startups.
          </p>
          <p>
            Our team is committed to innovation and excellence, ensuring that every project we undertake is tailored to meet our clients’ unique needs. We believe in building strong partnerships, delivering measurable results, and driving digital transformation for businesses of all sizes. By combining creativity with technology, we empower brands to stand out in a competitive marketplace and achieve sustainable growth. <em>
            <strong>
              <a href="/aboutdetails" className="see-more-link">Know More <i class="ri-arrow-right-s-line arrow-icon"></i></a>
            </strong>
          </em>
          </p>

          <p style={{color: "#4828a8",fontWeight:"400"}}>
            <i>"Innovate. Brand. Grow with TrulyAim"</i>
          </p>
          <div className="stats-row" aria-hidden="false">
            <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">14+</div>
                <div className="stat-label">Happy Clients</div>
            </div>
          </div>
          


         </div>

        
      </div>


    </div>
  );
};

export default AboutUs;
