import React, {useContext, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const TextField = () => {
  const {theme, isDarkMode} = useContext(ThemeContext);
  const [amount, setAmount] = useState('');

  const formatAmount = value => {
    // Remove any non-numeric characters except for the dot
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Format the number with commas
    const formattedValue = parseFloat(numericValue).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Return the formatted value with a dollar sign
    return `$ ${formattedValue}`;
  };

  const handleAmountChange = value => {
    // Update the state with the formatted value
    const formattedValue = formatAmount(value);

    if (formattedValue === '$ NaN') {
      setAmount('');
    } else setAmount(formattedValue);
  };

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
        Amount to transfer
      </Text>
      <TextInput
        placeholder="$0.00"
        value={amount}
        keyboardType="numeric"
        onChangeText={handleAmountChange}
        style={[
          styles.defaultStyle,
          {
            color: theme.primaryText,
            backgroundColor: isDarkMode
              ? theme.background
              : styles.defaultStyle.backgroundColor,
          },
        ]}
        placeholderTextColor={theme.primaryText}
      />
    </View>
  );
};

export default TextField;

import {StyleSheet} from 'react-native';
import {ThemeContext} from '../ThemeContext';
const styles = StyleSheet.create({
  textFieldContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  textFieldLabel: {
    // color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  defaultStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
