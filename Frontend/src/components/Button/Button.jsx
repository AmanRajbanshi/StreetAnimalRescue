import React from "react";
import "./button.css";
const Button = ({ text }) => {
  return (
    <>
      <button className="buttons donateButton" style={{}}>
        {text}
      </button>
    </>
  );
};

export default Button;
