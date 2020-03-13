import React ,{component} from 'react';
import { Platform ,SafeAreaView, StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView,ToastAndroid } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigator } from 'react-navigation';


export default class TopicWithoutPic extends React.Component {

    constructor(props){
        super(props)
  
    }
    
    render() {
        return (
            <View style={styles.container}>

              
            <View style={{ flex: 1,fontSize:18, flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white',marginTop:20 }}>
                <View style={styles.TextStyle}>
                    <Text style={styles.TextDesctiption}
                          onPress={()=>{this.props.navigation.navigate("ConectPage")}}
                    > משרות לפי תחום</Text>
                </View>
                <View style={styles.TextStyle}>
                    <Text style={styles.TextDesctiption}
                           onPress={()=>{this.props.navigation.navigate('SearchJobLocationCPage')}}
                         
                    > משרות לפי מיקום</Text>
                </View>
                <View style={styles.TextStyle}>
                <Text style={styles.TextDesctiption}
                         onPress={()=>{this.props.navigation.navigate('HotJobPage')}}      
                    >
                     משרות חמות</Text>
                </View>
            </View>
          
        </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:1,
        flexDirection:'column',
        
    },
   
   
     
    TextStyle: {
        width: '33%',
        
        padding: 10,
    },
    TextDesctiption: {
        fontWeight: '800',
        color: "#0A49FB",
        fontSize: 12,
        textAlign:"center",
        marginTop:10,
        marginBottom:10,
        fontWeight:"bold"
    },



})