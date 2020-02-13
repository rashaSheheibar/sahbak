import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import LoginPageC from '../components/Pages/LogIn';
import SuccessfulConectC from '../components/Pages/SuccessfulConect';
import HotJobC from '../components/Pages/HotJobs';
import ConectC from '../components/Pages/Conect';
import CoursesC from '../components/Pages/Courses';
import FavoritsC from '../components/Pages/Favorits';
import ContactUsC from '../components/Pages/ContactUs';
import FacebookAndWatsaapC from '../components/Plugins/FacebookAndWatsaap';
import SearchJobLocationC from '../components/Pages/SearchJobLocation';
import locationSearchP from '../components/Pages/locationSearch';
import ProfilePartp from '../components/Plugins/ProfilePart';
import ForgetPassC from '../components/Pages/ForgetPass';

const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPageC,
  },
  HotJobPage:{
    screen:HotJobC
  },
  CoursesPage:{
    screen:CoursesC
  },
  ContactUsPage:{
    screen:ContactUsC
  },
  FavoritsPage:{
    screen:FavoritsC
  },
  SuccessfulConectPage:{
    screen:SuccessfulConectC
  },
  locationSearchPPage:{
    screen:locationSearchP
  },
  SearchJobLocationCPage: {
    screen: SearchJobLocationC,
  },
  ProfilePartpPage: {
    screen: ProfilePartp,
  },
  ForgetPassPage: {
    screen: ForgetPassC,
  },
  ConectPage:{
    screen:ConectC
  }
},{
  initialRouteName: 'ConectPage',
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