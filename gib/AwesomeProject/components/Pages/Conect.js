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
import LogoWithCloseP from '../Plugins/LogoWithClose'
import { StackNavigator } from 'react-navigation';
export default class Conect extends React.Component {
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
      
            
            <ScrollView>
                <Text style={styles.TxtStyle}>התחבר</Text>

                <View style={{ flexDirection: 'row',justifyContent: 'space-between', flex:1, margin: 10 }}>
                    <View style={{ width:'10%'}}/>
                    <View style={{flex:1,borderRadius:20, backgroundColor: 'white',alignItems:'center', justifyContent: 'flex-start' }} >
                         <Text style={styles.UserExist}
                               onPress={()=>{this.props.navigation.navigate("ConectPage")}}
                              >משתמש קיים</Text>
                    </View>
                    
                    <View style={{ width:'10%'}}/>
                    <View style={{flex:1,borderRadius:20, backgroundColor: '#0a49fb',alignItems:'center', justifyContent: 'flex-start' }} >
                         <Text 
                            style={styles.NewUser}
                             onPress={()=>{this.props.navigation.navigate("LoginPage")}}>משתמש חדש</Text>
                    </View>
                    <View style={{ width:'10%'}}/>

               </View>
               <View style={{paddingTop:20, flexDirection: 'column',justifyContent: 'space-between', width:'100%',alignItems:'center' }}>
                    <View style={ {padding:15,width:'80%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                          placeholder = " שם: " 
                          size={8}
                          placeholderTextColor = "gray"
                          style={styles.TextInputStyle}
                          underlineColorAndroid='transparent'
                            />
                    </View>
                    <View style={{height:15}}></View>
                    <View style={ {padding:15,width:'80%',height:50,backgroundColor:"white", alignContent:"flex-end", borderWidth: 1,borderRadius:30,borderColor: 'white'}}>
                        <TextInput 
                          
                          placeholder =  ":סיסמא" 
                          size={8}
                          placeholderTextColor = "gray"
                          secureTextEntry={true}
                          style={styles.TextInputStyle}
                          underlineColorAndroid='transparent'
                            />
                    </View>
                </View>

          
                <View style={{paddingTop:10, flexDirection: 'row',justifyContent: 'space-between', flex:1, margin: 10 }}>
                    <View style={{ width:'10%'}}/>
                    <View style={{flex:1,borderRadius:20,borderWidth:1.5, borderColor:'#252bb0',alignItems:'center', justifyContent: 'flex-start' }} >
                         <Text style={{margin:10,color:'white', fontWeight:'bold'}}> התחבר דרך  f</Text>
                    </View>
                    
                    <View style={{ width:'10%'}}/>
                    <View style={{flex:1,borderRadius:20, borderWidth:1.5, borderColor:'#fa5353',alignItems:'center', justifyContent: 'flex-start' }} >
                         <Text style={{margin:10,color:'white', fontWeight:'bold'}}> התחבר דרך G</Text>
                    </View>
                    <View style={{ width:'10%'}}/>

               </View>

               <View style={{ flexDirection: 'row-reverse', flex:1, margin: 10 }}>
                 
                    <View style={{width:'10%',margin:5,paddingEnd:"15%",alignItems:'center', justifyContent: 'flex-end' }} >
                      <CheckBox
                          left
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          checked={this.state.value}
                          onPress={() => this.OnPresHere()}
                         
                        />

                   </View>
                   <View style={{width:'25%',alignItems:'center', justifyContent: 'flex-start' }} >      
                         <Text style={{margin:10,color:'white', fontWeight:'bold'}}> זכור אותי</Text>
                  </View>

                  <View style={{flex:1,alignItems:'center', justifyContent: 'flex-start' }} >      
                         <Text style={{margin:10,color:'white', fontWeight:'bold'}}>שכחתה סיסמא?  </Text>
                  </View>
                   

               </View>
               <View style={{paddingStart:'15%',alignItems:'flex-start' }}>
                  <Icon
                        size={30}
                        name='done'
                        color='#d436ab'
                        onPress={()=>{this.props.navigation.navigate("SuccessfulConectPage")}}
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
          flex:1,
          backgroundColor:'white',     
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
      NewUser:{
        margin:10,
        color:'white',
        
      },
      UserExist:{
        margin:10,
        color:'#252bb0',
       
      },
      TextInputStyle:{
        textAlign: 'right',
      },
})