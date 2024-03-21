import React, { useEffect } from "react";

const MessageBox = ({ message, messageType, setMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage([]);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="messageBox">
      {message && (
        <div className={messageType === "error" ? "error" : "success"}>
          {message}
        </div>
      )}
    </div>
  );
};

export default MessageBox;
