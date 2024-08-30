import React, {useContext, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './../styles/screens/CardsScreen.style';
import History from '../components/History';
import Card from '../components/Card';
import {TopBar} from '../components';
import {ThemeContext} from '../ThemeContext';

// function wait(ms) {
//   const start = new Date().getTime();
//   let end = start;

//   while (end < start + ms) {
//     end = new Date().getTime();
//   }
// }

// wait(1000);

export const CardsScreen = () => {
  const [users, setUsers] = useState([]);
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.accounts, {backgroundColor: theme.background}]}>
      <TopBar />
      <Text style={[styles.title, {color: theme.primaryText}]}>Cards</Text>
      <Card />
      <History />
    </View>
  );
};
