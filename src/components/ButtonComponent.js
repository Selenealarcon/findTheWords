import React from "react";

/**
 * Reusable button component
 * @param {function} onClick Click handler function
 * @param {string} label Button display text
 */
const ButtonComponent = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonComponent;
