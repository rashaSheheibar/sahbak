import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput ,SafeAreaView} from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { StackNavigator } from 'react-navigation';
export class Favorits extends React.Component {
    constructor(props){
        super(props)
    };
    render() {
        return (
    <SafeAreaView style={styles.container}>
    <LinearGradient
        colors={['rgba(0, 120, 255,0.8)','transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 500,
        }}
      />
      <View style={styles.Header}>
            <Menu/>
            <Logo/>
      </View>
      <View style={{width: '100%', height: 40,alignItems:"center"}}>
          <Text style={styles.TitleDescribtion} >מועדפת </Text>
      </View>
      <View style={{marginStart:80,marginEnd:70,height:30,alignItems:"center",alignContent:'center'}}>
          <Text style={{color:'#052172',fontWeight:'bold'}}>
          לא רק סחבק – גם צה"ל דואג ומפרגן 
          </Text>   
      </View>
      <View style={{marginStart:80,marginEnd:70,height:30,alignItems:"center",alignContent:'center'}}>
          <Text style={{color:'#052172',fontWeight:'bold'}}>
          לכם מענק שחרור מפחיד.
          </Text>   
      </View>

      <View style={{marginStart:80,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
        <Text style={{color:'#052172',fontWeight:'bold'}}>
        איך מקבלים אותו? מה עושים איתן? 
          </Text>   
      </View>
      <View style={{marginStart:80,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
        <Text style={{color:'#052172',fontWeight:'bold'}}>
        מה האופציות?
          </Text>   
      </View>
      <View style={{marginStart:80,marginEnd:75,height:30,alignItems:"center",alignContent:'center'}}>
        <Text style={{color:'#052172',fontWeight:'bold'}}>
        שימו לב,סחבק ממליץ...
          </Text>   
      </View>
      <HotJobs/>

      
    
      <Footer/>
    </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems:"center",
    alignContent:'center',
  },
  
  Header:{
    width:'100%',
    height:90,
    paddingTop:10,
    flexDirection: 'row',
   
      
  },
  TitleDescribtion:{
    alignItems:'center',
    alignContent:'center',
    fontSize: 17,
    color:'white',
    fontWeight:'bold',
  },
  CousresDescription:{
    padding:30,
    paddingStart:70,
    paddingEnd:100,
    height:900,
    alignItems:'center',
  
  }
  
  });
  
  