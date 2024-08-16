import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OTP from '../screens/Transfer/OTP';
import Transfer from '../screens/Transfer/Transfer';
import {View} from 'react-native';
import {TopBar} from '../components';

const routes = [
  {
    name: 'transfer',
    component: Transfer,
  },
  {
    name: 'OTP',
    component: OTP,
  },
];

const stack = createNativeStackNavigator();

const TransferStacks = () => {
  return (
    <View style={{flex: 1}}>
      <stack.Navigator>
        {routes.map((route, index) => (
          <stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={{headerShown: false}}
          />
        ))}
      </stack.Navigator>
    </View>
  );
};

export default TransferStacks;
