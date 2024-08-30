import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../styles/components/Navigator.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HistoryScreen} from '../screens';
import HomeStacks from '../navigations/HomeStacks';
import TransferStacks from '../navigations/TransferStacks';
import MapScreen from '../screens/MapScreen';
import BeneficiaryStacks from '../navigations/BeneficiaryStacks';
import {ThemeContext} from '../ThemeContext';

export const Tab = ({navigation}) => {
  // const navigation = useNavigation(); // Use the hook to get navigation object
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({children, onPress, isActive}) => (
    <TouchableOpacity
      style={
        isActive
          ? styles.activeNavBtn
          : [styles.navBtn, {backgroundColor: theme.cardBackground}]
      }
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.navigator, {backgroundColor: theme.background}]}>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 90,
            padding: 5,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            backgroundColor: theme.background,
            justifyContent: 'center', // Centers the content vertically
          },
          tabBarItemStyle: {
            flex: 1, // Ensures the items are evenly distributed
            alignItems: 'center', // Centers items horizontally
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
            }

            return (
              <Ionicons
                name={iconName}
                size={45}
                color={focused ? '#eee' : '#B7B7B7'}
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
          component={TransferStacks}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="beneficiaries"
          component={BeneficiaryStacks}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="location"
          component={MapScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </View>
  );
};
