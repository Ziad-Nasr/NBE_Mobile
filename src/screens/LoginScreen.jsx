import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {LoginForm} from '../components/LoginForm';
import styles from '../styles/screens/LoginScreen.style';

export function LoginScreen() {
  return (
    <View style={styles.login}>
      <ImageBackground
        source={require('../../assets/media/loginPageBackground.jpeg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.AboveBackgroundImage}>
          <View style={styles.upperLogin}>
            <TouchableOpacity
              style={styles.translateButton}
              onPress={() => {
                alert('Arabic Translation Soon');
              }}>
              <Text style={styles.translateButtonText}>AR</Text>
            </TouchableOpacity>
            <Image
              source={require('../../assets/media/NBE_Bottom_Logo.png')}
              style={styles.upperLogo}
            />
          </View>
          <View style={styles.lowerLogin}>
            <LoginForm />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
