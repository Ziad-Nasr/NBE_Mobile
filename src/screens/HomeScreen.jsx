import React from 'react';
import {View, Text} from 'react-native';
import {Balance, More, SendMoney} from './../components';

import styles from './../styles/screens/HomeScreen.style';
import History from '../components/History';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text>Test</Text>
      <Balance />
      <More navigation={navigation} />
      <SendMoney />
      <History />
    </View>
  );
};
