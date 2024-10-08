import React, {useContext, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './../styles/screens/UtilsScreen.style';
import {TopBar} from '../components';
import {ThemeContext} from '../ThemeContext';

// function wait(ms) {
//   const start = new Date().getTime();
//   let end = start;

//   while (end < start + ms) {
//     end = new Date().getTime();
//   }
// }

// wait(1000);

export const UtilsScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [users, setUsers] = useState([
    {name: 'Alexandar', image: require('./../../assets/media/picture.jpg')},
    {name: 'Elsa', image: require('./../../assets/media/avatars/1.png')},
    {name: 'Mazen', image: require('./../../assets/media/avatars/2.png')},
    {name: 'Kasey', image: require('./../../assets/media/avatars/3.png')},
    {name: 'Hala', image: require('./../../assets/media/avatars/4.png')},
    {name: 'Marry', image: require('./../../assets/media/avatars/5.png')},
    {name: 'Hossam', image: require('./../../assets/media/avatars/6.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/6.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/8.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/8.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/9.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/10.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/11.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/12.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/13.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/14.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/15.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/16.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/17.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/18.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/19.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/20.png')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/21.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/22.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/23.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/24.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/25.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/26.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/27.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/28.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/29.jpg')},
    {name: 'Mohamed', image: require('./../../assets/media/avatars/30.jpg')},
  ]);

  return (
    <View style={[styles.accounts, {backgroundColor: theme.background}]}>
      <TopBar />

      <Text style={[styles.title, {color: theme.primaryText}]}>Utilities</Text>

      <ScrollView contentContainerStyle={styles.scrollArea}>
        {users.map((user, i) => {
          return (
            <View
              key={i}
              style={[
                styles.userCard,
                {backgroundColor: theme.cardBackground},
              ]}>
              <Image style={styles.image} source={user.image} />
              <Text style={[styles.name, {color: theme.primaryText}]}>
                {user.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
