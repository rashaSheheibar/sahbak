import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,SafeAreaView ,ScrollView } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { Navigator } from 'react-navigation';
import {Logo} from './Logo';
import {Topics} from './Topics';
import {HotJobs} from './HotJobs';
export class RegistrationSuccessful extends React.Component {
    constructor(props){
        super(props)
    };
    render() {
        return (
            
            <ScrollView style={styles.container}> 
              <LinearGradient
                    colors={['rgba(0, 120, 255,0.9)', 'transparent']}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      height: 2000,
                    }}
            />
            
            <View style={styles.Header}>
                <View style={styles.closeIcon}>
                                <Icon
                                  size={35}  
                                  name='close'
                                  color='#052172' />
                </View> 
                <View style={{width:"33%"}}></View>
                <Logo/>
           </View> 
           <View style={{width: '100%', height: 40,alignItems:"center", padding:20}}>
                <Text style={styles.TitleDescribtion} >ההרשמה בוצעה בהצלחה </Text>
          </View>
          <View style={{marginStart:20,marginEnd:40,height:30,alignItems:"center",alignContent:'center',padding:15}}>
                <Text style={styles.titleInfo}>
                ברוכים הבאים למאגר המשרות 
                </Text>   
          </View>
          <View style={{marginStart:40,marginEnd:50,height:30,alignItems:"center",alignContent:'center',padding:8}}>
                <Text style={styles.titleInfo}>
                הענק של סחבק!
                </Text>   
          </View>
          <View style={styles.menuIcon}>
                        <Icon
                        size={30}  
                        name='done'
                        color='#d436ab' />
          </View> 

           </ScrollView>
        
        );
      }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#223dc7', 
        marginTop: Constants.statusBarHeight, 
      },
    Header:{
        width:'100%',
        height:90,
        paddingTop:10,
        flexDirection: 'row',
          
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
     scrollView: {
       
        marginHorizontal: 0,
      },

});

