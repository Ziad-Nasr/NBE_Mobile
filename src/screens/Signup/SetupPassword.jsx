import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TopSignup from '../../components/TopSignup';
import {Button} from '../../Reusable components/Button';
import styles from '../../styles/screens/Signup/SetupPassword.style';
import {
  has8Char,
  hasLower,
  hasNumber,
  hasSpecial,
  hasUpper,
} from '../../components/Validations';

export default function SetupPassword({increment, decrement}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordItems, setPasswordItems] = useState({
    lower: 'Off',
    upper: 'Off',
    minChar: 'Off',
    number: 'Off',
    special: 'Off',
  });
  const handlePassword = text => {
    if (hasUpper(text)) {
      setPasswordItems(prev => ({...prev, upper: 'On'}));
    } else {
      setPasswordItems(prev => ({...prev, upper: 'Off'}));
    }

    if (hasLower(text)) {
      setPasswordItems(prev => ({...prev, lower: 'On'}));
    } else {
      setPasswordItems(prev => ({...prev, lower: 'Off'}));
    }

    if (has8Char(text)) {
      setPasswordItems(prev => ({...prev, minChar: 'On'}));
    } else {
      setPasswordItems(prev => ({...prev, minChar: 'Off'}));
    }

    if (hasNumber(text)) {
      setPasswordItems(prev => ({...prev, number: 'On'}));
    } else {
      setPasswordItems(prev => ({...prev, number: 'Off'}));
    }

    if (hasSpecial(text)) {
      setPasswordItems(prev => ({...prev, special: 'On'}));
    } else {
      setPasswordItems(prev => ({...prev, special: 'Off'}));
    }
  };

  return (
    <View style={styles.Verification}>
      <TopSignup
        decrement={decrement}
        title="Set your password"
        subtitle="Enter a strong password for your online banking account"
      />
      <View style={[styles.mh15]}>
        <View style={[styles.formFieldPassword]}>
          <Image
            source={require('../../../assets/media/padlock.png')}
            style={styles.arroba}
          />
          <View>
            <Text style={styles.labelLoginInputPassword}>Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="********"
              placeholderTextColor={'#007236'}
              // value={password}
              style={styles.loginInputPassword}
              onChangeText={text => {
                handlePassword(text);
              }}
            />
          </View>
        </View>
        <View style={styles.formFieldPassword}>
          <Image
            source={require('../../../assets/media/padlock.png')}
            style={styles.arroba}
          />
          <View>
            <Text style={styles.labelLoginInputPassword}>Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Re-write your password"
              placeholderTextColor={'#007236'}
              // value={confirmPassword}
              style={styles.loginInputPassword}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
            />
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View style={styles[passwordItems.lower]}></View>
            <Text>Lower Case Letter</Text>
          </View>
          <View style={styles.passwordItem}>
            <View style={styles[passwordItems.upper]}></View>
            <Text>Upper Case Letter</Text>
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View style={styles[passwordItems.minChar]}></View>
            <Text>Minimum 8 Character</Text>
          </View>
          <View style={styles.passwordItem}>
            <View style={styles[passwordItems.number]}></View>
            <Text>Number</Text>
          </View>
        </View>
        <View style={styles.passwordItem}>
          <View style={styles[passwordItems.special]}></View>
          <Text>Special Character</Text>
        </View>
        <View style={styles.loginButton}>
          <Button title="Submit" myOnClick={increment} />
        </View>
      </View>
    </View>
  );
}
