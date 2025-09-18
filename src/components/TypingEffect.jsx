import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, onDone }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplay((prev) => prev + text[index]);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  return <div className="chat-message assistant"><div className="bubble">{display}</div></div>;
};

export default TypingEffect;
