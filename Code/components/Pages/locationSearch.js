import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export default class locationSearch extends React.Component {
    constructor(props){
        super(props)
    };
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
                    <Text style={{color:'white',paddingTop:50}}>Location list</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
      container:{
        flex:1,

      },
     
})