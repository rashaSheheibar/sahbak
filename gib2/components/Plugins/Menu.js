import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Logo from '../Pages/Logo'
import SearchEng from '../Plugins/SearchEngine'
import Footer from '../Plugins/Footer'
import TopicC from '../Plugins/TopicWithoutPic'
import HotJobsPartp from '../Plugins/PartHotj'
import LogoWithCloseP from '../Plugins/LogoWithClose'
import { StackNavigator } from 'react-navigation';

export default class Menu extends React.Component {
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
        
            <View style={styles.item}>
                <View style={styles.firstColum}>
                    <View style={styles.menuIcon}>
                        <Icon
                        size={30}  
                        name='menu'
                        color='#052172' />
                    </View> 
                    <View style={styles.ButtonContact}>
                        <Text style={styles.textContact}>שלום רשא</Text>
                    </View>
                </View>
            </View>
        
        </View>
       
          
        );
    }
  
  }
  
  
const styles = StyleSheet.create({
      container: {
          flex:1,
             
      },
      item: {
        paddingTop:10, 
      },
    
    menuIcon:{
        paddingTop:12,
        alignItems:"center",
        width: 50,
    },
      firstColum:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' 
      },
      textContact:{
        padding:4,
        color:'#fc5680',
        fontSize: 14,
        textShadowColor: '#000d25',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5
      },
      ButtonContact:{
        width: "50%",
        height: 30,
        alignItems:"center",
        backgroundColor:'#052172',
        borderRadius: 15,
      },
     
})