import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TopSignup from '../../components/TopSignup';
import {Button} from '../../Reusable components/Button';
import styles from '../../styles/screens/Signup/SetupPassword.style';
import {
  Equal,
  has8Char,
  hasLower,
  hasNumber,
  hasSpecial,
  hasUpper,
} from '../../components/Validations';

export default function SetupPassword({increment, decrement}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
              value={password}
              style={styles.loginInputPassword}
              onChangeText={text => {
                setPassword(text);
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
              value={confirmPassword}
              style={styles.loginInputPassword}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
            />
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View style={styles[hasLower(password) ? 'On' : 'Off']}></View>
            <Text>Lower Case Letter</Text>
          </View>
          <View style={styles.passwordItem}>
            <View style={styles[hasUpper(password) ? 'On' : 'Off']}></View>
            <Text>Upper Case Letter</Text>
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View style={styles[has8Char(password) ? 'On' : 'Off']}></View>
            <Text>Minimum 8 Character</Text>
          </View>
          <View style={styles.passwordItem}>
            <View style={styles[hasNumber(password) ? 'On' : 'Off']}></View>
            <Text>Number</Text>
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View style={styles[hasSpecial(password) ? 'On' : 'Off']}></View>
            <Text>Special Character</Text>
          </View>
          <View style={styles.passwordItem}>
            <View
              style={
                styles[Equal(password, confirmPassword) ? 'On' : 'Off']
              }></View>
            <Text>Matching Passwords</Text>
          </View>
        </View>
        <View style={styles.loginButton}>
          <Button title="Submit" myOnClick={increment} />
        </View>
      </View>
    </View>
  );
}
