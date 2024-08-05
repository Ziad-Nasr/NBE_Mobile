import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import TopSignup from '../../components/TopSignup';
import styles from '../../styles/screens/Signup/MobileNumber.style';
import {Button} from '../../Reusable components/Button';
export default function MobileSignupScreen({increment, decrement}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View>
      <TopSignup
        decrement={decrement}
        title="Mobile Number"
        subtitle="Enter the mobile number registred in the bank"
      />
      <View style={styles.MobileNumber}>
        <View style={styles.formField}>
          <Image
            source={require('../../../assets/media/iphone.png')}
            style={styles.arroba}
          />
          <View>
            <Text style={styles.labelLoginInput}>Mobile Number</Text>
            <TextInput
              placeholder="653238"
              placeholderTextColor={'#FFFFFF'}
              value={username}
              style={styles.loginInput}
            />
          </View>
        </View>
        <View style={styles.LowerMobileNumber}>
          <View style={styles.loginButton}>
            <Button title="Next" myOnClick={increment} />
          </View>
          <View>
            <Text>
              By signing up, you agree to our{' '}
              <Text style={[styles.bold, styles.black]}>Terms of Service</Text>{' '}
              and acknowledge that you have read our{' '}
              <Text style={[styles.bold, styles.black]}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
