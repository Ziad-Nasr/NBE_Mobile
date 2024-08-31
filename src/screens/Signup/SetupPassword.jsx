import React, {useContext, useState} from 'react';
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
import {ThemeContext} from '../../ThemeContext';

export default function SetupPassword({increment, decrement}) {
  const {theme} = useContext(ThemeContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={[styles.Verification, {backgroundColor: theme.background}]}>
      <TopSignup
        decrement={decrement}
        title="Set your password"
        subtitle="Enter a strong password for your online banking account"
      />
      <View style={[styles.mh15]}>
        <View
          style={[
            styles.formFieldPassword,
            {backgroundColor: theme.background},
          ]}>
          <Image
            source={require('../../../assets/media/padlock.png')}
            style={styles.arroba}
          />
          <View>
            <Text
              style={[
                styles.labelLoginInputPassword,
                {color: theme.primaryText},
              ]}>
              Password
            </Text>
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
        <View
          style={[
            styles.formFieldPassword,
            {backgroundColor: theme.background},
          ]}>
          <Image
            source={require('../../../assets/media/padlock.png')}
            style={styles.arroba}
          />
          <View>
            <Text
              style={[
                styles.labelLoginInputPassword,
                {color: theme.primaryText},
              ]}>
              Confirm Password
            </Text>
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
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: hasLower(password)
                    ? 'green'
                    : theme.cardBackground,
                },
              ]}></View>
            <Text style={{color: theme.secondaryText}}>Lower Case Letter</Text>
          </View>
          <View style={styles.passwordItem}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: hasUpper(password)
                    ? 'green'
                    : theme.cardBackground,
                },
              ]}></View>
            <Text style={{color: theme.secondaryText}}>Upper Case Letter</Text>
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: has8Char(password)
                    ? 'green'
                    : theme.cardBackground,
                },
              ]}></View>
            <Text style={{color: theme.secondaryText}}>
              Minimum 8 Character
            </Text>
          </View>
          <View style={styles.passwordItem}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: hasNumber(password)
                    ? 'green'
                    : theme.cardBackground,
                },
              ]}></View>
            <Text style={[{color: theme.secondaryText}]}>Number</Text>
          </View>
        </View>
        <View style={styles.dualItems}>
          <View style={styles.passwordItem}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: hasSpecial(password)
                    ? 'green'
                    : theme.cardBackground,
                },
              ]}></View>
            <Text style={{color: theme.secondaryText}}>Special Character</Text>
          </View>
          <View style={styles.passwordItem}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: Equal(password, confirmPassword)
                    ? 'green'
                    : theme.cardBackground,
                },
              ]}></View>
            <Text style={{color: theme.secondaryText}}>Matching Passwords</Text>
          </View>
        </View>
        <View style={styles.loginButton}>
          <Button title="Submit" myOnClick={increment} />
        </View>
      </View>
    </View>
  );
}
