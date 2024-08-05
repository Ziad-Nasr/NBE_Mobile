import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import TopSignup from '../../components/TopSignup';
import {Button} from '../../Reusable components/Button';
import styles from '../../styles/screens/Signup/Verification.style';
export default function Verification({increment, decrement}) {
  const [values, setValues] = useState(Array(5).fill(''));
  const inputRefs = useRef([]);
  const handleChangeText = (text, index) => {
    if (text.length <= 1 && /^[0-9]*$/.test(text)) {
      const newValues = [...values];
      newValues[index] = text;
      setValues(newValues);

      if (text && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  return (
    <View style={styles.Verification}>
      <TopSignup
        decrement={decrement}
        title="Verification"
        subtitle="Enter 5 digit code we sent to +20 101 131 5412"
      />
      <View>
        <View style={styles.container}>
          <Text>Test</Text>
          {values.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={value}
              onChangeText={text => handleChangeText(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={el => (inputRefs.current[index] = el)}
            />
          ))}
        </View>
        <View>
          <Text>Didn't receive the code ?</Text>
          <Text>Request a new one in (Timer)</Text>
        </View>
        <View style={styles.loginButton}>
          <Button title="Submit" myOnClick={increment} />
        </View>
      </View>
    </View>
  );
}
