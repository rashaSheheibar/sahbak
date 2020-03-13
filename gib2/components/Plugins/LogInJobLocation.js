import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { StackNavigator } from 'react-navigation';

export default class LogInJobLocation extends React.Component {
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
              <ScrollView style={styles.scrollView}>  
                <View style={{width: '100%', height: 40,alignItems:"center"}}>
                    <Text style={styles.TitleDescribtion} >עוד לא נרשמתם? </Text>
                </View>
                <View style={{width:"100%", flexDirection: 'row', padding:10}}>
                    <View style={styles.ViewContactFacebook}>
                      <Text style={styles.ConectToFacebook} >התחבר דרך  f</Text>
                    </View>

                    <View style={{width:"5%" }} />

                    <View style={styles.ViewContactGoogle}>
                      <Text style={styles.ConectToGoogle} >התחבר דרך  G</Text>
                    </View>
                </View>
                <View style={{padding:6}}></View>
                <View style={ {padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                      <TextInput 
                        placeholder = " שם: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                </View>
                <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = " מייל: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = "גיל: " 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = "זמינות לעבודה:" 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                        placeholder = " איפה בא לך לעבוד:" 
                        size={8}
                        placeholderTextColor = "gray"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                      />
                  </View>
                  <View style={{padding:6}}></View>
                  <View style={ {alignItems:'flex-end',padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
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
                  <View style={ {padding:15,width:'95%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
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
                  <View style={{padding:2}}></View>
                  <View style={{alignItems:'center',alignContent:'center'}} >
                    <View style={{width:"50%",height:40,padding:10,alignItems:"center",borderWidth: 1, borderRadius:30,borderColor: '#16fcef'}}>
                        <Text style={{color:'white',fontWeight:"bold"}}
                                onPress={()=>{this.props.navigation.navigate("SuccessfulConectPage")}}
                        
                        > יאללה, תרשמו אותי   </Text>
                    </View>
                    <View style={{padding:6}}></View>
                 </View>
              </ScrollView>
            </View>
            
            );
        }
    }
    
    
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#052172',
        alignItems:'center',    
    },
    TitleDescribtion:{
        paddingTop:10,
        alignItems:'center',
        alignContent:'center',
        fontSize: 17,
        color:'white',
        fontWeight:'bold',
    },
    ConectToFacebook:{
        flex:1,
        padding:6,
        color:'#40ced5',
        fontWeight:'bold',
    },
    ViewContactFacebook:{
        padding:5,
        width:'45%',
        height:40,
        alignItems:"center",
        alignContent:"center",
        borderWidth: 1,
        borderRadius:30,
        borderColor: '#40ced5',
    }, 
    ViewContactGoogle:{
        padding:5,
        width:'45%',
        height:40,
        alignItems:"center",
        alignContent:"center",
        borderWidth: 1,
        borderRadius:30,
        borderColor: '#fa5353',
    },
    ConectToGoogle:{
        flex:1,
        padding:6,
        color:'#fa5353',
        fontWeight:'bold',
    },
    scrollView: {
        marginHorizontal: 0,
    },
    textInputStyle:{
        padding:0,
    },
    
   
     
})