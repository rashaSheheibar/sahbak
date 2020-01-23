import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Image ,Alert, View,FlatList, TextInput,ScrollView,SafeAreaView  } from 'react-native';
import { Icon,SocialIcon,Button,CheckBox  } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Logo from '../Pages/Logo'
import MenuC from '../Plugins/Menu'
import LogoWithCloseP from '../Plugins/LogoWithClose'
import HotJobsPartp from '../Plugins/PartHotj'
import Footer from '../Plugins/Footer'
import TopicC from '../Plugins/TopicWithoutPic'

import { StackNavigator } from 'react-navigation';

export default class Favorits extends React.Component {
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
                <View style={{ width:'100%',height:60,flexDirection: 'row-reverse'  }}>
                    
                    <View style={{width:'60%', justifyContent: 'flex-end' }} >
                        <Logo/>

                    </View>
                
                    <View style={{width:'40%', justifyContent: 'flex-start' }} >      
                            <MenuC/>
                    </View>
               </View>

            <ScrollView>       
                    
                    <View style={{width: '100%', height: 40,alignItems:"center"}}>
                        <Text style={styles.TitleDescribtion} >מועדפת </Text>
                    </View>
                    <View style={{marginStart:50,marginEnd:70,height:30,alignItems:"center",alignContent:'center'}}>
                        <Text style={{color:'#052172',fontWeight:'bold'}}>
                        לא רק סחבק – גם צה"ל דואג ומפרגן 
                        </Text>   
                    </View>
                    <View style={{marginStart:50,marginEnd:70,height:30,alignItems:"center",alignContent:'center'}}>
                        <Text style={{color:'#052172',fontWeight:'bold'}}>
                        לכם מענק שחרור מפחיד.
                        </Text>   
                    </View>

                    <View style={{marginStart:50,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
                        <Text style={{color:'#052172',fontWeight:'bold'}}>
                        איך מקבלים אותו? מה עושים איתן? 
                        </Text>   
                    </View>
                    <View style={{marginStart:50,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
                        <Text style={{color:'#052172',fontWeight:'bold'}}>
                        מה האופציות?
                        </Text>   
                    </View>
                    <View style={{marginStart:50,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
                        <Text style={{color:'#052172',fontWeight:'bold'}}>
                        שימו לב,סחבק ממליץ...
                        </Text>   
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
      alignItems:"center",
      alignContent:'center',
    },
    Header:{
      width:'100%',
      height:90,
      paddingTop:10,
      flexDirection: 'row',
     
        
    },
    TitleDescribtion:{
        paddingTop:10,
        alignItems:'center',
        alignContent:'center',
        fontSize: 17,
        color:'white',
        fontWeight:'bold',
      },
      CousresDescription:{
        padding:30,
        paddingStart:70,
        paddingEnd:100,
        height:900,
        alignItems:'center',
      
      
    }
})