import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Balance, More, SendMoney, TopBar} from './../components';

import styles from './../styles/screens/HomeScreen.style';
import History from '../components/History';
import {ThemeContext} from '../ThemeContext';

export const HomeScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.home, {backgroundColor: theme.background}]}>
      <TopBar />
      <Balance />
      <More navigation={navigation} />
      <SendMoney />
      <History />
    </View>
  );
};
