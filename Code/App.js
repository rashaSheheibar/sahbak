import React ,{component} from 'react';
import { Platform , StyleSheet, Text,Image, Button, Alert, View,ScrollView  } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
import {SearchEngine} from './components/SearchEngine';
import { Topics } from './components/Topics';
import {HotJobs} from './components/HotJobs';
import {Footer} from './components/Footer';

export default function App() {
  return (
  <View style={styles.container}>
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
      
  </View>
  );
}

const styles = StyleSheet.create({
  Header:{
    width:'100%',
    height:90,
    paddingTop:25,
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
});