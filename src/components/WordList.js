import React from "react";
/**
 * Displays a clickable word button
 * @param {string} className CSS classes to apply
 * @param {string} word The word text to display
 * @param {function} onClick Click handler (receives the word as argument)
 */
const WordList = ({ className, word, onClick }) => {
  return (
    <button className={className} onClick={() => onClick(word)}>
      {word}
    </button>
  );
};
export default WordList;
