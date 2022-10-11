import { useCallback, useEffect, useState } from 'react';

/**
 * A hook to use localStorage with SSR.
 *
 * Make sure that localStorage and state do not conflict with each other.
 * Only update the state if no initialState was read from localStorage.
 *
 * @param {string} key
 * @param {unknown} initialState
 * @returns {[unknown, (value: unknown) => void]}
 */
export default function useLocalStorage(key, initialState) {
  // Set the desired initialState
  const [stateValue, setStateValue] = useState(initialState);

  // Provide a custom setter function that updates the state and writes to localStorage
  const setStateAndUpdateLocalStorage = useCallback(
    (value) => {
      setStateValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  // Read the localStorage from the client
  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    // When the stored value === null
    // Then the key does not exist, and we don't want to perform an update
    if (stored !== null) {
      setStateValue(JSON.parse(stored));
    }
  }, [key]);

  return [stateValue, setStateAndUpdateLocalStorage];
}
