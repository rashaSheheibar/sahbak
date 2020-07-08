import React from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../plugins/Footer';


export default class aboutUs extends React.Component {
  constructor(props){super(props)}

    render() {
        return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }} locations={[0, 0.1, 1]} colors={['#00f4ff', '#00fef3', '#223dc7']} style={styles.linearGradient,{flex:1}}> 
            <Text style={styles.TxtStyle}>מי אנחנו ?</Text>        
            <ScrollView style={styles.scrollView}> 
                <View style={styles.ViewTextTitle}>
                    <Text style={styles.TextTitle}>
                    סחבק מציע את האתר הגדול ביותר לחיפוש עבודה 
                    עבור קהל הצעירים בישראל.
                    </Text>   
                </View>
            
                <View style={styles.ViewTextDescription}>
                    <Text style={styles.textDescription}>
                    תוכלו למצוא כאן משות שמתאימות לבני הנוער. צעירים לפני
                    צבא, חיילים, משוחררים,צעירים וסטודנטים.
                    בלי קורות חיים, בלי מילים מסובכות, בלי כל הבול***
                    סחבק מבין אותכם וידאג שתצאו מכאן עם העבודה
                    שתבוא לכם בול!

                    </Text>   
                </View>
                
                <View style={styles.ViewTextTitle}>
                    <Text style={styles.TextTitle}>
                    חשוב לדעת:
                    </Text>   
                </View>
                <View style={styles.ViewTextDescription}>
                    <Text style={styles.textDescription}>
                    אצל סחבק תוכלו למצוא מגוון חב של משרות לצעירים 
                    מהתחומים שבאים הכי טוב שיש – חיי לילה,אופנה,
                    מסעדות, אהטחה, מכירת,עבודה מהבית, עבודה מועדפת,
                    עבודה בחו"ל, משרות לסטודנטי ועוד כל כך הרבה
                    לסיכום, סחבק ידאג שתקבלו את המשרות החריפות ביותר 
                    ישירות למייל ולנייד אז תסמכו על סחבק 
                    </Text>   
                </View>
                
            </ScrollView>
            <Footer/>
            </LinearGradient> 
        </View>
            
        );
    }
    
}
const styles = StyleSheet.create({
    container: {flex:1,alignItems:'center',},
    scrollView: {paddingTop:15,marginHorizontal: 0,},
    TxtStyle:{paddingTop:35,fontSize: 19,textShadowOffset: { width: 1, height: 4 },textShadowColor: '#0a49fb',fontWeight: 'bold',color: '#ffffff',textAlign:"center",padding: 10,},
    textDescription:{color:'#052172',textAlign:'center'},
    ViewTextDescription:{marginStart:25,marginEnd:25,height:130,alignItems:"center",alignContent:'center'},
    TextTitle:{color:'#052172',fontWeight:'bold',textAlign:'center'},
    ViewTextTitle:{marginStart:30,marginEnd:30,height:45,alignItems:"center",alignContent:'center'},
})