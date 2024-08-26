import React, {createContext, useState} from 'react';
import light from './themes/light';
import dark from './themes/dark';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
