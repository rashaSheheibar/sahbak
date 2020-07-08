import React from 'react';
import { StyleSheet, Text,View} from 'react-native';
import { Icon} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';

export default class sucssesSendJob extends React.Component {
    constructor(props){
      super(props)
    }  
    GoToPage(page){  
        this.props.navigation.navigate(page)
        
      }
  render() {
      return (
       
        <View style={styles.container}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
            locations={[0, 0.1, 1]}
            colors={['#00f4ff', '#00fef3', '#223dc7']}
            style={styles.linearGradient, { flex: 1 }}>   
              <View style={styles.MesageView}>
                <Text style={styles.TxtStyle}>בום! הגשת מועמדות למשרה, נחזור אליך בהקדם
             </Text>
              </View>
              <View style={styles.IconStyle}>
                <Icon size={30} name='done'  color='#d436ab' onPress={()=>this.GoToPage('MainPage')} />
              </View>
            </LinearGradient>
      </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {flex: 1},
    TxtStyle:{fontSize: 19,textShadowOffset: { width: 1, height: 4 },textShadowColor: '#0a49fb',fontWeight: 'bold',color: '#ffffff',textAlign:"center",padding: 10},
    IconStyle:{marginTop:40,marginRight:35,paddingStart:15,alignItems:'center'},
    MesageView:{marginTop:'45%',alignItems:'center'},
    

})