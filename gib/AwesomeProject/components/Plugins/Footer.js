import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export default class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.item}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: '15%', height:80 ,alignSelf:'flex-end' }} >
                    <View style={styles.SocialIconInstgram}>
                        <SocialIcon
                            iconSize={18}  
                            raised={false}
                            iconColor='white'
                            type='instagram'
                                        />
                    </View>

                  </View>
                  <View style={{width: '15%', height: 80 ,alignSelf:'flex-start' }} >
                    <View style={styles.SocialIconFacebook}>
                        <SocialIcon
                            iconSize={18}
                            raised={false}
                            iconColor='white'
                            type='facebook'
                                        />
                    </View>

                  </View>
                  <View style={{width: '20%', height: 80 ,alignSelf:'flex-start' }} />
                  
                  <View style={{width: '50%', height: 80,alignSelf:'flex-start'}} >
                  <View style={{flexDirection: 'column' }}>
            <View style={{width: '100%', height: 30}} > 
               
               <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: '15%', height: 40,alignItems:"flex-end",paddingTop:10}}>
                      <View style={styles.FlashOnIcon}>
                        <Icon
                          size={35}  
                          name='flash-on'
                          color='#f60f69' />
                      </View> 
                  </View>
                  <View style={{width: '35%', height: 40 ,alignItems:"flex-start",paddingTop:10}} >
                        <Text style={styles.TitleShbak} > סחבק</Text>

                 </View>
           
          
               </View>
               </View>
          <View style={{width: '99%', height: 40,alignItems:"flex-end",paddingTop:10}}>
            <Text style={styles.TitleDescribtion} >אתר המשרות הצערים של ישראל </Text></View>
          </View>
                                 
                  </View>
                 
                
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    item: {
        backgroundColor:'#052172',
        height:80,
        width:'100%',
    },
    SocialIconInstgram:{
        paddingTop:10,
        alignItems:'flex-end',
        textAlign:'left',
        fontWeight:'normal',
        color:'white',
    },
    SocialIconFacebook:{
        paddingTop:10,
        alignItems:'flex-start',
        textAlign:"left",
        fontWeight:'normal',
        color:'white' 
    },
    FlashOnIcon:{
        fontSize: 21.7,
        fontWeight:'normal',
        letterSpacing:8.79,
        textAlign:"left",
    
    },
    TitleShbak:{
        fontSize:17,
        fontWeight:'normal',
        textAlign:"left",
        color:'white',
        fontWeight:'bold'
    },
    TitleDescribtion:{
        alignItems:'center',
        fontSize: 11,
        color:'white',
        fontWeight:'500',
      },
    
 
})