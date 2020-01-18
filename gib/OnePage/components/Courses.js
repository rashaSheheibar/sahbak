import React ,{component, Component} from 'react';
import { Platform , StyleSheet, Text,Image,CheckBox, Button, Alert,TextInput, View,ScrollView , SafeAreaView } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigator } from 'react-navigation';
import Constants from 'expo-constants';


export class Courses extends React.Component {
    constructor(props){
        super(props)
    };
    render() {
        return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
          colors={['rgba(0, 120, 255,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <View style={styles.Header}>
              <Menu/>
              <Logo/>
        </View>
        <View style={{width: '100%', height: 40,alignItems:"center"}}>
            <Text style={styles.TitleDescribtion} >קורסים </Text>
        </View>
        <View style={{marginStart:80,marginEnd:70,height:50,alignItems:"center",alignContent:'center'}}>
            <Text style={{color:'#052172'}}>
            לפעמים משרת החלומות דורשת מאיתנו מאמץ נוסף כדי שנוכל להתקבל אליה.
            </Text>   
        </View>
        <View style={{marginStart:80,marginEnd:75,height:50,alignItems:"center",alignContent:'center'}}>
          <Text style={{color:'#052172'}}>
            סחבק כאן כדי להגשים לך את המשאלה עם רשימת הקורסים האולטימטיבית!
            </Text>   
        </View>

        <HotJobs/>
        <Footer/>
    </SafeAreaView>
         
            );
        }
    }
const styles = StyleSheet.create({
      
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
  });
    