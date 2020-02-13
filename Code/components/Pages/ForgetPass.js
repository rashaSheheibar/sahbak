import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { StackNavigator } from 'react-navigation';

export default class ForgetPass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        emailAddress: "",           
    } 
  }  
  
  validate=(text,type)=>{
    if(type=='Email'){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)){
        this.state.emailAddress=text;
      }else{
        this.state.emailAddress=null;   
      }
    }
  }
  ForgetPassword(){
    console.log("rasha")
    this.onFetchForgrtPass();
  }
  async onFetchForgrtPass() {
    var data = { 
      email:this.state.emailAddress,     
      };
      try {
       let response = await fetch(
        "https://jobus.herokuapp.com/users/forget",
        {
          method: "POST",
          headers: {
           "Accept": "application/json",
           "Content-Type": "application/json"
          },
         body: JSON.stringify(data)
       }
      );
       
      if (response.status >= 200 && response.status < 300 ){ 
        alert(" תבדוק\תבדקי את המייל ")
        this.props.navigation.navigate("ConectPage")

      }else {  
        alert(" המייל לא נכון ");
      
      }
      
     } catch (errors) {
    
       alert(errors);
      } 
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

            <View style={{padding:'30%'}}></View>
            <Text style={styles.TxtStyle}>הכנס\י את האיימל</Text>
            <View style={ {padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = " מייל: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.validate( text,"Email")}
                     
                      />
            </View>
            <View style={{paddingTop:15,paddingStart:15,alignItems:'flex-start' }}>
            <Icon
                  size={30}
                  name='done'
                  color='#d436ab'
                  onPress={this.ForgetPassword.bind(this)}   
                   />
            </View>



    </View>
    
   
   
    );
}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
       
    },
    textInputStyle:{
        padding:0,
        textAlign:'right',
        
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