import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import { StackNavigator } from 'react-navigation';
import Logo from '../Pages/Logo'
export default class logoWithMessage extends React.Component {

  constructor(props){
      super(props)
                
       
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
            <View style={{paddingTop:5,flex: 1, flexDirection: 'row'}}>
                <View style={{width: "10%", height: 25}} >
                    <Icon
                        name='close' 
                        size={30}
                        color='#052172'
                        onPress={()=>{this.props.navigation.navigate("HotJobPage")}}
                    />
                </View>
                <View style={{paddingStart:10}}></View>
                <View style={{paddingTop:2,width: "12%", height: 35, backgroundColor: '#052172', borderRadius:20}} >
                    <Icon
                            name='email' 
                            size={30}
                            color='#d436ab'
                            onPress={()=>{this.props.navigation.navigate("HotJobPage")}}
                        />     
                </View>
                <View style={{paddingStart:"20%"}}></View>
                <View style={{paddingTop:18,width: "6%", height: 50, backgroundColor: 'steelblue'}} >
                     <Icon
                            name='flash-on' 
                            size={30}
                            color='#f60f69'
                           
                        />   
                </View>
                <View style={{paddingTop:18,width: '15%', height: 50 ,alignItems:"flex-start",backgroundColor:'black'}} >
                        <Text style={styles.TitleShbak} > סחבק</Text>

                </View>
                <View style={{paddingStart:0}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                     <SocialIcon
                        iconSize={18}
                        raised={false}
                        iconColor='white'
                        type='instagram'
                                      />

                </View>
                <View style={{paddingStart:10}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                    <SocialIcon
                        iconSize={18}
                        raised={false}
                        iconColor='white'
                        type='facebook'
                                      />
                </View>

            </View>

            <View style={{paddingTop:0,width:"50%",height:20, flexDirection: 'row-reverse'}}>
            <Text style={styles.TitleDescribtion} >אתר המשרות הצערים של ישראל </Text>
            </View>
         
            
     </View>
    
      
     );
    }

}





const styles = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor:'white',     
      },
      ExitIconView:{
        justifyContent:"flex-start",
        width:'10%',
      },
      LogoView:{
        justifyContent:"flex-end",
        width:'50%'
       
      },
      TitleShbak:{
        fontSize:15,
        fontWeight:'normal',
        textAlign:"left",
        color:'white',
        fontWeight:'bold'
      },
})