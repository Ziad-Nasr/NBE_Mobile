import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async userData => {
    setIsLoggedIn(true);
    setUser(userData);

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      await AsyncStorage.setItem('isLoggedIn', 'true');
    } catch (e) {
      console.log('Error storing user data:', e);
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUser(null);

    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.setItem('isLoggedIn', 'false');
    } catch (e) {
      console.log('Error removing user data:', e);
    }
  };

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedLoginStatus = await AsyncStorage.getItem('isLoggedIn');

        if (storedUser && storedLoginStatus === 'true') {
          setUser(JSON.parse(storedUser));
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.log('Error retrieving user data:', e);
      }
    };

    checkUserLogin();
  }, []);

  return (
    <UserContext.Provider value={{isLoggedIn, user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
