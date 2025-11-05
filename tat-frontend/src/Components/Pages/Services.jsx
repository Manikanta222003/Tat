import React from "react";
import { Link } from "react-router-dom";

import WD from "../assets/images/web.png";
import UIUX from "../assets/images/uiux.png";
import DM from "../assets/images/DigitalMarketing.png";
import GD from "../assets/images/GamingDevelopment.png";
import Host from "../assets/images/Hosting.png";
import MAD from "../assets/images/mobile-application-development.png";
import CC from "../assets/images/cloud_services_high_quality.png";

const services = [
  {
    title: "Web Development",
    img: WD,
    desc: "Build robust, scalable, and modern websites to your business needs.",
    slug: "web-development",
  },
  {
    title: "App Development",
    img: MAD,
    desc: "Custom mobile apps for Android & iOS with seamless performance and UI.",
    slug: "app-development",
  },
  {
    title: "Digital Marketing",
    img: DM,
    desc: "Grow your business online with SEO, social media, and targeted campaigns.",
    slug: "digital-marketing",
  },
  {
    title: "UI/UX Design",
    img: UIUX,
    desc: "Delight users with intuitive, engaging, and visually stunning designs.",
    slug: "uiux-design",
  },
  {
    title: "Cloud Computing",
    img: CC,
    desc: "Leverage the power of the cloud for scalability, security, and flexibility.",
    slug: "cloud-computing",
  },
  {
    title: "Gaming Development",
    img: GD,
    desc: "Immersive and interactive gaming experiences.",
    slug: "gaming-development",
  },
  {
    title: "Hosting Services",
    img: Host,
    desc: "Reliable and secure hosting solutions for your websites and apps.",
    slug: "hosting-services",
  },
];

const Services = () => (
  <section
    id="services"
    style={{
      background: "linear-gradient(120deg, #e0ecfc 0%, #f8fafc 100%)",
      padding: "10px 0px 10px 0px", // Increased top padding for navbar
      minHeight: "auto",
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: 38,
          fontWeight: 800,
          color: "#1e3c72",
          marginBottom: 40,
          letterSpacing: 1,
          marginTop: 0,
        }}
      >
        OUR SERVICES
      </h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card"
            style={{
              height: 400,
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 4px 24px rgba(100,150,200,0.10)",
              padding: 32,
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              marginBottom: 24,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(100,150,200,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(100,150,200,0.10)";
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              style={{
                width: "50%",
                height: "50%",
                background: "transparent",
                borderRadius: 12,
                marginBottom: 18,
                // boxShadow: '0 2px 8px rgba(100,150,200,0.10)',
              }}
            />
            <h4
              style={{
                fontWeight: 700,
                marginBottom: 10,
                fontSize: 22,
                color: "#1e3c72",
              }}
            >
              {service.title}
            </h4>
            <p style={{ fontSize: 15, color: "#456", marginBottom: 18 }}>
              {service.desc}
            </p>
            {/* <Link */}
              {/* // to={`/services/${service.slug}`} */}
              <Link to={`/${service.slug}`}
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #a7c7e7 0%, #b7e0ff 100%)",
                color: "#1e3c72",
                padding: "10px 28px",
                borderRadius: 24,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(100,150,200,0.10)",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #b7e0ff 0%, #a7c7e7 100%)";
                e.currentTarget.style.color = "#185a9d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #a7c7e7 0%, #b7e0ff 100%)";
                e.currentTarget.style.color = "#1e3c72";
              }}
            >
              Explore More
            </Link>
          </div>
        ))}
      </div>
    </div>
    <style>{`

      #services {
        position: relative;
       
    }
      .services-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        justify-content: center;
      }
      .service-card {
        max-width: 320px;
        min-width: 260px;
        flex: 1 1 300px;
      }
      @media (max-width: 900px) {
        #services {
          !important; /* Adjust for navbar height on tablet */
        }
        .services-grid {
          gap: 24px;
        }
        .service-card {
          max-width: 340px;
          min-width: 220px;
          flex: 1 1 240px;
        }
      }
  

      .service-card {
  display: flex;
  flex-direction: column;
  height: 100%;         /* Make card take full height of its container */
  min-height: 340px;    /* Set a reasonable min-height for mobile */
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .service-card {
    min-height: 340px;  /* Adjust as needed for your content */
    height: auto;       /* Allow height to grow if content increases */
    
  }
}
.service-card {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  justify-content: flex-start;
  /* ...other styles... */
}

.service-card img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* Optionally, set max-width or height */
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  .services-section {
    margin-top: 8px;
    padding-top: 12px;
  }
}

    `}</style>
  </section>
);

export default Services;
