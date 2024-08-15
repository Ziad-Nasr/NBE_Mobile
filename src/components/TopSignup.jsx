import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/screens/Signup/TopSignup.style';
export default function TopSignup(props) {
  return (
    <View>
      <View style={styles.upperLogin}>
        <TouchableOpacity style={styles.backButton} onPress={props.decrement}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/media/NBE_Bottom_Logo.png')}
          style={styles.upperLogo}
        />
      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        {props.subtitle && (
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        )}
      </View>
    </View>
  );
}
