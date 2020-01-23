import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Logo from '../Pages/Logo'
import SearchEng from '../Plugins/SearchEngine'
import Footer from '../Plugins/Footer'
import TopicC from '../Plugins/TopicWithoutPic'
import HotJobs from './HotJobs';
import HotJobsPartp from '../Plugins/PartHotj'
import MenuC from '../Plugins/Menu'
import LogoWithCloseP from '../Plugins/LogoWithClose'
import { StackNavigator } from 'react-navigation';

export default class Courses extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          value: false,
       }    
    }
    OnPresHere(){
      this.setState({
        value:!this.state.value})
    }
    render() {
        return (
         <View style={styles.container}>
            <LinearGradient
                    colors={['rgba(0, 110, 255,0.9)', 'transparent']}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "100%",
                    }}
                  /> 
            <View style={{ width:'100%',height:60,flexDirection: 'row-reverse'  }}>
                
                 <View style={{width:'60%', justifyContent: 'flex-end' }} >
                    <Logo/>

                </View>
                
                <View style={{width:'40%', justifyContent: 'flex-start' }} >      
                        <MenuC/>
               </View>

              
                
            </View>
          
            <ScrollView>
            <View style={{width: '100%', height: 40,alignItems:"center",paddingTop:10}}>
                <Text style={styles.TitleDescribtion} >קורסים </Text>
            </View>
            <View style={{marginStart:60,marginEnd:70,height:40,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172' }}>
                     לפעמים משרת החלומות דורשת מאיתנו מאמץ נוסף כדי שנוכל להתקבל אליה.
                </Text>   
            </View>
            <View style={{marginStart:60,marginEnd:70,height:50,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172'}}>
                     סחבק כאן כדי להגשים לך את המשאלה עם רשימת הקורסים האולטימטיבית!
                </Text>   
            </View>
         
            <TopicC/>
            <HotJobsPartp/>
            <Footer/>

            </ScrollView>
            
           

        </View>
       
          
        );
    }
  
  }
  
  
const styles = StyleSheet.create({
     
      container: {
        flex: 1,
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
})