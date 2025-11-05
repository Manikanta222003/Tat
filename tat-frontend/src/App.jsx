import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import WebDevelopment from "./Components/Pages/WebDevelopment";
import UIUXDesign from "./Components/Pages/UIUX";
import HostingServices from "./Components/Pages/HostingService";
import CloudComputing from "./Components/Pages/CloudService";
import DigitalMarketing from "./Components/Pages/DmService";
import AppDevelopment from "./Components/Pages/AppDevelopment";
import GamingDevelopment from "./Components/Pages/GamingDevelopment";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import Services from "./Components/Pages/Services";
import Footer from "./Components/Pages/Footer";
import Technologies from "./Components/Pages/Technologies";
import ScrollToTop from "./Components/Pages/ScrollToTop";
import OurTeam from "./Components/Pages/OurTeam";
import FloatingSocials from "./Components/Pages/FloatingSocials";
import AboutDetails from "./Components/Pages/AboutDetails";
import OurClients from "./Components/Pages/OurClients";
import Sev from './Components/Pages/services2'
import Content from './Components/Pages/Content'
import HeroSection from "./Components/Pages/HeroSection";
import Cta from "./Components/Pages/Cta";
import './App.css'
import ChatBot from "./Components/ChatBot";
import ChatWidget from "./Components/ChatWidget";
import ChatPage from "./Components/ChatPage";

function Home() {
  return (
    <>
     
      {/* <Social /> */}
      <HeroSection />
      <section id="services"><Sev /></section>
      {/* <ChatBot /> */}
      <ChatWidget />

      <section><Technologies /></section>
      <section><Cta /></section>
      <section id="about"><AboutUs /></section>
      
      <OurClients />
      <section id="contact"><ContactUs /></section>
      
    </>
  );
}

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      
      <div className="main-content">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/chatbot' element={<ChatBot/>} />
                    <Route path="/chat-page" element={<ChatPage />} />

          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/Services/:web-development" element={<WebDevelopment />} />
          <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route path="/Services/:uiux-design" element={<UIUXDesign />} />
          <Route path="/hosting-services" element={<HostingServices />} />
          <Route path="/Services/:hosting-services" element={<HostingServices />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/Services/:cloud-computing" element={<CloudComputing />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/Services/:digital-marketing" element={<DigitalMarketing />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="Services/:app-development" element={<AppDevelopment />} />
          <Route path="/gaming-development" element={<GamingDevelopment />} />
          <Route path="Services/:gaming-development" element={<GamingDevelopment />} />
          <Route path="/content" element={<Content />} />
          <Route path="Services/:content" element={<Content />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutdetails" element={<AboutDetails />} />
        </Routes>
      </div>
      <FloatingSocials/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;