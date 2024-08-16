import React from 'react';
import {Text, TextInput, View} from 'react-native';

const ReasonField = ({navigation, title, placeholder}) => {
  return (
    <View style={styles.textFieldContainer}>
      <Text style={styles.textFieldLabel}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.defaultStyle} />
    </View>
  );
};

export default ReasonField;

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textFieldContainer: {
    margin: 10,
    paddingTop: 7,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  textFieldLabel: {
    fontWeight: 'bold',
  },
  defaultContainerStyle: {
    height: 40,
  },
  defaultStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  defaultDropDownStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
});
