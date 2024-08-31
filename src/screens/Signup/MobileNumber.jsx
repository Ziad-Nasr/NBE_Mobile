import React, {useContext, useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import TopSignup from '../../components/TopSignup';
import styles from '../../styles/screens/Signup/MobileNumber.style';
import {Button} from '../../Reusable components/Button';
import {ThemeContext} from '../../ThemeContext';
export default function MobileSignupScreen({increment, decrement}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {theme, isDarkMode} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.background}}>
      <TopSignup
        decrement={decrement}
        title="Mobile Number"
        subtitle="Enter the mobile number registred in the bank"
      />
      <View style={[styles.MobileNumber, {backgroundColor: theme.background}]}>
        <View style={[styles.formField, {backgroundColor: theme.background}]}>
          <Image
            source={require('../../../assets/media/iphone.png')}
            style={styles.arroba}
          />
          <View style={{}}>
            <Text style={styles.labelLoginInput}>Mobile Number</Text>
            <TextInput
              placeholder="653238"
              placeholderTextColor={theme.primaryText}
              value={username}
              style={[styles.loginInput, {color: theme.primaryText}]}
              onChange={text => {
                setUsername(text);
              }}
            />
          </View>
        </View>
        <View style={[styles.LowerMobileNumber]}>
          <View style={styles.loginButton}>
            <Button title="Next" myOnClick={increment} />
          </View>
          <View>
            <Text style={{color: theme.secondaryText}}>
              By signing up, you agree to our{' '}
              <Text
                style={[styles.bold, styles.black, {color: theme.primaryText}]}>
                Terms of Service
              </Text>{' '}
              and acknowledge that you have read our{' '}
              <Text
                style={[styles.bold, styles.black, {color: theme.primaryText}]}>
                Privacy Policy
              </Text>
              .
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
