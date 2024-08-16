import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles/screens/AccountsScreen.style';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AccountsScreen = () => {
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
  const [viewMode, setViewMode] = useState('grid');
  return (
    <View style={styles.accounts}>
      <View style={styles.topAccountScreen}>
        <Text style={styles.title}>Beneficiaries</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setViewMode('grid')}
            style={[styles.button, viewMode === 'grid' && styles.activeButton]}>
            {/* <Text style={styles.buttonText}>Grid</Text> */}
            <Ionicons name="grid" size={20} color="#d5d5d5" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setViewMode('list')}
            style={[styles.button, viewMode === 'list' && styles.activeButton]}>
            {/* <Text style={styles.buttonText}>List</Text> */}
            <Ionicons name="list" size={20} color="#d5d5d5" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={
          viewMode === 'grid' ? styles.scrollAreaGrid : styles.scrollAreaList
        }>
        {users.map((user, i) => {
          return (
            <View
              key={i}
              style={
                viewMode === 'grid' ? styles.userCardGrid : styles.userCardList
              }>
              <Image style={styles.image} source={user.image} />
              {viewMode === 'grid' && (
                <Text style={styles.name}>{user.name}</Text>
              )}
              {viewMode === 'list' && (
                <View style={styles.listInfo}>
                  <Text style={styles.name}>{user.name}</Text>
                  <View style={styles.listInfoItem}>
                    <View style={styles.microImageContainer}>
                      <Image
                        source={require('../../assets/call.png')}
                        style={styles.microImage}
                      />
                    </View>
                    <Text>+20 123 456 7890</Text>
                  </View>
                  <View style={styles.listInfoItem}>
                    <View style={styles.microImageContainer}>
                      <Image
                        source={require('../../assets/dollar.png')}
                        style={styles.microImage}
                      />
                    </View>
                    <Text>$802,828,61</Text>
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
