import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import '../Styles/Footer.css';
import logo from '../assets/images/logo.png';
import x from '../assets/images/twitter_logo.png';
import insta from '../assets/images/instagram_logo.png';
import LinkedIn from '../assets/images/linkedin-logo.png';
import Whatsapp from '../assets/images/whts_logo.png';
import call from '../assets/images/call_logo.png';
import Loc from '../assets/images/loc.png';

function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    
    if (window.location.pathname !== '/') {
      navigate(`/#${hash}`);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={logo} alt="TrulyAim Logo" className="footer-logo" />
          <p>We are committed to innovation, sustainability, and excellence in all we do. Join us on our journey!</p>
          <div className="social-icons" style={{ textDecoration: 'none' }}>
            <a href='https://www.linkedin.com/company/trulyaim-technologies/'><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href='https://x.com/Trulyaim14206?t=xNWpb8EQdxT5pNSbltY0wg&s=09'><img src={x} alt="X" /></a>
            <a href='https://www.instagram.com/truly_aim_technologies?igsh=dDE2NDJ4bnpvcGs0'><img src={insta} alt="Instagram" /></a>
            <a href='https://wa.me/917989659195'><img src={Whatsapp} alt="WhatsApp" /></a>
            <a href='tel: +91 7989659195'><img src={call} alt="Call" /></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink
                to="/#home"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#about"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#services"
                onClick={(e) => handleNavClick(e, 'services')}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

{/* <div className="col-md-2"> */}
              <div className="footer-section links-section">
                <h4>services</h4>
                <div className="heading"></div>
                <ul>
                  <li>
                    <Link to="/web-development">
                      Web Development</Link>
                  </li>
                  <li>
                    <Link
                      to="/uiux-design"
                    >
                      Ui/Ux Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hosting-services"
                    >
                      Hosting Services
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/cloud-computing"
                    >
                      Cloud Computing
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/digital-marketing"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app-development"
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gaming-development"
                    >
                      Gaming Development
                    </Link>
                  </li>
                </ul>
              </div>
            {/* </div> */}

        <div className="footer-section map-section">
          <h4>Our location</h4>
          <a href='https://www.google.co.in/maps/place/TrulyAim+Technologies/@17.0050308,82.2435639,18z/data=!4m6!3m5!1s0x3a3829001e9008bb:0x7e38314cc21ebef7!8m2!3d17.0053455!4d82.2436972!16s%2Fg%2F11xnmh2yrc?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D'> <img src = {Loc} className='tat-loc'></img></a>
        </div>

        <div className="footer-section address-section">
          <h4>Address:</h4>
          <p>2_419/33 Near Sreepeetam,<br />
            Brindavanam Apartments,<br />
            Bapandora Colony, Kakinada.<br />
            Andhra Pradesh, India.</p>
          <a href='tel: +91 7989659195' style={{ textDecoration: 'none' }}><p className="phone ph" ><img src={call} alt="Call" /> +91 7989659195</p></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TrulyAim Technologies. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;