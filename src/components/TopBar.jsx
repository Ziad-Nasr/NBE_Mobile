import React, {useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, Button, Text, Alert, TouchableOpacity} from 'react-native';

import styles from './../styles/components/TopBar.style';
import dark from '../themes/dark';
import {ThemeContext} from '../ThemeContext';
import {useNavigation} from '@react-navigation/native';

export const TopBar = () => {
  const navigation = useNavigation();
  const {theme, setIsDarkMode} = useContext(ThemeContext);
  return (
    <View style={[styles.topBar, {backgroundColor: theme.background}]}>
      <View style={styles.user}>
        <TouchableOpacity
          style={[styles.menu]}
          onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons
            name="menu"
            color={theme.buttonColor}
            size={25}
          />
        </TouchableOpacity>

        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={[styles.greeting, {color: theme.primaryText}]}>
            Good morning
          </Text>
          <Text style={[styles.userName, {color: theme.secondaryText}]}>
            Ahmad
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.notifications, {backgroundColor: theme.background}]}
        onPress={() =>
          Alert.alert('Notification clicked', 'This is a notification message')
        }>
        <MaterialCommunityIcons
          name="bell-outline"
          color={theme.buttonColor}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};
