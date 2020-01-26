import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Image ,Alert, View,FlatList, TextInput,ScrollView,SafeAreaView  } from 'react-native';
import { Icon,SocialIcon,Button,CheckBox  } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import LogoWithCloseP from '../Plugins/LogoWithClose'
import HotJobsPartp from '../Plugins/PartHotj'
import Footer from '../Plugins/Footer'
import TopicC from '../Plugins/TopicWithoutPic'

import { StackNavigator } from 'react-navigation';

export default class LogIn extends React.Component {
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
                  colors={['rgba(0, 120, 255,0.9)', 'transparent']}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 2000,
                  }}
                />
        <LogoWithCloseP/>
        <ScrollView style={styles.scrollView}> 
            <Text style={styles.TxtStyle}>התחבר</Text>
            <View style={{paddingTop:10,width:"100%", flexDirection: "row",padding:5,paddingStart:'10%',alignContent:"space-between",alignItems:"center"}}>
                  <View style={{backgroundColor:"#0a49fb",width:"40%",height:40,alignItems:"center",borderWidth: 1, borderRadius:30,borderColor: '#0a49fb'}}>
                      <Text style={{color:'white',padding:5}} 
                            onPress={()=>{this.props.navigation.navigate("ConectPage")}}
                      >  משתמש קיים </Text>
                  </View>
                  <View style={{width:"10%"}} ></View>
                  <View style={{backgroundColor:"white",width:"40%",height:40,alignItems:"center",borderWidth: 1, borderRadius:30,borderColor: 'white'}}>
                      <Text style={{color:'#052172',padding:5}}
                            onPress={()=>{this.props.navigation.navigate("LoginPage")}}
                      
                      >משתמש חדש </Text>
                  </View>
      
                    <View style={{width:"10%"}} ></View>
             </View>
             <View style={{width:"100%", flexDirection: "column",padding:10,alignContent:"space-between",alignItems:"center"}}>
                  <View style={styles.ViewContactFacebook}>
                      <Text style={styles.ConectToFacebookAndGoogle} >התחבר דרך  f</Text>
                  </View>
                  <View style={{padding:6}} ></View>
                  <View style={styles.ViewContactGoogle}>
                      <Text style={styles.ConectToFacebookAndGoogle} >התחבר דרך  G</Text>
                  </View>
                  <View style={{padding:6}}>
                  </View>
                  <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                      <TextInput 
                        placeholder = " שם: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = " מייל: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = "גיל: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = "זמינות לעבודה:" 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = " איפה בא לך לעבוד:" 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {alignItems:'flex-end',padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = ":סיסמא" 
                        size={8}
                        placeholderTextColor = "gray"
                        secureTextEntry={true}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = "וודא\י סיסמה:" 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                 
                 
                  <View style={{width:"85%",height:60, flexDirection: "row",padding:5,alignItems:"flex-start"}}>
                      <Text style={{color:"white"}}>
                      בהרשמה אני מאשר\ת קבלת משרות למייל ולנייד ואת תנאי השימוש באתר (אנחנו נעבוד בשבילך) 
                      </Text>
                      <CheckBox 
                         left 
                         checked={this.state.value}
                         onPress={() => this.OnPresHere()}
                       />
                  </View>


                  <View style={{padding:6}}></View>
                  <View style={{width:"50%",height:40,padding:10,alignItems:"center",borderWidth: 1, borderRadius:30,borderColor: '#16fcef'}}>
                      <Text style={{color:'white',fontWeight:"bold"}}
                            onPress={()=>{this.props.navigation.navigate("SuccessfulConectPage")}}
                      
                      > יאללה, תרשמו אותי   </Text>
                  </View>
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
     
    },
    scrollView: {
     
      marginHorizontal: 0,
    },
    Header:{
      width:'80%',
      height:70,
      paddingStart:0,
      alignItems:"flex-end",
      backgroundColor:"red"
    },
    ViewTextLogIn:{
      flex:1,
      padding:15,
      alignItems:'center',
    },
    closeIcon:{
      width:"10%",
      fontSize: 21.7,
      fontWeight:'normal',
      letterSpacing:8.79,
      textAlign:"left",
      alignItems:"flex-start",
      
    },
    LogInV:{
      flex:1,
      alignItems:"flex-end"
  
    },
    TextLogIn:{
      fontWeight:'bold',
      color:'white',
    },
    ConectToFacebookAndGoogle:{
      flex:1,
      padding:6,
      color:'white',
      fontWeight:'bold',
    },
    ViewContactFacebook:{
      padding:8,
      width:'85%',
      height:50,
      alignItems:"center",
      alignContent:"center",
      borderWidth: 1,
      borderRadius:30,
      borderColor: '#252bb0',
    }, 
    ViewContactGoogle:{
      padding:2,
      width:'85%',
      height:50,
      alignItems:"center",
      alignContent:"center",
      borderWidth: 1,
      borderRadius:30,
      borderColor: '#fa5353',
    },
    
    TextInputInfo:{
      width:'80%',
      height:40,
      alignItems:"center",
      alignContent:"flex-end",
      borderWidth: 1,
      borderRadius:20,
      borderColor: 'white',
    },
  
    textInputStyle:{
      padding:0,
    },
    TxtStyle:{
      fontSize: 19, 
      textShadowOffset: { width: 1, height: 4 },
      textShadowColor: '#0a49fb',
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign:"center",
      padding: 10,
    },

   
})
