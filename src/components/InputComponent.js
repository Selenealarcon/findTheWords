import React from "react";

/**
 * Controlled input component with letter filtering and validation styling
 * @param {string} props.input Current input value
 * @param {boolean} props.isValidWord Validation state flag
 * @param {function} props.onChange Change handler (receives filtered value)
 * @param {React.Ref} props.inputRef Ref to access input DOM element
 * @param {string[]} [props.allowedLetters=[]] Whitelist of permitted characters
 */
const InputComponent = ({ input, isValidWord, onChange, inputRef, allowedLetters = []  }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    const filteredValue = value.split('').filter(char => 
      allowedLetters.includes(char)
    ).join('');
    onChange({ target: { value: filteredValue } });
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        ref={inputRef}
        autoFocus
        className={!isValidWord ? "shake" : ""}
        style={{ color: isValidWord ? "" : "#ac0505" }}
        readOnly
      />
    </div>
  );
};

export default InputComponent;
