import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TopSignup from '../../components/TopSignup';
import {Button} from '../../Reusable components/Button';
import styles from '../../styles/screens/Signup/SetupPassword.style';
export default function SetupPassword({increment, decrement}) {
  const [password, setPassword] = useState('');
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
              value={password}
              style={styles.loginInputPassword}
            />
          </View>
        </View>
        <View style={styles.loginButton}>
          <Button title="Submit" myOnClick={increment} />
        </View>
      </View>
    </View>
  );
}
