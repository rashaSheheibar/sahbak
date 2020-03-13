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

export default class SuccessfulConect extends React.Component {
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
           
           <LogoWithCloseP/>
          <ScrollView style={styles.scrollView}> 
              <View style={{width: '100%', height: 40,alignItems:"center", padding:20}}>
                    <Text style={styles.TitleDescribtion} >ההרשמה בוצעה בהצלחה </Text>
              </View>
              <View style={{marginStart:10,marginEnd:20,height:30,alignItems:"center",alignContent:'center',padding:15}}>
                    <Text style={styles.titleInfo}>
                    ברוכים הבאים למאגר המשרות 
                    </Text>   
              </View>
              <View style={{marginStart:10,marginEnd:20,height:30,alignItems:"center",alignContent:'center',padding:8}}>
                    <Text style={styles.titleInfo}>
                    הענק של סחבק!
                    </Text>   
              </View>
              <View style={styles.menuIcon}>
                            <Icon
                            size={30}  
                            name='done'
                            color='#d436ab' 
                            onPress={()=>{this.props.navigation.navigate("HotJobPage")}}
                            
                            />
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
      scrollView: {
     
        marginHorizontal: 0,
      },
      closeIcon:{
        width:"10%",
        fontSize: 21.7,
        fontWeight:'normal',
        letterSpacing:8.79,
        textAlign:"left",
        alignItems:"flex-start",
        
    }, 
    TitleDescribtion:{
        alignItems:'center',
        alignContent:'center',
        fontSize: 15,
        color:'#052172',
        
      },
    titleInfo:{
        color:'white',
        fontWeight:'bold',
        fontWeight:"bold",
        fontSize: 20,
    },
    menuIcon:{
        padding:50,
        alignItems:"center",
        width: "100%",
    },
    hotjobs:{
        flex:1,
        width:'100%',
        paddingStart:10, 
           
      },
    topics:{
        height:5,
        
      },
      
})