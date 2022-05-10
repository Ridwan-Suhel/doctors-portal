import React from "react";

const Button = ({ children }) => {
  return (
    <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white hover:bg-gradient-to-l from-secondary to-primary">
      {children}
    </button>
  );
};

export default Button;
