import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import LoginPageC from '../components/Pages/LogIn'
import HotJobC from '../components/Pages/HotJobs'


const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPageC,
  },
  HotJobPage:{
    screen:HotJobC
  }
},{
  initialRouteName: 'LoginPage',
})
/*
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
*/
export default createAppContainer(AppNavigator);