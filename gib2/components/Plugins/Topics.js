import React ,{component} from 'react';
import { Platform ,SafeAreaView, StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView,ToastAndroid } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Footer from '../Plugins/Footer'
import TopicC from '../Plugins/TopicWithoutPic'
import HotJobsPartp from '../Plugins/PartHotj'
import LogoWithCloseP from '../Plugins/LogoWithClose'
import { StackNavigator } from 'react-navigation';


export default class Topics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          value: false,
      }   
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.SearchIcon}>
                    <Image
                        style={{ flex: 1 }}
                        source={require('../../assets/images/sachback.png')} />
                </View>
                <View style={styles.Button}>
                    <View style={styles.ButtonDiscription}>
                        <Text style={styles.textButtom}>תנו לסחבק לעבוד בשבילכם</Text>
                    </View>
                </View>
                <View style={{ flex: 1,fontSize:18, flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white',marginTop:20 }}>
                    <View style={styles.TextStyle}>
                        <Text style={styles.TextDesctiption}
                              onPress={()=>{this.props.navigation.navigate("HotJobPage")}}
                        >  משרות לפי תחום  </Text>
                    </View>

                    <View style={styles.TextStyle}>
                        <Text style={styles.TextDesctiption}
                              onPress={()=>{this.props.navigation.navigate("SearchJobLocationCPage")}}
                        >  משרות לפי מיקום</Text>
                    </View>
                    <View style={styles.TextStyle}>
                        <Text style={styles.TextDesctiption}
                              onPress={()=>{this.props.navigation.navigate("HotJobPage")}}
                        > משרות חמות</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:1,
        flexDirection:'column',
        
    },
    SearchIcon:{
        padding:1,
        alignItems:'center',
      },
      textButtom:{ 
        padding:2,
        color:'#052172',
        
        textAlign:"center",
        alignItems:"center",
        fontSize: 16,
        fontWeight:'bold'
      },
    ButtonDiscription:{
        
        backgroundColor:"#00fef3",
        alignItems:"center",
        paddingTop:5,
        
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        alignContent:'center',
        borderRadius: 15,
      },
      Button:{
        alignItems:"center",
        position:'absolute',
        textShadowOffset: { width: 4, height: 1 },
        flex:1,
        top: 80,
        bottom: 0,
        left: 0,
        right: 0,
      },
    TextStyle: {
        width: '33.3%',
        
        padding: 10,
    },
    TextDesctiption: {
        fontWeight: '800',
        color: "#0A49FB",
        fontSize: 14,
        textAlign:"center",
        marginTop:10,
        marginBottom:10,
        fontWeight:"bold"
    },



})