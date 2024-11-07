import { createContext, useState, useEffect } from "react";

export const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [dark]);

  return (
    <Theme.Provider value={{ dark, setDark }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
