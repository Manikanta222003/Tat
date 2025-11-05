import React from 'react';
import founder from '../assets/images/founder.jpg';
import cofounder from '../assets/images/co-founder.jpg';
import '../Styles/OurTeam.css'; // Assuming you have a CSS file for styling

const OurTeam = () => (
  <section id='our-team'>
  <section className="ourteam-section">
    <div className="ourteam-content">
      <h2 className="ourteam-main-title">Our Team</h2>
      <div className="ourteam-leaders">
        <div className="ourteam-leader">
        
          <img src={founder} alt="Founder" className="ourteam-img" />
            <h3 className="ourteam-sub-title">Founder</h3>
          <div className="ourteam-name">Mr. Praveen Kumar</div>
          <p className="ourteam-text">
            With a vision for <span className="ourteam-highlight">innovation</span>, Mr. Praveen leads with expertise and passion, driving our mission to deliver exceptional solutions.
          </p>
        </div>
        <div className="ourteam-leader">
         
          <img src={cofounder} alt="Co-Founder" className="ourteam-img" />
           <h3 className="ourteam-sub-title">Co-Founder</h3>
          <div className="ourteam-name">Mr. Shanmukh Sri Ram</div>
          <p className="ourteam-text">
            Mr. Shanmukh Sri Ram brings <span className="ourteam-highlight">creativity</span> and strategic insight, empowering our team to achieve excellence and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  </section>
  </section>
);

export default OurTeam;