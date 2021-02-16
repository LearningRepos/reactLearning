import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("english");
  const toggleLanguage = (selectLanguage) => {
    setLanguage(selectLanguage);
  };
  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage: toggleLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}
