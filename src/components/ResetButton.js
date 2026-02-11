import React from "react";

/**
 * Reset button component with icon
 * @param {function} onClick Click handler for reset action
 */
const ResetButton = ({ onClick }) => {
  return (
    <button id="reset" onClick={onClick} tabIndex="-1">
      <img src={`${process.env.PUBLIC_URL}/reset.png`} alt="reset button" />
    </button>
  );
};

export default ResetButton;
