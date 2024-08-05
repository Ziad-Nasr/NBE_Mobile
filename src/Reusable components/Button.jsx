import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Reusable components/Button.style';

export function Button({title, myOnClick}) {
  return (
    <TouchableOpacity style={styles.button} onPress={myOnClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
