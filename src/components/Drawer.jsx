import React, {useContext, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import {AccountsScreen} from '../screens/AccountsScreen';
import CardsScreen from '../screens/CardsScreen';
import UtilsScreen from '../screens/UtilsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import {Image, StyleSheet, Switch, Text, TouchableOpacity} from 'react-native';
import {TopBar} from './TopBar'; // Import TopBar
import {Tab} from './Tab';
import {View} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {theme, isDarkMode, setIsDarkMode} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsDarkMode(prev => !prev);
    setIsEnabled(previousState => !previousState);
  };
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={{justifyContent: 'space-between', height: '100%'}}>
        <View>
          <View style={styles.drawerUpperLogin}>
            <Image
              source={require('../../assets/media/NBE_Bottom_Logo.png')}
              style={styles.drawerUpperLogo}
            />
            <TouchableOpacity
              style={styles.translateButton}
              onPress={() => {
                alert('Arabic Translation Soon');
              }}>
              <Text style={styles.translateButtonText}>AR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawerItems}>
            <CustomDrawerItem
              label="Account Summary"
              onPress={() => props.navigation.navigate('Home')}
            />
            <CustomDrawerItem
              label="Open Certificates & Deposits"
              onPress={() => props.navigation.navigate('Accounts')}
            />
            <CustomDrawerItem
              label={'Payement Services'}
              // onPress={() => setIsDarkMode(prevMode => !prevMode)}
            />
            <CustomDrawerItem
              label={'Cards Services'}
              // onPress={() => setIsDarkMode(prevMode => !prevMode)}
            />
            <CustomDrawerItem
              label={'Hard Token'}
              // onPress={() => setIsDarkMode(prevMode => !prevMode)}
            />
            <CustomDrawerItem
              label={'Offers'}
              // onPress={() => setIsDarkMode(prevMode => !prevMode)}
            />
            <CustomDrawerItem
              label={'Dark Mode'}
              mySwitch={true}
              isEnabled={isEnabled}
              toggleSwitch={toggleSwitch}
              onPress={() => setIsDarkMode(prevMode => !prevMode)}
            />
          </View>
        </View>
        <View style={{marginBottom: 40}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('login')}
              style={styles.itemContainer}>
              <View style={styles.redDrawerIcon}>
                <Ionicons name="power" size={13} color={'red'} />
              </View>
              <Text style={styles.redItemLabel}>Log Out</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userCardList}>
            <View
              style={[
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={styles.image}
                  source={require('../../assets/media/picture.jpg')}
                />
                <View style={[{marginLeft: 10}]}>
                  <Text style={[styles.name, {color: theme.primaryText}]}>
                    Ahmed Sami
                  </Text>
                  <Text style={{color: theme.secondaryText}}>
                    +20 123 456 7890
                  </Text>
                </View>
              </View>
              <Ionicons name="apps-outline" size={20} color={'black'} />
              <View style={styles.listInfoItem}></View>
            </View>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawerItem = ({
  label,
  onPress,
  icon,
  mySwitch,
  isEnabled,
  toggleSwitch,
}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.drawerIcon}>
        <Ionicons name="home" size={13} color={'black'} />
      </View>
      <Text style={styles.itemLabel}>{label}</Text>
    </TouchableOpacity>
    {mySwitch && (
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )}
  </View>
);

const DrawerNavigator = props => {
  const {theme} = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Optional: Hide header if you want a cleaner look
        drawerStyle: {
          backgroundColor: theme.background,
          width: 340,
        },
      }}>
      <Drawer.Screen name="Home" component={Tab} />
      <Drawer.Screen name="Accounts" component={AccountsScreen} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemLabel: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
  },
  redItemLabel: {
    fontSize: 18,
    marginLeft: 10,
    color: 'red',
    fontWeight: '600',
  },
  container: {
    flex: 1,
  },
  drawerItems: {
    marginTop: 20,
  },
  drawerIcon: {
    borderRadius: 6,
    backgroundColor: '#B7B7B7',
    padding: 6,
  },
  redDrawerIcon: {
    borderRadius: 6,
    backgroundColor: 'rgba(225, 7, 33, 0.2)',
    padding: 6,
  },
  drawerUpperLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  translateButtonText: {
    color: '#007236',
    fontWeight: '700',
  },
  drawerUpperLogo: {
    height: 40,
    width: 155,
  },
  translateButton: {
    backgroundColor: '#FFFFFF',
    height: 35,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCardList: {
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  listInfo: {
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  listInfoItem: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  microImageContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  microImage: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },

  name: {
    color: '#222222',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});
