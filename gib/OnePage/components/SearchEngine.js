import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Alert, View , Image} from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

export class SearchEngine extends React.Component {
    constructor(props){
        super(props)
    };
    render() {
        return (
      <View style={styles.container}>
          <Text style={styles.TxtStyle}>חפשו את המשרה המתאימה לכם</Text>
            <View style={styles.layoutSearch}>
      
        <View 
            style={styles.innerAeraView}
            onStartShouldSetResponder={() => alert('Grade List')}>
             <View style={{width: "84%", height: 29, backgroundColor: 'white'}} >
                <View style={{flex: 1, flexDirection: 'row'}}>  
                  <View style={{flex: 1}}>
                    <Icon
                        name='arrow-drop-down'
                        color='gray' />
                  </View>
                  <View  style={{flex: 2, alignItems:"flex-end"}}>
                    <Text style={styles.paragraph}>הדרכה </Text>
                 </View>
                 <View style={{flex: 1, alignItems:"flex-start"}}>
                  <Icon
                      name='favorite'
                      color='blue' />
                  </View>
              </View>  
              </View>
        </View>

        <View 
            style={styles.innerAeraView}
            onStartShouldSetResponder={() => alert('Grade List')}>
             <View style={{width: "84%", height: 29, backgroundColor: 'white'}} >
                <View style={{flex: 1, flexDirection: 'row'}}>  
                  <View style={{flex: 1}}>
                    <Icon
                        name='arrow-drop-down'
                        color='gray' />
                  </View>
                  <View  style={{flex: 2, alignItems:"flex-end"}}>
                    <Text style={styles.paragraph}>אשדוד </Text>
                 </View>
                 <View style={{flex: 1, alignItems:"flex-start"}}>
                  <Icon
                      name='room'
                      color='blue' />
                  </View>
              </View>  
              </View>
        </View>

        <View 
            style={styles.innerAeraView}
            onStartShouldSetResponder={() => alert('Grade List')}>
             <View style={{width: "84%", height: 29, backgroundColor: 'white'}} >
                <View style={{flex: 1, flexDirection: 'row'}}>  
                  <View style={{flex: 1}}>
                    <Icon
                        name='arrow-drop-down'
                        color='gray' />
                  </View>
                  <View  style={{flex: 2, alignItems:"flex-end"}}>
                    <Text style={styles.paragraph}>22+ </Text>
                 </View>
                 <View style={{flex: 1, alignItems:"flex-start"}}>
                  <Icon
                      name='unfold-more'
                      color='blue' />
                  </View>
              </View>  
              </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
              onPress={this._onPressButton}
              title=" חפש !"
              color="#f194ff"
              />
        </View>

        <View style={styles.SearchIcon}>
          <Image
            style={{ flex:1,padding:0,alignItems:'center',position: 'absolute'}}
            source={require('./images/sachback.png')}/></View>
          <View style={styles.Button}>
            <View style={styles.ButtonDiscription}>
              <Text style={styles.textButtom}>תנו לסחבק לעבוד בשבילכם</Text>
            </View>
          </View>
        </View>   
  </View>
 
    
        
         
        
            

     
     
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:0,
        width:"100%",
        height:300,
    },
    TxtStyle:{
      fontSize: 19, 
      textShadowOffset: { width: 1, height: 4 },
      textShadowColor: '#0a49fb',
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign:"center",
      padding: 10,
    },
    layoutSearch:{
      flexDirection:'column',
      flex:1,
     
    },
  
    innerAeraView: { 
      flex: 1,
      justifyContent: 'center', 
      alignItems: "center",
      height:10,
     
    },
    
    paragraph: {
      fontSize: 18,
      color:"black",
      justifyContent: 'center', 
  
  
    },
  
    rowIcon:{
      flexDirection:'row',
      justifyContent: 'flex-start',
      flex:1 
    },
    SearchIcon:{
      padding:1,
      alignItems:'center',
    },
    buttonContainer: {
      margin: 30,  
      
    },
    textButtom:{ 
        padding:2,
        color:'#052172',
        textAlign:"center",
        alignItems:"center",
        fontSize: 12,
      },
    ButtonDiscription:{
        width: 180,
        height: 20,
        alignItems:"center",
        alignContent:'center',
        backgroundColor:'white',
        borderRadius: 15,
      },
      Button:{
        alignItems:"center",
        textShadowOffset: { width: 4, height: 1 },
        flex:1,
        top: 80,
        bottom: 0,
        left: 0,
        right: 0,
      },
   
  });
  