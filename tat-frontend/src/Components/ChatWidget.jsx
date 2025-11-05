import React, { useState, useRef, useEffect } from "react";
import ChatBot from "./ChatBot";
import { useNavigate } from "react-router-dom";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Draggable Feature
  const popupRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleOpenChat = () => {
      if (isMobile) {
        navigate('/chat-page');
      } else {
        setOpen(true);
        setMinimized(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener("openChat", handleOpenChat);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("openChat", handleOpenChat);
    };
  }, [isMobile, navigate]);

  const startDrag = (e) => {
    const popup = popupRef.current;
    pos.current = {
      x: e.clientX - popup.offsetLeft,
      y: e.clientY - popup.offsetTop,
    };
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const onDrag = (e) => {
    const popup = popupRef.current;
    popup.style.left = `${e.clientX - pos.current.x}px`;
    popup.style.top = `${e.clientY - pos.current.y}px`;
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", onDrag);
  };

  return (
    <>
      {/* Chat Icon when closed */}
      {/* {!open && (
        <div className="chat-icon" onClick={() => setOpen(true)}>
          <img src="/chat-icon.png" alt="chat" />
        </div>
      )} */}

      {/* Minimized Bar */}
      {open && minimized && (
        <div className="chat-minimized" onClick={() => setMinimized(false)}>
          <img src="/bot.png" alt="bot" />
          <span>Chat with us</span>
        </div>
      )}

      {/* Full Popup Window */}
      {open && !minimized && (
        <div className="chat-popup" ref={popupRef}>
          {/* Popup Header */}
          <div className="chat-popup-header" onMouseDown={startDrag}>
            <div className="chat-header-left">
              {/* <img className="avatar" src="/bot.png" alt="" /> */}
              <div>
                <div className="name">TAT ChatBot</div>
                
              </div>
            </div>

            <div className="chat-header-right">
              <button className="minimize-btn" onClick={() => setMinimized(true)}>
                ─
              </button>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>
          </div>

          <div className="chat-popup-body">
            <ChatBot />
          </div>
        </div>
      )}
    </>
  );
}
