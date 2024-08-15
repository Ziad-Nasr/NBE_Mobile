import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../styles/components/Navigator.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AccountsScreen,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  UtilsScreen,
} from '../screens';
import HomeStacks from '../navigations/HomeStacks';
import {TopBar} from './TopBar';

export const Tab = ({navigation}) => {
  // const navigation = useNavigation(); // Use the hook to get navigation object
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({children, onPress, isActive}) => (
    <TouchableOpacity
      style={isActive ? styles.activeNavBtn : styles.navBtn}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );

  return (
    <View style={styles.tabContainer}>
      <TopBar />
      <View style={styles.navigator}>
        <Tab.Navigator
          initialRouteName="home"
          screenOptions={({route}) => ({
            tabBarStyle: {
              height: 90,
              padding: 5,
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            },
            tabBarLabelStyle: {
              fontSize: 10,
              color: route.focused
                ? styles.activeNavText.color
                : styles.navText.color,
            },
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'beneficiaries') {
                iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'transfer') {
                iconName = focused ? 'paper-plane' : 'paper-plane-outline';
              } else if (route.name === 'location') {
                iconName = focused ? 'location' : 'location-outline';
              } else if (route.name === 'airPay') {
                iconName = focused ? 'git-compare' : 'git-compare-outline';
              }

              return (
                <Ionicons
                  name={iconName}
                  size={45}
                  color={focused ? '#fff' : '#B7B7B7'}
                />
              );
            },
            tabBarButton: props => (
              <CustomTabBarButton
                {...props}
                isActive={props.accessibilityState.selected}
              />
            ),
          })}>
          <Tab.Screen
            name="home"
            component={HomeStacks}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="transfer"
            component={CardsScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="beneficiaries"
            component={AccountsScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="location"
            component={UtilsScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="airPay"
            component={HistoryScreen}
            options={{headerShown: false}}
          />
        </Tab.Navigator>

        {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
        <View style={styles.activeNavBtn}>
          <MaterialCommunityIcons
            name="home"
            style={styles.activeNavIcon}
            size={25}
          />
          <Text style={styles.activeNavText}>Home</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('transfer')}>
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="bank-transfer"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Transfer</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('beneficiaries')}>
        <View style={styles.navBtn}>
          <Icon name="people" style={styles.navIcon} size={25} />
          <Text style={styles.navText}>Benef.</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('atms')}>
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>ATMs</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('airPay')}>
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="cellphone-nfc"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Air Pay</Text>
        </View>
      </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
};
