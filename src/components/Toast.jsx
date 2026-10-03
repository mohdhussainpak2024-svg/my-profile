import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-msg">
        <CheckCircle2 size={18} color="var(--accent-cyan)" />
        <span>{message}</span>
      </div>
    </div>
  );
};
