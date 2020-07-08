
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import singIn from '../pages/singIn';
import profile from '../pages/profile';
import mainPage from '../pages/mainPage';
import courses from '../pages/courses';
import favorit from '../pages/favorit';
import aboutUs from '../pages/aboutUs';
import singUp from '../pages/singUp';
import DemoPage from '../pages/DemoPage';
import forgetPassword from '../pages/forgetPassword';
import jobDetails from '../pages/jobDetails';
import searhJobResults from '../pages/searhJobResults';
import chatboot from '../pages/chatboot';
import saveJobs  from '../pages/saveJobs';
import sucssesSendJob from '../plugins/sucssesSendJob';

const AppNavigator = createStackNavigator({ 
  SingIn:{
    screen: singIn
  },
  Profile:{
    screen: profile
  },
  Courses:{
    screen: courses
  },
  Favorit:{
    screen: favorit
  },
  SucssesSendJob:{
    screen: sucssesSendJob
  },
  SaveJobs:{
    screen: saveJobs
  },
  SearhJobResults:{
    screen: searhJobResults
  },
  JobDetails:{
    screen: jobDetails
  },
  ForgetPassword:{
    screen: forgetPassword
  },
  AboutUs:{
    screen: aboutUs
  },
  SingUp:{
    screen: singUp
  },
  MainPage:{
    screen: mainPage
  },
  Chatboot:{
    screen: chatboot
  },
  DemoPage:{
    screen: DemoPage
  }
},{ 
    initialRouteName: 'SingIn', 
    mode: 'modal',
    headerMode: 'none', 
  }
)

export default createAppContainer(AppNavigator);