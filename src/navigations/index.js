import {
  AccountsScreen,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  UtilsScreen,
} from '../screens';
import AddBeneficiary from '../screens/AddBeneficiary';
import {LoginScreen} from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';
import SignupScreen from '../screens/SignupScreen';
import Transfer from '../screens/Transfer/Transfer';
import HomeStacks from './HomeStacks';
import TransferStacks from './TransferStacks';

export const Navigations = [
  {
    name: 'signup',
    component: SignupScreen,
  },
  {
    name: 'login',
    component: LoginScreen,
  },
  {
    name: 'homeStacks',
    component: HomeStacks,
  },
  {
    name: 'home',
    component: HomeScreen,
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
