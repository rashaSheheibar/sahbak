import React  from 'react';
import {StyleSheet, Text,View,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../plugins/Footer';
import Jobs from '../plugins/Jobs';

export default class courses extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: false,}    
    }
    OnPresHere(){this.setState({value:!this.state.value})}
    render() {
        return (
            <View style={styles.container}>
            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }} locations={[0, 0.1, 1]} colors={['#00f4ff', '#00fef3', '#223dc7']} style={styles.linearGradient,{flex:1}}>    
              <ScrollView>
                <View style={styles.ViewTitle}>
                    <Text style={styles.TitleDescribtion} >קורסים </Text>
                </View>
                <View style={styles.ViewTextDescription}>
                  <Text style={styles.TextDescription}>
                          לפעמים משרת החלומות דורשת מאיתנו מאמץ נוסף כדי שנוכל להתקבל אליה.
                          סחבק כאן כדי להגשים לך את המשאלה עם רשימת הקורסים האולטימטיבית!
                      
                  </Text> 
                </View>  
                <Jobs displayImage={false} parentScrollView={this.scroll} navigation={this.props.navigation} />       
               <Footer/>
               </ScrollView>
            </LinearGradient>
        </View>
        );
    } 
  }
  
  
const styles = StyleSheet.create({
     
  container: {flex: 1,alignItems:"center",alignContent:'center'},
  TitleDescribtion:{alignItems:'center',alignContent:'center',fontSize: 17,color:'white',fontWeight:'bold',},
  ViewTitle:{width: '100%', height: 40,alignItems:"center",paddingTop:10},
  ViewTextDescription:{marginStart:50,marginEnd:50,height:100,alignItems:"center",alignContent:'center'},
  TextDescription:{color:'#052172' ,textAlign: 'center'},
})