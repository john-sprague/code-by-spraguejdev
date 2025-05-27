// components/Toast.tsx
import React from "react";

export type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 animate-fade-in-out
        ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">&times;</button>
      </div>
    </div>
  );
};

export default Toast;
