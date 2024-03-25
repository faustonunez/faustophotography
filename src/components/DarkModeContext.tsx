import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const localData = localStorage.getItem("darkMode");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
