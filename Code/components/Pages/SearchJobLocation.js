import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Logo from '../Pages/Logo'
import MenuC from '../Plugins/Menu'
import Footer from '../Plugins/Footer';
import SearchEng from '../Plugins/SearchEngine';
import TopicsP from '../Plugins/Topics';
import JobsByLocationPage from '../Plugins/JobsByLocationP';
import FacebookAndWatsaapPage from '../Plugins/FacebookAndWatsaap';
import LogInJobLocationP from '../Plugins/LogInJobLocation';
import FooterP from '../Plugins/Footer';
export default class SearchJobLocation extends React.Component {
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
                      height: "80%",
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
              <ScrollView style={styles.scrollView}> 
                <SearchEng/>
                <TopicsP/>
                <JobsByLocationPage/>
                <View style={{width:'100%',height:10,backgroundColor:'white'}}></View>
                <FacebookAndWatsaapPage/>
                <LogInJobLocationP/>
                <FooterP/>
              </ScrollView>
              
             
            </View>

            
            );
        }
    }
    
    
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',    
    },
    scrollView: {
        paddingTop:15,
        marginHorizontal: 0,
        
    },
   
     
})
