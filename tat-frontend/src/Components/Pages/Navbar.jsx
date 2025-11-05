import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/TAT-Logo-white-png.png';
import logo2 from '../assets/images/Text-logo.png';

import logoBlack from '../assets/images/TAT Logo Blue Png.png';
import logoTextBlack from '../assets/images/Text-logo1.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {  
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isGamingPage = location.pathname.startsWith('/gaming-development');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownEnter = () => {
    if (window.innerWidth >= 768) {
      setIsDropdownOpen(true);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth >= 768) {
      setIsDropdownOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);

    if (window.location.pathname !== '/') {
      navigate(`/#${hash}`);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isGamingPage ? 'gaming' : ''}`}>
      <div className="n-container navbar-content">
        <NavLink to="/#home" className="navbar-logo" onClick={closeMenus}>
          <img src={scrolled ? logoBlack : logo} alt="TrulyAim Technologies Logo" className="logo-image" />
          <img src={scrolled ? logoTextBlack : logo2} alt="TrulyAim Technologies Text Logo" className="logo-text" />
        </NavLink>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/#home"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#about"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About Us
            </NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="dropdown-toggle" onClick={handleDropdownToggle}>
              Services <FaChevronDown className="dropdown-icon" />
            </div>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li>
                <NavLink
                  to="/web-development"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/uiux-design"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  UI/UX Design & Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hosting-services"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  Hosting Services
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/cloud-computing"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  Cloud Computing
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/digital-marketing"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  Digital Marketing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-development"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  App Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gaming-development"
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  Gaming Development
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/#contact"
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
