import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<any>({ theme: "dark", undefined });

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
