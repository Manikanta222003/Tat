import React from "react";
import callIcon from "../assets/images/icons8-call-30.png";
import whatsappIcon from "../assets/images/icons8-whatsapp-30.png";
import instaIcon from "../assets/images/insta.png";
import Robot from "../assets/images/robot.png";

const iconStyle = {
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "rgb(0 10 247 / 62%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "8px 0",
  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  fontSize: 22,
  color: "#1e3c72",
  textDecoration: "none",
  transition: "transform 0.2s",
  overflow: "hidden",
  padding: 0,
};

const imgStyle = {
  width: 22,
  height: 22,
  objectFit: "contain",
  display: "block",
};

const FloatingSocials = () => {
  // removed local useState; will signal ChatWidget via window event

  const openChatWidget = () => {
    window.dispatchEvent(new CustomEvent("openChat"));
  };

  return (
    <>
      <div className="floating-socials">
        <a
          href="tel:+917989659195"
          style={iconStyle}
          title="Call"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={callIcon} alt="Call" style={imgStyle} />
        </a>
        <a
          href="https://wa.me/917989659195"
          style={iconStyle}
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" style={imgStyle} />
        </a>
        <a
          href="https://www.instagram.com/truly_aim_technologies/"
          style={iconStyle}
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaIcon} alt="Instagram" style={imgStyle} />
        </a>

        <button
        className="chat"
          type="button"
          style={{
            ...iconStyle,
            border: "none",
            padding: 0, 
    width: 60,
    height: 60,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8px 0px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 8px',
    fontSize: '22px',
    color: 'rgb(30, 60, 114)',
    textDecoration: 'none',
    transition:'transform 0.2s',

    padding: 0,
    border: 'none',
          }}
          title="Chat"
          onClick={openChatWidget}
        >
          <img src={Robot} alt="chat" style={{ width: 50, height: "auto" }} />
        </button>
      </div>

      <style>{`
        

        .chat {
        width: 60px;
    height: 60px;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
    font-size: 22px;
    color: rgb(30, 60, 114);
    text-decoration: none;
    transition: transform 0.2s;
    overflow: hidden;
    padding: 0px;
    border: none;
}


        .floating-socials {
          position: fixed;
          right: 18px;
          bottom: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .floating-socials a:hover, .floating-socials button:hover {
          transform: scale(1.12);
          box-shadow: 0 4px 16px rgba(30,60,114,0.18);
        }
        @media (max-width: 600px) {
          .floating-socials {
            right: 8px;
            bottom: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSocials;
