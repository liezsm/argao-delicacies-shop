import React, { useEffect } from "react";

const Notifications = ({ messages, setMessage }) => {
  const { text, style } = messages;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.length) {
        setMessage({ text: "", style: "" });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [messages]);
  return (
    <div className={`notification ${style}`}>
      <div key={text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Notifications;
