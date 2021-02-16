import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
