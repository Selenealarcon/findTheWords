import React from "react";

/**
 * Renders a clickable letter button
 * @param {string} letra The letter to display
 * @param {function} onClick Optional handler
 */
const LetterButton = ({ letra, onClick }) => {
  const handleClick = (e) => {
    e.currentTarget.blur();
    if (onClick) onClick(letra);
  };

  return <button onClick={handleClick}>{letra}</button>;
};

export default LetterButton;
