import {
  AccountsScreen,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  UtilsScreen,
} from '../screens';
import {LoginScreen} from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Transfer from '../screens/Transfer/Transfer';
import HomeStacks from './HomeStacks';
import TransferStacks from './TransferStacks';

export const Navigations = [
  {
    name: 'transfer',
    component: TransferStacks,
  },
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
