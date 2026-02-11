import { useState, useEffect } from "react";

/**
 * Persists state to localStorage and keeps it in sync
 * @param {string} key localStorage key
 * @param {any} initialValue Default value if none stored
 * @returns {[any, function]} State and setter like useState
 */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;