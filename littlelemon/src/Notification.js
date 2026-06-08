import React, { useEffect } from 'react';
import './Notification.css';

function Notification({ message, type = 'info', onClose, timeout = 5000 }) {
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(() => {
      onClose && onClose();
    }, timeout);
    return () => clearTimeout(id);
  }, [message, onClose, timeout]);

  if (!message) return null;

  return (
    <div className={`notification notification--${type}`} role="status" aria-live="polite">
      <div className="notification__message">{message}</div>
      <button className="notification__close" onClick={onClose} aria-label="Dismiss notification">
        ×
      </button>
    </div>
  );
}

export default Notification;
