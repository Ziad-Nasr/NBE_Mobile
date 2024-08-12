import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import CardsScreen from '../screens/CardsScreen';
import UtilsScreen from '../screens/UtilsScreen';
import HistoryScreen from '../screens/HistoryScreen';

import {TopBar} from './TopBar'; // Import TopBar

const Drawer = createDrawerNavigator();

const ScreenWrapper = ({children, navigation}) => (
  <>
    <TopBar navigation={navigation} />
    {children}
  </>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home">
        {props => (
          <ScreenWrapper navigation={props.navigation}>
            <HomeScreen {...props} />
          </ScreenWrapper>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Accounts">
        {props => (
          <ScreenWrapper navigation={props.navigation}>
            <AccountsScreen {...props} />
          </ScreenWrapper>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Cards">
        {props => (
          <ScreenWrapper navigation={props.navigation}>
            <CardsScreen {...props} />
          </ScreenWrapper>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Utils">
        {props => (
          <ScreenWrapper navigation={props.navigation}>
            <UtilsScreen {...props} />
          </ScreenWrapper>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="History">
        {props => (
          <ScreenWrapper navigation={props.navigation}>
            <HistoryScreen {...props} />
          </ScreenWrapper>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
