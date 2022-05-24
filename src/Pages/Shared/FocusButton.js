import React from "react";

const FocusButton = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold px-8">
      {children}
    </button>
  );
};

export default FocusButton;
