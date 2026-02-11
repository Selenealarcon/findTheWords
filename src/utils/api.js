/**
 * Fetches word definitions from the free Dictionary API
 * @param {string} word The word to look up (case-insensitive)
 * @returns {Promise<Object>} Dictionary API response with definitions, phonetics, etc.
 * @throws {Error} If word isn't found (HTTP 404) or API is unavailable
 */
export const fetchWordDefinition = async (word) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  if (!response.ok) {
    throw new Error("Error! The word has not been found");
  }
  return response.json();
};
