import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot';

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-page">
      <div className="chat-page-header">
        <h1>TAT ChatBot</h1>
        <button className="close-btn" onClick={() => navigate(-1)}>
          ×
        </button>
      </div>
      <div className="chat-page-body">
        <ChatBot />
      </div>
      
      <style>{`
        .chat-page {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }
        
        .chat-page-header {
          background: #128C7E;
          color: white;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        
        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          padding: 0 10px;
          line-height: 1;
          transition: transform 0.2s;
        }

        .close-btn:hover {
          transform: scale(1.1);
        }
        
        .chat-page-body {
          flex: 1;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

export default ChatPage;