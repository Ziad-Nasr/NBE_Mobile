import React from 'react';
import {Text, TextInput, View} from 'react-native';

const ReasonField = ({navigation}) => {
  return (
    <View style={styles.textFieldContainer}>
      <Text style={styles.textFieldLabel}>Reason of Transfer</Text>
      <TextInput placeholder="Reason of transfer" style={styles.defaultStyle} />
    </View>
  );
};

export default ReasonField;

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textFieldContainer: {
    margin: 10,
    padding: 10,
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
