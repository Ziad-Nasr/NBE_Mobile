import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider, ThemeContext} from './ThemeContext'; // Import ThemeContext

import {TopBar, Balance, Navigator} from './components';
import {
  HomeScreen,
  AccountsScreen,
  CardsScreen,
  UtilsScreen,
  HistoryScreen,
} from './screens';
import {SplashScreen} from './screens/SplashScreen';
import {LoginScreen} from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import {Navigations} from './navigations';
import styles from './App.style';

const Stack = createNativeStackNavigator();

export const App = () => {
  const [loadingCounter, setLoadingCounter] = useState(0);

  if (loadingCounter < 3) {
    setTimeout(() => {
      setLoadingCounter(loadingCounter + 1);
    }, 1000);
  }

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <ThemeContextConsumer />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

// Separate component to handle the useContext and the rest of your app
const ThemeContextConsumer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={[styles.app, {backgroundColor: theme.background}]}>
      <StatusBar
        barStyle={theme.isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <Stack.Navigator>
        {Navigations.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </View>
  );
};
