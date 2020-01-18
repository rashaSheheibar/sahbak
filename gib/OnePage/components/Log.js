import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { Navigator } from 'react-navigation';

export class Log extends React.Component {
    constructor(props){
        super(props)
    };
    render() {
        return (
        <View style={styles.container}>
                  
            <Image
                style={{ width:"100%",flex:1,padding:0,alignItems:'center',position: 'absolute'}}
                source={require('./images/background1.png')}/>
            <View style={{ flexDirection: 'row', flex:1, margin: 10 }}>
                <View style={styles.SocialIconFacebook}>
                            <SocialIcon
                                iconSize={15}
                                raised={false}
                                iconColor='white'
                                type='facebook'
                                            />
                </View> 
                <View style={styles.WatsappIcon}>
                            <SocialIcon
                                iconSize={30}
                                raised={false}
                                iconColor='green'
                                type='whatsapp'
                                            />
                </View> 
                <View>
                    <Text style={styles.textInfo}>נהנים ? ספרו לחבריכם!</Text>
                </View>
                
            </View> 
           
        </View>   


 
 

             );
        }
    }
    
    
         
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor:"#252bb0",
    },
    textInfo:{
        alignItems:"flex-start",
        padding:50,
        color:"#052172",
        
    },    
    SocialIconFacebook:{
        padding:35,
        width:'10%', 
        alignItems:"flex-start",
        fontWeight:'normal',
        color:'#3e84ff' ,
        
    },  
    WatsappIcon:{
        padding:20,
        width:'10%',
        alignItems:"flex-start",
        fontWeight:'normal',
        color:'#3e84ff' ,
        
    },
    
})
    