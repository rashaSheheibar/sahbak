import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { WebView} from 'react-native-webview'
export default class Logo extends React.Component {
    constructor(props){
        super(props)
    };

 

    render() {

      <WebView
      source={{ uri: 'http://aboutreact.com' }}
      style={{ marginTop: 20 }}
     />
        return (
        <View style={styles.container}>
          <View style={{flexDirection: 'column' }}>
            <View style={{width: '100%', height: 30}} > 
               
               <View style={{flex: 1, flexDirection: 'row',height:50}}>
                  <View style={{width: '10%', height: 20,alignItems:"flex-end"}}>
                      <View style={styles.FlashOnIcon}>
                        <Icon
                          size={35}  
                          name='flash-on'
                          color='#f60f69' 
                          />

                      </View> 
                  </View>
                  <View style={{width: '25%', height: 50 ,alignItems:"flex-start", alignItems:'center', padding:5}} >
                        <Text style={styles.TitleShbak} > סחבק</Text>

                 </View>
                <View style={{width: '20%', height: 50,alignItems:"flex-start" }} >
                <View style={styles.SocialIconInstgram}>
                    <SocialIcon
                        iconSize={15}
                        raised={false}
                        iconColor='white'
                        type='instagram'
                        onPress={() => <WebView
                          source={{ uri: 'https://www.instagram.com/' }}
                          style={{ marginTop: 20 }}
                         />}
                                      />
                </View>
                </View>
                <View style={{width: '20%', height: 50, alignItems:"flex-end"}} >
                  <View style={styles.SocialIconFacebook}>
                    <SocialIcon
                        iconSize={15}
                        raised={false}
                        iconColor='white'
                        type='facebook'
                                      />
                  </View>
                </View>
            </View>
          
          </View>
          <View style={{width: '80%', height: 20,alignItems:"flex-end", padding:10}}>
            <Text style={styles.TitleDescribtion} >אתר המשרות הצערים של ישראל </Text></View>
          </View>
        </View>
     
        );
    }
}


const styles = StyleSheet.create({
      container:{
        flexDirection:"column",
        alignContent:"flex-end",
         
      },
      SocialIconInstgram:{
        alignItems:"center",
        textAlign:"left",
        fontWeight:'normal',
        color:'blue'  
      },
      SocialIconFacebook:{
        alignItems:"flex-end",
        textAlign:"left",
        fontWeight:'normal',
        color:'blue' 
      },
      TitleShbak:{
        fontSize:15,
        fontWeight:'normal',
        textAlign:"left",
        color:'white',
        fontWeight:'bold'
      },
      FlashOnIcon:{
        fontSize: 21.7,
        fontWeight:'normal',
        letterSpacing:8.79,
        textAlign:"left",
    
      },
      TitleDescribtion:{
        alignItems:'center',
        fontSize: 11,
        color:'white',
        fontWeight:'500',
      },
})