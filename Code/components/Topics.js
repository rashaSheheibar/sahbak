import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export class Topics extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                    <View style={styles.TextStyle}>
                        <Text style={styles.TextDesctiption}> משרות לפי תחום</Text>
                    </View>
                    <View style={styles.TextStyle}>
                        <Text style={styles.TextDesctiption}> משרות לפי מיקום</Text>
                    </View>
                    <View style={styles.TextStyle}>
                        <Text style={styles.TextDesctiption}> משרות חמות</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
       
       width:'100%',
       height:30,
       backgroundColor:'white',
      },
      TextStyle:{
        width: '33.3%', 
        height: 20,
        padding:10,
      },
      TextDesctiption:{
        fontWeight: '800',
        color: "#0A49FB",
        fontSize: 12,
      },
    
    
      
})