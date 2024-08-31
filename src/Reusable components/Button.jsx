import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Reusable components/Button.style';

export function Button({title, myOnClick, disabled}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: disabled ? 'rgba(0,114,54,0.3)' : '#007236'},
      ]}
      onPress={myOnClick}
      disabled={disabled}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
}
