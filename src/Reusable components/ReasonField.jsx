import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ThemeContext} from '../ThemeContext';

const ReasonField = ({navigation, title, placeholder}) => {
  const {theme, isDarkMode} = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.textFieldContainer,
        {
          backgroundColor: isDarkMode
            ? theme.cardBackground
            : styles.textFieldContainer.backgroundColor,
        },
      ]}>
      <Text style={[styles.textFieldLabel, {color: theme.secondaryText}]}>
        {title}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={{
          backgroundColor: isDarkMode ? theme.background : '#FFF',
          borderColor: theme.borderColor,
          color: theme.primaryText,
          marginBottom: 10,
          borderRadius: 5,
        }}
        placeholderTextColor={theme.secondaryText}
      />
    </View>
  );
};

export default ReasonField;

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textFieldContainer: {
    margin: 7,
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
