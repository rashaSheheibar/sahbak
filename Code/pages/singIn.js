import React,{useRef} from 'react';
import { StyleSheet, Text, Alert,Image, View, TextInput, ScrollView, ToastAndroid,TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { SahbakDB } from '../SahbakDB/SahbakDB'
import Jobs from '../plugins/Jobs'
import { LoginAPI } from '../SahbakDB/LoginAPI'
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';

export default class SignIn extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      registerUrl: "https://jobus.herokuapp.com/users/login",
      ConfirmBtn: false,
      selected:1,
      Errors: {},
      sendingProccess: true,
      firstSingIn: false,
      firstSingIn:false
    }
    this.state.firstSingIn= true 
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state.userInfo = { email: "", password: "", }
    this.SignIn = this.SignIn.bind(this)
    
  }
  LoadUserInfo(){
    this.setState({'firstSingIn': true });
    this.DataBaseInstance = SahbakDB.getInstance()
    this.DataBaseInstance.GetUserInfo().then((result) => {
      const result1=result._array[0];
      
      if (result1!= undefined && (result1.Token != null || result1.Token != "")) {
        this.setState({ 'firstSingIn': false })
        
        this.props.navigation.navigate("MainPage")
        
      } else {
        this.setState({ 'firstSingIn': false })
      }
    })
  }
  
  componentDidMount() {
   this.LoadUserInfo()
  }

  goToTop = () => { ToastAndroid.show('Please Sing in first!', ToastAndroid.SHORT); this.scroll.scrollTo({ x: 0, y: 0, animated: true }); }

  validate = (text, type) => {
   
    if (type == 'email') {
     
    }
  }

  onPressSubmit() { this.onFetchLoginRecords(); }
  AlertFuntion(mainTitle, MsgBody, textBtn) { Alert.alert(mainTitle, MsgBody, [{ text: textBtn, onPress: () => console.log('Cancel Pressed'), style: 'cancel', },], { cancelable: false }); }
  _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(
        key,
        value
      );
    } catch (error) {
      // Error saving data
    }
  };
  SignIn() {
    this.setState({ sendingProccess: false })
    const ErrorsTemp = this.state.Errors
    if (Object.keys(ErrorsTemp).length !== 0) {
      let msgTmp = ""
      Object.keys(ErrorsTemp).map(name => { msgTmp = msgTmp + "* " + ErrorsTemp[name] + "\n"; })
      this.AlertFuntion("שגיאה", msgTmp, "סגירה")
    } else {
      this.UserSingIn().then((response) => {
        if (response.success == true && response.token != null) {
          const userInfo = this.state.userInfo
          SahbakDB.getInstance().AddUser("", "", userInfo.email, userInfo.password, response.token, "", "", "")
          SahbakDB.storeData(response.token).then(()=>{
             this.setState({ sendingProccess: true })
             this.props.navigation.navigate("MainPage")
           })
        } else {
          ToastAndroid.show('סיסמה או אימל לא נכונים נא ודוא שוב', ToastAndroid.SHORT) 
          this.setState({ sendingProccess: true 
          }) }
      })
    }
  }
  async UserSingIn() {
    try {
      return fetch(this.state.registerUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.userInfo),
      }).then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {

        });
    } catch (error) {

    }
  }
  async onFetchLoginRecords() {
    var data = { email: this.state.emailAddress, password: this.state.password, };
    try {
      let response = await fetch(
        "https://jobus.herokuapp.com//users/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      );
      response.jason()
    } catch (errors) { alert(errors); }
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };
  ScrollToTop(){

  }
  render() {
    const firstSingIn = this.state.firstSingIn
    
    return (
      
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
        locations={[0, 0.1, 1]}
        colors={['#00f4ff', '#00fef3', '#223dc7']}
        style={styles.linearGradient, { flex: 1 }}>
        <View >
          <ScrollView ref={(res)=>this.scrollViewRef=res}>
            <Text style={styles.TxtStyle}>התחבר</Text>
            <View style={styles.ViewItems}>
              <View style={styles.ViewInputText}><TextInput placeholder=" איימל: " size={8} placeholderTextColor="gray" style={styles.TextInputStyle} underlineColorAndroid='transparent' onChangeText={(text) => { this.state.userInfo.email = text, this.validate(text, "email") }} /></View>
              <View style={{ height: 15 }}></View>
              <View style={styles.ViewInputText}><TextInput placeholder=":סיסמה" size={8} placeholderTextColor="gray" secureTextEntry={true} style={styles.TextInputStyle} underlineColorAndroid='transparent' onChangeText={(text) => { this.state.userInfo.password = text, this.validate(text, "password") }} /></View>
            </View>

            <View style={styles.ViewNewUser} >
              <Text style={styles.NewUser} onPress={()=>{this.props.navigation.navigate("SingUp")}}>משתמש חדש</Text> 
              
            </View>
            <View style={styles.ViewGoogleAndFacebook} >
              
              <View style={{ width: '10%' }} />
              <TouchableOpacity onPress={() => LoginAPI.getInstance().FaceBookLogin().then((res)=>{
                  
                  if(res==null || res.error!=undefined){
                    Toast.show("שגיאה בתהליך ההתחברות נסה מאוחר יותר !", Toast.LONG);
                    // this.props.navigation.navigate('SingUp',{UserInfo:{first_name:'עבדאלבאסט',picture:'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=310837889899049&height=500&ext=1592108193&hash=AeToU7ee4jGoNJX0'}})
                  }else{
                    const userInfo={first_name:res.name,picture:res.picture.data.url}
                    this.props.navigation.navigate('SingUp',{UserInfo:userInfo})
                  }
                })}>
                <View style={styles.ViewFacebook} ><Text  style={styles.Textstyle}> התחבר דרך  f</Text></View>
              </TouchableOpacity>
              
            </View>

            <View style={styles.ViewStyleItemPassword}>
              <View style={styles.ViewPassword}>
                
                <Text style={styles.Textstyle} 
                    onPress={()=>{this.props.navigation.navigate("ForgetPassword")}}   
                    >שכחתה סיסמא? </Text>
                     
              </View>     
            </View>
            
            <View style={styles.ViewDone}>
              {this.state.sendingProccess == true ?
                <Icon raised name='done' color='#f50' onPress={() => { this.SignIn() }} />
                :
                <Button title="המתן" />}
            </View>
           
            <View> 
              
              <Jobs navigation={this.props.navigation} parentscrollview={this.scrollViewRef}  />
            
            </View>
           
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }

}



const styles = StyleSheet.create({
  TxtStyle: { fontSize: 19, textShadowOffset: { width: 1, height: 4 }, textShadowColor: '#0a49fb', fontWeight: 'bold', color: '#ffffff', textAlign: "center", padding: 10, },
  NewUser: { margin: 10, color: 'white', },
  TextInputStyle: { textAlign: 'right', },
  stretch: { flex: 1, height: undefined, width: undefined, },
  ViewItems: { paddingTop: 20, flexDirection: 'column', justifyContent: 'space-between', width: '100%', alignItems: 'center' },
  ViewInputText: { padding: 15, width: '80%', height: 50, backgroundColor: "white", alignContent: "flex-end", borderWidth: 1, borderRadius: 30, borderColor: 'white' },
  ViewNewUser: { borderRadius: 20, backgroundColor: '#0a49fb', alignItems: 'center', height: 45, marginTop: 20, marginLeft: 38, marginRight: 38 },
  ViewGoogleAndFacebook: { borderRadius: 20, backgroundColor: '#252bb0', borderColor:'white',alignItems: 'center', height: 45, marginTop: 20, marginLeft: 38, marginRight: 38},
  ViewFacebook: { flex: 1, borderRadius: 20, borderWidth: 1.5, height: 45, borderColor: '#252bb0', alignItems: 'center', justifyContent: 'flex-start' },
  Textstyle: { margin: 10, color: 'white', fontWeight: 'bold' },
  ViewStyleItemPassword: { flexDirection: 'row-reverse', flex: 1, margin: 10 },
  ViewPassword: { flex: 1, alignItems: 'center', justifyContent: 'flex-start' },
  ViewDone: { paddingStart: '15%', alignItems: 'flex-start' },
})
