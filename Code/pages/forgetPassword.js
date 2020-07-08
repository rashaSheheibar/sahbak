import React from 'react';
import { StyleSheet, Text,View,TextInput} from 'react-native';
import { Icon} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-simple-toast';

export default class ForgetPass extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        forgetPassUrl: "https://jobus.herokuapp.com/users/forget",
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
      this.onFetchForgrtPass();
    }

    async onFetchForgrtPass() {
      var data = { 
        email:this.state.emailAddress,     
      };
      try {
        return fetch(this.state.forgetPassUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then((response) => response.json())
          .then((responseJson) => {
            Toast.show("יאללה, לאשר אותנו במייל ונתחיל לרוץ במידה ולא קיבלתם מייל - מומלץ לבדוק בתיבת הספאם", Toast.LONG);
            this.props.navigation.navigate("SingIn")
            return responseJson;  
          })
          .catch((error) => {
            Toast.show("המייל לא נכון", Toast.LONG);
          });
      } catch (error) {
  
      }
    }
  
  render() {
      return (
       
        <View style={styles.container}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
            locations={[0, 0.1, 1]}
            colors={['#00f4ff', '#00fef3', '#223dc7']}
            style={styles.linearGradient, { flex: 1 }}>   
              <View style={styles.EnterEmailView}>
                <Text style={styles.TxtStyle}>הכניס\י מייל לשחזור סיסמא  </Text>
                <View style={styles.EmailView}>
                    <TextInput  
                        placeholder = " מייל: "  
                        size={8} placeholderTextColor = "gray" 
                        style={styles.textInputStyle} 
                        underlineColorAndroid='transparent' 
                        onChangeText={(text) => this.validate( text,"Email")} /> 
               </View>
              </View>
              <View style={styles.IconStyle}>
                <Icon size={30} name='done'  color='#d436ab' onPress={this.ForgetPassword.bind(this)} />
              </View>
            </LinearGradient>
      </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {flex: 1},
    textInputStyle:{padding:0,textAlign:'right'},
    TxtStyle:{fontSize: 19,textShadowOffset: { width: 1, height: 4 },textShadowColor: '#0a49fb',fontWeight: 'bold',color: '#ffffff',textAlign:"center",padding: 10},
    IconStyle:{paddingTop:40,paddingStart:15,alignItems:'center'},
    EnterEmailView:{marginTop:'45%',alignItems:'center'},
    EmailView:{padding:15,width:'85%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'},

})