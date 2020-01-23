import React, { component } from 'react';
import { Platform, StyleSheet, Text, Button, Alert, View,Image } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigator } from 'react-navigation';

import Logo from '../Pages/Logo'

export default class LogoWithClose extends React.Component {
    constructor(props) {
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
                      height: 80,
                    }}
                  /> 
                  <View style={styles.ExitIconView}>
                  <Icon
                    name='close' 
                    size={30}
                    color='#052172'
                    onPress={()=>{this.props.navigation.navigate("HotJobPage")}}
                   />
                    </View>
                    <View style={{width:'40%'}}></View>
                    <Logo/>  
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        padding:20,
        width:'100%',
        height:80,
        flexDirection: 'row',
        justifyContent: "flex-start", 
      
      },
      ExitIconView:{
        justifyContent:"flex-start",
        width:'10%',
      },
      LogoView:{
        justifyContent:"flex-end",
        width:'50%'
       
      },


})