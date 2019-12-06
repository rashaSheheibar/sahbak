import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export class Menu extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.firstColum}>
                    <View style={styles.menuIcon}>
                        <Icon
                        size={30}  
                        name='menu'
                        color='#052172' />
                    </View> 
                    <View style={styles.ButtonContact}>
                        <Text style={styles.textContact}>התחבר</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    item: {
        paddingTop:10, 
      },
    
    menuIcon:{
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
        fontSize: 15,
        textShadowColor: '#000d25',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5
      },
      ButtonContact:{
        width: 100,
        height: 30,
        alignItems:"center",
        backgroundColor:'#052172',
        borderRadius: 15,
      },
      
})