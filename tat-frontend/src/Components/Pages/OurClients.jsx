import React, { useEffect } from "react";
import "../Styles/OurClients.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// import images
import AnishDental from "../assets/images/AnishDental.png";
import GLSports from "../assets/images/GLSport.png";
import Vijetha from "../assets/images/Vijetha.png";
import HelloFoodies from "../assets/images/HelloFoodies.png";
import backpackway from "../assets/images/backpackway.png";
import Gruha from "../assets/images/Gruha.png";
import Miracle from "../assets/images/ms_logo.png";
import PropertiesBazar from "../assets/images/pb-logo.png";

const Clients = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      delay: 50,
    });
  }, []);

  const clients = [
    { img: AnishDental, name: "Anish Dental", link: "https://anishdental.com/" },
    { img: GLSports, name: "GL Sports Centrum", link: "https://glsportscentrum.com/" },
    { img: Vijetha, name: "Vijetha Packers & Movers", link: "https://vijethapackersandmovers.in/" },
    { img: HelloFoodies, name: "Hello Foodie's" },
    { img: Miracle, name: "Miracle Salons", link: "https://miraclesalon.in/" },
    { img: PropertiesBazar, name: "Properties Bazar", link: "https://properties-bazar-1gca.vercel.app/" },
    { img: backpackway, name: "Backpackway" },
    { img: Gruha, name: "Gruha Ventures" },
  ];

  return (
    <section className="clients-section">
      <h2
        className="clients-title"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Our Clients
      </h2>
      <p
        className="clients-subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        Trusted by businesses across various industries to deliver exceptional
        digital solutions
      </p>

      {/* Swiper for all devices */}
      <div className="clients-swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div
                className="carousel-item"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 80}
              >
                {client.img ? (
                  <a
                    href={client.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={client.img} alt={client.name} />
                  </a>
                ) : (
                  <span className="placeholder">{client.name}</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
