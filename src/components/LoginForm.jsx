import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from '../styles/components/LoginForm.style';
import {Button} from '../Reusable components/Button';
import {UserContext} from '../UserContext';
export function LoginForm({navigation}) {
  const {login} = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.loginForm}>
      <Text style={styles.welcomeText}>
        Welcome to The National Bank of Egypt
      </Text>
      <View style={styles.formField}>
        <Image
          source={require('../../assets/media/arroba.png')}
          style={styles.arroba}
        />
        <View>
          <Text style={styles.labelLoginInput}>Username</Text>
          <TextInput
            placeholder="653238"
            placeholderTextColor={'#FFFFFF'}
            value={username}
            style={styles.loginInput}
            onChange={e => setUsername(e.target.value)}
          />
        </View>
      </View>
      <View style={styles.formFieldPassword}>
        <Image
          source={require('../../assets/media/padlock.png')}
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
            onChange={e => setPassword(e.target.value)}
          />
        </View>
      </View>
      <View style={styles.bottomButtonLoginForm}>
        <View style={styles.loginButton}>
          <Button
            title="Login"
            myOnClick={() => {
              login(username);
              navigation.navigate('drawer');
            }}
          />
        </View>
        <View>
          <Image
            style={styles.fingerPrintLoginForm}
            source={require('../../assets/media/fingerprint.png')}
          />
        </View>
      </View>
      <View style={styles.forgotPassword}>
        <Text style={styles.white}>Don't have an account?</Text>
        <Text
          style={styles.signUpLoginForm}
          onPress={() => {
            navigation.navigate('signup');
          }}>
          Sign up
        </Text>
      </View>
      <View style={styles.bottomLoginForm}>
        <View style={styles.forgotPassword}>
          <Text style={styles.orange}>Contact Us</Text>
          <Text> - </Text>
          <Text style={styles.orange}>FAQs</Text>
          <Text> - </Text>
          <Text style={styles.orange}>Help</Text>
        </View>
        <View>
          <Text style={styles.copyRights}>
            Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
          </Text>
        </View>
      </View>
    </View>
  );
}
