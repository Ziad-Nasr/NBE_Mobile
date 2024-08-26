import DrawerNavigator from '../components/Drawer';
import {Tab} from '../components/Tab';
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
    name: 'login',
    component: LoginScreen,
  },
  {
    name: 'signup',
    component: SignupScreen,
  },
  {
    name: 'drawer',
    component: DrawerNavigator,
  },
  {
    name: 'tab',
    component: Tab,
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
