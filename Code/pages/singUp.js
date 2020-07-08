import React from 'react';
import {StyleSheet, Text, Alert, KeyboardAvoidingView,View,TextInput,ScrollView,Button,Image } from 'react-native';
import {CheckBox} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { LoginAPI } from '../SahbakDB/LoginAPI'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImagePlugin from '../plugins/ImagePlugin'


export default class singUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {registerUrl: "https://jobus.herokuapp.com/users/register",
    RegisterState: 1,
    Errors: {},
    image:null,
    ConfirmBtn: false,
    DictVar:{},
    }
    
    if(this.props.navigation.state.params!=undefined){
      FacebookUserInfo=this.props.navigation.state.params.UserInfo
    }else{
      FacebookUserInfo={}
    }
    this.state.required=['first_name','last_name','email','phone','password','city','birthday','gender']
    this.state.fields={
        first_name: 'שם',
        last_name: "שם משפחה",
        email: 'מייל',
        Picture: 'תמונה',
        phone:'מספר טלפון',
        password: "סיסמה",
        city:'עיר',
        birthday: "תאריך לידה",
        gender: "מין",
    }
    this.state.userInfo = {
        first_name: FacebookUserInfo.first_name!=null?FacebookUserInfo.first_name:'',
        last_name: "",
        Picture: FacebookUserInfo.picture!=null?FacebookUserInfo.picture:'',
        email: FacebookUserInfo.email!=null?FacebookUserInfo.email:'',
        phone: FacebookUserInfo.phone!=null?FacebookUserInfo.phone:'',
        password: "",
        city: FacebookUserInfo.city!=null?FacebookUserInfo.city:'',
        birthday: "",
        gender: "",
    }
    this.SingUp = this.SingUp.bind(this)
    this.validate = this.validate.bind(this)
  }

  validate = (text, type,required=0) => {
    let DictVar = this.state.Errors
    if (type == 'first_name') {
      delete DictVar['first_name'];
      if (!(/[^0-9]+$/.test(text))) {DictVar['first_name'] = "שם פרטי לא נכון"}
    } else if (type == 'last_name') {
      delete DictVar['last_name'];
      if (!(/[^0-9]+$/.test(text))) {DictVar['last_name'] = "שם משפחה לא נכון"}
    } else if (type == 'email') {
      delete DictVar['email'];
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text))) {DictVar['email'] = "המייל לא נכון"}
    } else if (type = 'phone') {
      delete DictVar['phone'];
      if (!(/^[0-9]+$/.test(text))) {DictVar['phone'] = "מספר טלפון לא תקין"}
    } else if (type = 'city') {
      delete DictVar['city'];
      if (!(/[^0-9]+$/.test(text))) {DictVar['city'] = "מס עיר לא נכון"}
    }else if (type = 'birthday') {
      delete DictVar['birthday'];
      if (!(/[^0-9]+$/.test(text))) {DictVar['birthday'] = " תאריך לידה לא נכון"}
    }else if (type = 'gender') {
      delete DictVar['gender'];
      if (!(/[^0-9]+$/.test(text))) {DictVar['gender'] = " מין לא נכון "}
    }
  }
  async UserRegister() {
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
      .catch((error) => {});
  }
  AlertFuntion(mainTitle, MsgBody, textBtn) {Alert.alert(mainTitle, MsgBody, [{ text: textBtn, style: 'cancel', },], { cancelable: false });}
  CheckLakeData(){
    const Fileds=this.state.fields
    const required=this.state.required
    const userInfo=this.state.userInfo;
    Object.entries(required).map(([key,v])=>{
      if(userInfo[v]==""||userInfo[v]==undefined){

        this.state.Errors[v]=Fileds[v]+": שדה חובה חסר"
      }
  })
  }
  SingUp() {
    this.CheckLakeData()
    
    const ErrorsTemp = this.state.Errors
    if (Object.keys(ErrorsTemp).length !== 0) {
      let msgTmp = ""
      Object.keys(ErrorsTemp).map(name => { msgTmp = msgTmp + "* " + ErrorsTemp[name] + "\n"; })
      this.AlertFuntion("שגיאה", msgTmp, "סגירה")
    } else if (this.state.ConfirmBtn == false) {
      
    } else {
      this.UserRegister().then((response) => {
        let msg = response.msg;
        let status = response.status;
        if (status == 1) {
          this.setState({ RegisterState: 3 })
        } else if (status == 0 && msg == "You have already signed up and confirmed your account. Did you forget your password?") {
            this.setState({ RegisterState: 2 })
        } else {this.setState({ RegisterState: 1 })}
      })
    }
  }

  OnPresHere() {this.setState({ConfirmBtn: !this.state.ConfirmBtn})}
  callbackFunction = (childData) => {
    this.state.userInfo.Picture=childData
  }
  render() {
    const image=this.state.userInfo.Picture
    return (

      <View style={styles.container}>
        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }} locations={[0, 0.1, 1]} colors={['#00f4ff', '#00fef3', '#223dc7']} style={styles.linearGradient, { flex: 1 }}>

        <View style={{ flexDirection: 'row-reverse' }}>
           
            <View style={styles.ViewClose}><Text onStartShouldSetResponder={() => this.props.navigation.goBack(null)} style={styles.TextClose}>X</Text></View>
        </View>
          
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled={false}>
        {this.state.RegisterState == 1 ? (
        <ScrollView>
            <View style={styles.ViewItems}>
                  <View style={styles.ViewExsisitUser}><Text style={styles.TextExsistUser} onPress={() => { this.props.navigation.navigate("SingIn") }}>  משתמש קיים </Text></View>
                  <View style={{ padding: 6 }} ></View>
                  <View style={styles.ViewContactFacebook}><Text  onPress={() => LoginAPI.getInstance().FaceBookLogin()} style={styles.ConectToFacebookAndGoogle} >התחבר דרך  f</Text></View>
                  <View style={{ padding: 6 }} ></View>     
                  <View style={{height:250,flex:1,width:'100%'}}>
                    <ImagePlugin imageUrl={image} parentCallback = {this.callbackFunction} />
                  </View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder=" שם: " size={8} placeholderTextColor="gray" style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.first_name} onChangeText={(text) => { this.state.userInfo.first_name = text, this.validate(text, 'first_name') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder="שם משפחה: " size={8} placeholderTextColor="gray" style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.last_name} onChangeText={(text) => { this.state.userInfo.last_name = text, this.validate(text, 'last_name') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder=" מייל: " size={8} placeholderTextColor="gray" style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.email} onChangeText={(text) => { this.state.userInfo.email = text, this.validate(text, 'email') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder="עיר מגורים: " size={8} placeholderTextColor="gray" style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.city} onChangeText={(text) => { this.state.userInfo.city = text, this.validate(text, 'city') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder="תאריך לידה:" size={8} placeholderTextColor="gray" style={styles.textInputStyle}  underlineColorAndroid='transparent' defaultValue={this.state.userInfo.birthday} onChangeText={(text) => { this.state.userInfo.birthday = text, this.validate(text, 'birthday') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder=" מין:" size={8} placeholderTextColor="gray" style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.gender} onChangeText={(text) => { this.state.userInfo.gender = text, this.validate(text, 'gender') }}/></View>         
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder=" נייד:" size={8} placeholderTextColor="gray" style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.phone} onChangeText={(text) => { this.state.userInfo.phone = text, this.validate(text, 'phone') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTnputText}><TextInput placeholder="סיסמא:" size={8} placeholderTextColor="gray" secureTextEntry={true} style={styles.textInputStyle} underlineColorAndroid='transparent' defaultValue={this.state.userInfo.password} onChangeText={(text) => { this.state.userInfo.password = text, this.validate(text, 'password') }}/></View>
                  <View style={{ padding: 6 }}></View>
                  <View style={styles.ViewTitleAcceptRegister}>
                  <View><Text style={{ color: "white" }}> בהרשמה אני מאשר\ת קבלת משרות למייל ולנייד ואת תנאי השימוש באתר (אנחנו נעבוד בשבילך)</Text></View>
                  <CheckBox left checked={this.state.ConfirmBtn}  onPress={() => this.OnPresHere()} />
            </View>


                  <View style={{ padding: 6 }}></View>
                  <View style={{ width: "50%", height: 40, padding: 10, alignItems: "center", borderWidth: 1, borderRadius: 30, borderColor: '#16fcef' }}>
                    <Text style={{ color: 'white', fontWeight: "bold" }}
                      onPress={() => this.SingUp()}
                    > יאללה, תרשמו אותי   </Text>
                  </View>
                </View>
              </ScrollView>) : <View></View>}
            {this.state.RegisterState == 2 ? (
               <View style={styles.ViewResultResister}>
                  <View style={{padding:80}}> 
                      <Text style={styles.TestStyleForRegisterAcsses} > כבר נרשמת ,אנא התחבר למערכת</Text>
                  </View>
                  <View style={styles.ButtonStyleView}>
                    <Text style={{ color: 'white', padding: 1 }} onPress={() => { this.props.navigation.navigate("SingIn") }} >  
                        התחבר 
                    </Text> 
                  </View>
               </View>
            ) : <View></View>}

            {this.state.RegisterState == 3 ? (
              <View style={styles.ViewResultResister}>
                <View style={{padding:80}}>
                  <Text style={styles.TestStyleForRegisterAcsses}>נרשמתה בהצלחה ,אנא אשרו במייל </Text> 
                </View>
                <View style={styles.ButtonStyleView}>
                  <Text style={{ color: 'white' }} onPress={() => { this.props.navigation.navigate("SingIn") }} >  
                   התחבר </Text> 
                </View>
              </View>
            ) : <View></View>}
          </KeyboardAvoidingView>
         
        </LinearGradient>
      </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:500,
  },
  scrollView: {

    marginHorizontal: 0,
    marginTop: Constants.statusBarHeight,
  },
  Header: {
    width: '80%',
    height: 70,
    paddingStart: 0,
    alignItems: "flex-end",
    backgroundColor: "red"
  },
  ViewTextLogIn: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  closeIcon: {
    width: "10%",
    fontSize: 21.7,
    fontWeight: 'normal',
    letterSpacing: 8.79,
    textAlign: "left",
    alignItems: "flex-start",

  },
  LogInV: {
    flex: 1,
    alignItems: "flex-end"

  },
  TextLogIn: {
    fontWeight: 'bold',
    color: 'white',
  },
  ConectToFacebookAndGoogle: {
    flex: 1,
    padding: 7,
    color: 'white',
    fontWeight: 'bold',
  },
  ViewContactFacebook: {
    padding: 8,
    width: '85%',
    height: 50,
    alignItems: "center",
    alignContent: "center",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#252bb0',
  },
  ViewContactGoogle: {
    padding: 2,
    width: '85%',
    height: 50,
    alignItems: "center",
    alignContent: "center",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fa5353',
  },

  TextInputInfo: {
    width: '80%',
    height: 40,
    alignItems: "center",
    alignContent: "flex-end",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
  },

  textInputStyle: {
    padding: 0,
    textAlign: 'right',

  },
  TxtStyle: {
    fontSize: 19,
    textShadowOffset: { width: 1, height: 4 },
    textShadowColor: '#0a49fb',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: "center",
    padding: 10,
  },

  ViewResultResister:{
    width: "100%",
    height:900,
    flexDirection: "column", 
    alignContent: "space-between", 
    alignItems:'center',
  },
  TestStyleForRegisterAcsses:{
      color:"white",
      fontSize:25,
      textAlign:"center",
      fontWeight: 'bold',
    },
    ButtonStyleView:{
      backgroundColor: "#0a49fb", 
      width: "85%", 
      height: 40, 
      alignItems: "center", 
      borderWidth: 1, 
      borderRadius: 30, 
      borderColor: '#0a49fb',
    },
    ViewClose:{width: '45%', alignContent: 'center', justifyContent: 'center'},
    TextClose:{color: '#fff', fontSize: 30, textAlign: 'right', textAlignVertical: 'auto' ,marginEnd:15},
    ViewItems:{width: "100%", flexDirection: "column", padding: 10, alignContent: "space-between", alignItems: "center"},
    ViewExsisitUser:{backgroundColor: "#0a49fb", width: "85%", height: 40, alignItems: "center", borderWidth: 1, borderRadius: 30, borderColor: '#0a49fb'},
    TextExsistUser:{ color: 'white', padding: 5},
    ViewTnputText:{ padding: 15, width: '85%', height: 50, backgroundColor: "white", alignContent: "flex-end", borderWidth: 1, borderRadius: 30, borderColor: 'white'},
    ViewTitleAcceptRegister:{width: "85%", height: 60, flexDirection: "row", padding: 5, alignItems: "flex-start"},
    ViewRegister:{width: "50%", height: 40, padding: 10, alignItems: "center", borderWidth: 1, borderRadius: 30, borderColor: '#16fcef'},
})
