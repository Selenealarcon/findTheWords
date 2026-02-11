import React from "react";

/**
 * Displays word definitions with part-of-speech categorization
 * @param {Object[]} definitions Dictionary API response array
 * @param {boolean} showDefinitions Controls visibility toggle
 */
const DefinitionsList = ({ definitions, showDefinitions }) => {
  return (
    <div id="meanings">
      <div
        id="definitions"
        style={{ display: showDefinitions ? "block" : "none" }}
      >
        <ul>
          {definitions.map((entry, index) =>
            entry.meanings.map((meaning, idx) => (
              <li key={`${index}-${idx}`}>
                <span className="part-of-speech">{meaning.partOfSpeech}</span>
                <ul id="wordMeanings">
                  {meaning.definitions.map((def, i) => (
                    <li key={i}>{def.definition}</li>
                  ))}
                </ul>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default DefinitionsList;
