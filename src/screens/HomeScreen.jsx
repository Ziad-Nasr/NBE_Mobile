import React from 'react';
import {View, Text} from 'react-native';
import {Balance, More, SendMoney, TopBar} from './../components';

import styles from './../styles/screens/HomeScreen.style';
import History from '../components/History';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <TopBar />
      <Balance />
      <More navigation={navigation} />
      <SendMoney />
      <History />
    </View>
  );
};
