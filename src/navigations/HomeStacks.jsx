import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountsScreen,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  UtilsScreen,
} from '../screens';
import {View} from 'react-native';
import {TopBar} from '../components';

const routes = [
  {
    name: 'home',
    component: HomeScreen,
  },
  {
    name: 'accounts',
    component: AccountsScreen,
  },
  {
    name: 'cards',
    component: CardsScreen,
  },
  {
    name: 'utils',
    component: UtilsScreen,
  },
  {
    name: 'history',
    component: HistoryScreen,
  },
];

const Stack = createNativeStackNavigator();

const HomeStacks = () => {
  return (
    <View style={{flex: 1}}>
      <TopBar />
      <Stack.Navigator>
        {routes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={{headerShown: false}}
          />
        ))}
      </Stack.Navigator>
    </View>
  );
};

export default HomeStacks;
