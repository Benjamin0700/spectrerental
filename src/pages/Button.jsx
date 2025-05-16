import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
