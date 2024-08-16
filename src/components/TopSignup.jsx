import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/screens/Signup/TopSignup.style';
import {useNavigation} from '@react-navigation/native';
export default function TopSignup(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.upperLogin}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/media/NBE_Bottom_Logo.png')}
          style={styles.upperLogo}
        />
      </View>
      <View>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.subtitle && (
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        )}
      </View>
    </View>
  );
}
