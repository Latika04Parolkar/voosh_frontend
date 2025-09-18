import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatMessage from "./components/ChatMessage";
import TypingEffect from "./components/TypingEffect";
import { getSessionId, resetSessionId } from "./utils/session";
import "./styles/Chat.scss";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [pending, setPending] = useState("");

  const sessionId = getSessionId();

  useEffect(() => {
    axios
      .get(`${API_BASE}/history/${sessionId}`)
      .then((res) => setMessages(res.data.history))
      .catch(console.error);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setPending("");

    try {
      const res = await axios.post(`${API_BASE}`, {
        sessionId,
        message: input,
      });

      const botReply = res.data.response;
      setPending(botReply);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleReset = async () => {
    try {
      await axios.post(`${API_BASE}/reset`, { sessionId });
      resetSessionId();
      window.location.reload();
    } catch (err) {
      console.error("Reset failed", err);
    }
  };

  return (
    <div className="chat-container">
      <h2>🧠 News Chatbot</h2>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}

        {isTyping && pending && (
          <TypingEffect
            text={pending}
            onDone={() => {
              setMessages((prev) => [...prev, { role: "assistant", content: pending }]);
              setIsTyping(false);
              setPending("");
            }}
          />
        )}
      </div>

      <div className="input-area">
        <input
          value={input}
          placeholder="Ask a question..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={handleReset} style={{ backgroundColor: "#ff4d4d" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
