import React, { component } from 'react';
import { Platform, StyleSheet, Text, Button, Alert, View,Image } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigator } from 'react-navigation';

import Logo from '../Pages/Logo'

export default class LogoWithClose extends React.Component {
    constructor(props) {
        super(props)
        this.goToHotPage=this.goToHotPage.bind(this);
    }
    goToHotPage(){
      this.props.props.actions.navigate("HotJobPage")
      console.log(this)
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
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ExitIconView} >
                  <Icon
                        name='close' 
                        size={30}
                        color='#052172'
                        onPress={()=>this.goToHotPage()}
                      />
                </View>

              <View style={{width: "30%", height: 50}} />
            
              <View style={styles.LogoView} >
                <Logo/>

              </View>
              
            </View>
                 
                   
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        padding:35,
        width:'100%',
        height:100,
        flexDirection: 'row',
        justifyContent: "flex-start", 
      
      },
      ExitIconView:{
        justifyContent:"flex-start",
        width:'10%',
        height:50,
      },
      LogoView:{
        justifyContent:"flex-end",
        width:'80%',
        height:50,
       
      },


})