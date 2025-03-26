import React, { createContext, useContext, useState, useCallback } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    setLastScrollPosition(window.scrollY);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isScrolled, lastScrollPosition, handleScroll }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
