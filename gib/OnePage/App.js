import React ,{component, Component} from 'react';
import { Platform , StyleSheet, Text,Image,CheckBox, Button, Alert,TextInput,FlatList, View,ScrollView , SafeAreaView,createAppContainer } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
import {SearchEngine} from './components/SearchEngine';
import {Topics } from './components/Topics';
import {HotJobs} from './components/HotJobs';
import {Footer} from './components/Footer';
import {LogIn} from './components/LogIn';
import {Courses} from './components/Courses';
import {Favorits} from './components/Favorits';
import {Log} from './components/Log';
import {RegistrationSuccessful} from './components/RegistrationSuccessful'
export default function App() {
 
  return (
    
    //https://reactnavigation.org/docs/en/next/stack-navigator.html#docsNav
    <SafeAreaView style={styles.container}>
    <LinearGradient
        colors={['rgba(0, 120, 255,0.8)','transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 500,
        }}
      />
      <View style={styles.Header}>
            <Menu/>
            <Logo/>
      </View>
      <View style={{width: '100%', height: 40,alignItems:"center"}}>
          <Text style={styles.TitleDescribtion} >מועדפת </Text>
      </View>
      <View style={{marginStart:80,marginEnd:70,height:30,alignItems:"center",alignContent:'center'}}>
          <Text style={{color:'#052172',fontWeight:'bold'}}>
          לא רק סחבק – גם צה"ל דואג ומפרגן 
          </Text>   
      </View>
      <View style={{marginStart:80,marginEnd:70,height:30,alignItems:"center",alignContent:'center'}}>
          <Text style={{color:'#052172',fontWeight:'bold'}}>
          לכם מענק שחרור מפחיד.
          </Text>   
      </View>

      <View style={{marginStart:80,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
        <Text style={{color:'#052172',fontWeight:'bold'}}>
        איך מקבלים אותו? מה עושים איתן? 
          </Text>   
      </View>
      <View style={{marginStart:80,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
        <Text style={{color:'#052172',fontWeight:'bold'}}>
        מה האופציות?
          </Text>   
      </View>
      <View style={{marginStart:80,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
        <Text style={{color:'#052172',fontWeight:'bold'}}>
        שימו לב,סחבק ממליץ...
          </Text>   
      </View>
      <HotJobs/>

      
    
      <Footer/>
    </SafeAreaView>
            
     
   
  
    //Home page:
/*
    <SafeAreaView style={styles.container}>
        <LinearGradient
            colors={['rgba(0, 244, 255,0.8)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 700,
            }}
          />
 
          <View style={styles.Header}>
            <Menu/>
            <Logo/>
          </View>  
          <View style={styles.Searshengine}>
            <SearchEngine/>
          </View>
          
          <View style={styles.topics} >
            <Topics/>
          </View>

          <View style={styles.hotjobs} >
            <HotJobs/>
          </View>
        
          <View style={styles.Footer}>
            <Footer/>
          </View>

    </SafeAreaView>
 
*/
    
    );
  }

const styles = StyleSheet.create({
  
  // Home page:
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems:"center",
    alignContent:'center',
  },
  
  Header:{
    width:'100%',
    height:90,
    paddingTop:10,
    flexDirection: 'row',
   
      
  },
  TitleDescribtion:{
    alignItems:'center',
    alignContent:'center',
    fontSize: 17,
    color:'white',
    fontWeight:'bold',
  },
  CousresDescription:{
    padding:30,
    paddingStart:70,
    paddingEnd:100,
    height:900,
    alignItems:'center',
  
  }
 /*
  Header:{
    width:'100%',
    height:90,
    paddingTop:33,
    flexDirection: 'row',
      
  },
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#223dc7',  
  },
  Searshengine:{
    height:370,
    paddingStart:0, 
  },
  topics:{
    height:5,
    
  },
  hotjobs:{
    flex:1,
    width:'100%',
    paddingStart:-5, 
       
  },
  Footer:{
    height:60,
  },

*/


});



