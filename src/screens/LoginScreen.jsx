import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {LoginForm} from '../components/LoginForm';
import styles from '../styles/screens/LoginScreen.style';
import {SplashScreen} from './SplashScreen';
import {UserContext} from '../UserContext';
import {ThemeContext} from '../ThemeContext';

export function LoginScreen({navigation}) {
  const {isLoggedIn} = useContext(UserContext);
  console.log(isLoggedIn);
  const [loadingCounter, setLoadingCounter] = useState(0);
  if (loadingCounter < 3) {
    setTimeout(() => {
      setLoadingCounter(loadingCounter + 1);
    }, 1000);
  }
  return (
    <>
      {loadingCounter < 3 ? (
        <SplashScreen />
      ) : isLoggedIn ? (
        navigation.navigate('drawer')
      ) : (
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
                <LoginForm navigation={navigation} />
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
}
