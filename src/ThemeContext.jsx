import React, {createContext, useState} from 'react';
import light from './themes/light';
import dark from './themes/dark';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;
  function toggleDarkMode() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO: Save the Dark mode, Async Storage save
// TODO: isLoggedIn save context

// TODO: Focuse the Input bar
