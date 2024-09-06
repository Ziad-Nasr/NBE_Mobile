import React, {useContext, useRef, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import TopSignup from '../../components/TopSignup';
import {Button} from '../../Reusable components/Button';
import styles from '../../styles/screens/Signup/Verification.style';
import {ThemeContext} from '../../ThemeContext';

export default function Verification({increment, decrement}) {
  const {theme} = useContext(ThemeContext);
  const [values, setValues] = useState(Array(5).fill(''));
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length <= 1 && /^[0-9]*$/.test(text)) {
      const newValues = [...values];
      newValues[index] = text;
      setValues(newValues);

      if (text && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else if (!text && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyPress = ({nativeEvent}, index) => {
    if (nativeEvent.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const isDisabled = values.some(value => value === '');

  return (
    <View style={[styles.Verification, {backgroundColor: theme.background}]}>
      <TopSignup
        decrement={decrement}
        title="Verification"
        subtitle="Enter 5 digit code we sent to +20 101 131 5412"
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={styles.container}>
            {values.map((value, index) => (
              <TextInput
                key={index}
                style={[
                  styles.VerificationInput,
                  {
                    backgroundColor: theme.cardBackground,
                    color: theme.primaryText,
                  },
                ]}
                value={value}
                onChangeText={text => handleChangeText(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                placeholder="_"
                placeholderTextColor={theme.secondaryText}
                ref={el => (inputRefs.current[index] = el)}
              />
            ))}
          </View>
          <Text style={{color: theme.secondaryText}}>
            Didn't receive the code?
          </Text>
          <Text
            style={[
              styles.blackText,
              styles.bold,
              {color: theme.secondaryText},
            ]}>
            Request a new one
          </Text>
        </View>
        <View style={styles.loginButton}>
          <Button
            title="Submit"
            myOnClick={increment}
            disabled={isDisabled} // Disable the button if any input field is empty
          />
        </View>
      </View>
    </View>
  );
}
