import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ChatBot.css";
import { IoSend } from "react-icons/io5";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const BACKEND_URL = "https://tat-h26n.onrender.com";

  // ✅ Convert URLs in text to clickable links
  const convertLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      (url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:#007bff; text-decoration:underline;">${url}</a>`
    );
  };

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userQuestion = question;
    setChatHistory([...chatHistory, { type: "user", text: userQuestion }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/chat`, {
        question: userQuestion,
      });

      const botAnswer =
        response.data.answer || "Sorry, I don't know the answer.";

      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          { type: "bot", text: botAnswer },
        ]);
        setLoading(false);
      }, 700);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Please try again." },
      ]);
      setLoading(false);
    }
  };

  // 👇 Auto-scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, loading]);

  return (
    <div className="chat-app">
      <div className="chat-container">
        {chatHistory.map((chat, idx) => (
          <div
            key={idx}
            className={`bubble ${chat.type}`}
            dangerouslySetInnerHTML={{ __html: convertLinks(chat.text) }}
          ></div>
        ))}

        {loading && (
          <div className="bubble bot typing">
            <span></span><span></span><span></span>
          </div>
        )}

        {/* Invisible div for scrolling */}
        <div ref={chatEndRef} />
      </div>

      <div className="input-area">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleAsk()}
        />
        <button onClick={handleAsk}>
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
