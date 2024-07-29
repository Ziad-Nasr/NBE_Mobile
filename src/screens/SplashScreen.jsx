import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/screens/SplashScreen.style';
// import midLogo from '../../assets/media/NBE_Middle_Logo.png';

export function SplashScreen() {
  return (
    <View style={styles.splash}>
      <Image
        source={require('../../assets/media/NBE_Middle_Logo.png')}
        style={styles.middlelogo}
      />
      <Image
        source={require('../../assets/media/NBE_Bottom_Logo.png')}
        style={styles.bottomLogo}
      />
    </View>
  );
}
