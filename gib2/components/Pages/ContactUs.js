import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Image ,Alert, View,FlatList, TextInput,ScrollView,SafeAreaView  } from 'react-native';
import { Icon,SocialIcon,Button,CheckBox  } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../Pages/Logo'
import MenuC from '../Plugins/Menu'

import Footer from '../Plugins/Footer';


import { StackNavigator } from 'react-navigation';

export default class ContactUs extends React.Component {
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
                      height: "40%",
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
           <Text style={styles.TxtStyle}>מי אנחנו ?</Text>  
              
                
         
        <ScrollView style={styles.scrollView}> 
            <View style={{marginStart:20,marginEnd:30,height:20,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172',fontWeight:'bold'  }}>
                סחבק מציע את האתר הגדול ביותר לחיפוש עבודה 
                </Text>   
            </View>

            <View style={{marginStart:40,marginEnd:40,height:30,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172',fontWeight:'bold' }}>
                עבור קהל הצעירים בישראל.
                </Text>   
            </View>

            <View style={{marginStart:20,marginEnd:50,height:70,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172' }}>
                תוכלו למצוא כאן משות שמתאימות לבני הנוער. צעירים לפני
                צבא, חיילים, משוחררים,צעירים וסטודנטים.
                בלי קורות חיים, בלי מילים מסובכות, בלי כל הבול***
              
                </Text>   
            </View>
            <View style={{marginStart:24,marginEnd:50,height:70,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172' }}>
                סחבק מבין אותכם וידאג שתצאו מכאן עם העבודה
                שתבוא לכם בול!

                </Text>   
            </View>

            <View style={{marginStart:20,marginEnd:30,height:30,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172',fontWeight:'bold'  }}>
                חשוב לדעת:
                </Text>   
            </View>
            <View style={{marginStart:20,marginEnd:50,height:70,alignItems:"center",alignContent:'center'}}>
                <Text style={{color:'#052172' }}>
                אצל סחבק תוכלו למצוא מגוון חב של משרות לצעירים 
                מהתחומים שבאים הכי טוב שיש – חיי לילה,אופנה,
                מסעדות, אהטחה, מכירת,עבודה מהבית, עבודה מועדפת,
                עבודה בחו"ל, משרות לסטודנטי ועוד כל כך הרבה
                לסיכום, סחבק ידאג שתקבלו את המשרות החריפות ביותר 
                ישירות למייל ןלנייד אז תסמכו על סחבק 
                </Text>   
            </View>
            
                      
           
        </ScrollView>
        <Footer/>
    </View>
       
          
       );
   }
 
 }
 const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',   
        alignItems:'center',  
    },
    scrollView: {
        paddingTop:15,
        marginHorizontal: 0,
        
    },
    TxtStyle:{
        paddingTop:35,
        fontSize: 19, 
        textShadowOffset: { width: 1, height: 4 },
        textShadowColor: '#0a49fb',
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign:"center",
        padding: 10,
    },
  
})