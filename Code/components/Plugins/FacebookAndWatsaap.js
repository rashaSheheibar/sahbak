import React ,{component} from 'react';
import { StyleSheet, Text,Dimensions ,  Image , View  } from 'react-native';
import {SocialIcon } from 'react-native-elements';

export default class FacebookAndWatsaap extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image 
                       source={require('../../assets/images/backgroung3.png')} 
                       style={{flex:1,resizeMode: 'stretch'}} 
                />
                <View style={styles.RowItems}>
                    <View style={{width: 50, height: 50}} >
                        <View style={styles.SocialIconFacebook}>
                            <SocialIcon
                                iconSize={18}  
                                raised={false}
                                iconColor='white'
                                type='facebook'
                                            />
                        </View>

                    </View>
                    <View style={{width: 50, height: 50}} >
                        <View style={styles.SocialIconWatsapp}>
                            <SocialIcon
                                iconSize={39}  
                                raised={false}
                                iconColor='#5cda89'
                                type='whatsapp'
                                            />
                        </View>

                    </View>
                    <View style={{flex:1}} >

                            <Text style={styles.TitleDescribtion}> נהנים? ספרו לחבריכם!</Text>
                    </View>
                </View>
                
            </View>
            
            );
        }
    }
    
    
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',     
    },
    item: {
        paddingTop:10,
        flex:1,    
    },
    RowItems:{
        position:'absolute',
        flexDirection:'row',
        paddingTop:'30%', 
        paddingStart:"20%",
        paddingEnd:'40%',
        alignContent:'center',
        alignItems:'center',
    },
    SocialIconFacebook:{
        alignItems:'flex-end',
        textAlign:'left',
        fontWeight:'normal',
        color:'white',
    },
    SocialIconWatsapp:{
        width:50,
        height:50,    
        alignItems:'center',
        marginTop:-22,     
    },
    TitleDescribtion:{
        alignItems:'center',
        fontSize: 16,
        color:'#052172',
       
    },
     
})