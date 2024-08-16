import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './../styles/screens/CardsScreen.style';
import History from '../components/History';
import Card from '../components/Card';
import {TopBar} from '../components';

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

  return (
    <View style={styles.accounts}>
      <TopBar />
      <Text style={styles.title}>Cards</Text>
      <Card />
      <History />
    </View>
  );
};
