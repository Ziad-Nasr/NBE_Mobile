import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddBeneficiary from '../screens/AddBeneficiary';
import {AccountsScreen} from '../screens';
import { View } from 'react-native';

const stack = createNativeStackNavigator();

const routes = [
  {
    name: 'Beneficiary',
    component: AccountsScreen,
  },
  {
    name: 'AddBeneficiary',
    component: AddBeneficiary,
  },
];

const BeneficiaryStacks = () => {
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

export default BeneficiaryStacks;
