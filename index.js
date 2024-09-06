/**
 * @format
 */

// index.js
import React from 'react';
import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import {ThemeProvider} from './src/ThemeContext';
import {UserProvider} from './src/UserContext';

const Root = () => (
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => Root);
