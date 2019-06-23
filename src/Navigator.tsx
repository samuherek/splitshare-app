import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import TabBarIcon from './components/TabBarIcon';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AuthLoadingPage from './pages/AuthLoadingPage';
import BillPage from './pages/BillPage';
import NewBillPage from './pages/NewBillPage';

const DrawerNavigator = createDrawerNavigator({
  NewBill: {
    screen: NewBillPage,
    navigationOptions: {
      title: 'awesome',
    },
  },
});

const HomeStack = createStackNavigator({
  Home: HomePage,
  // Bill: BillPage,
});

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Dashboard',
  // tabBarVisible: navigation.state.index === 0,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
});

const SettingsStack = createStackNavigator({
  Settings: SettingsPage,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const TabsNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
});

const TabsStack = createStackNavigator({
  Tabs: {
    screen: TabsNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoadingPage,
      // App: TabsNavigator,
      App: createStackNavigator({
        Tabs: {
          screen: TabsStack,
          navigationOptions: {
            header: null,
          },
        },
        Drawer: DrawerNavigator,
        Bill: BillPage,
      }),
      Auth: createSwitchNavigator({
        Register: RegisterPage,
        Login: LoginPage,
      }),
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
