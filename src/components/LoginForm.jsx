import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from '../styles/components/LoginForm.style';
export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.welcomeText}>
        Welcome to The National Bank of Egypt
      </Text>
      <View style={styles.formField}>
        <Image
          source={require('../../assets/media/arroba.png')}
          style={styles.arroba}
        />
        <View>
            
        </View>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'#FFFFFF'}
          value={email}
          style={styles.loginInput}
        />
      </View>
    </View>
  );
}
