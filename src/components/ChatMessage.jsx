import React from "react";
import "../styles/Chat.scss";

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.role}`}>
      <div className="bubble">{message.content}</div>
    </div>
  );
};

export default ChatMessage;
