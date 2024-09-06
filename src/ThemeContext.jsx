import React, {createContext, useEffect, useState} from 'react';
import light from './themes/light';
import dark from './themes/dark';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  // Corrected toggleDarkMode function
  const toggleDarkMode = async () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode); // Update state first
    try {
      await AsyncStorage.setItem('isDarkMode', JSON.stringify(newDarkMode));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const value = await AsyncStorage.getItem('isDarkMode');
        if (value !== null) {
          setIsDarkMode(JSON.parse(value));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO: Focuse the Input bar
