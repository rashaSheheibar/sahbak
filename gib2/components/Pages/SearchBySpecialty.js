import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { StackNavigator } from 'react-navigation';

export default class SearchBySpecialty extends React.Component {

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
                height: "100%",
              }}
            /> 
            <Text>חיפוש לפי תחופ</Text>
     </View>

     
      
    );
}

}





const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'white',     
  },
 
})