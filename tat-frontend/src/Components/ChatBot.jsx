import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userQuestion = question;
    setChatHistory([...chatHistory, { type: "user", text: userQuestion }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await axios.post("https://tat-h26n.onrender.com", {

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

  return (
    <div className="chat-app">
      {/* <div className="chat-header">Chatbot</div> */}

      <div className="chat-container">
        {chatHistory.map((chat, idx) => (
          <div key={idx} className={`bubble ${chat.type}`}>
            {chat.text}
          </div>
        ))}

        {loading && (
          <div className="bubble bot typing">
            <span></span><span></span><span></span>
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleAsk()}
        />
        <button onClick={handleAsk}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
