import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Logo from '../Pages/Logo';
import SearchEng from '../Plugins/SearchEngine'
import Footer from '../Plugins/Footer'
import Topic from '../Plugins/Topics'


const DATA = [
  {
    image: '../../assets/images/image1.png',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'לחברת אונליין באשקלון דרוש/ה מנהל/ת הדרכה',
    descriptionForJob:' מתן שירות לאורחים במחלקות מזון ומשקאות במלון.',
    descriptionForTermsAndBenefits:'מגוון אפשרויות קידום ופיתוח.אחראי חצי שנה מענק התמדה של 3000 שקל. עבודה מועדפת לחיילם/ת משוחררים/ות',
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'לחברת אונליין באשקלון דרוש/ה מנהל/ת הדרכה',
    descriptionForJob:' מתן שירות לאורחים במחלקות מזון ומשקאות במלון.',
    descriptionForTermsAndBenefits:'מגוון אפשרויות קידום ופיתוח.אחראי חצי שנה מענק התמדה של 3000 שקל. עבודה מועדפת לחיילם/ת משוחררים/ות',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'לחברת אונליין באשקלון דרוש/ה מנהל/ת הדרכה',
    descriptionForJob:' מתן שירות לאורחים במחלקות מזון ומשקאות במלון.',
    descriptionForTermsAndBenefits:'מגוון אפשרויות קידום ופיתוח.אחראי חצי שנה מענק התמדה של 3000 שקל. עבודה מועדפת לחיילם/ת משוחררים/ות',
  
  },
];

function Item({ title}) {
  return (
    
    <View style={styles.item}>
      
      <View style={{width: '10%', height: 20,alignItems:"flex-start"}}>
                      <View style={styles.whatshotIcon}>
                        <Icon
                          size={23} 
                          name='whatshot'
                          reverse={false}
                          disabledStyle={{ backgroundColor: 'white' }}
                          color='#f60f69' />
                      </View> 
        </View> 
        <Image
                style={{width:'100%',flex:1,paddingTop:0,borderTopLeftRadius:10,borderTopRightRadius:10}}
                source={require('../../assets/images/image1.png')}
            
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems:"center",justifyContent: 'center',padding:10,}}>
          <View >
              <Image
                    style={{flex:1}}
                    source={require('../../assets/images/IconOne.png')}
                />
          </View>
          <View >
              <Image
                    style={{flex:1}}
                    source={require('../../assets/images/IconSecond.png')}
                />
          </View>
        </View>
        <View  style={{alignItems:"flex-end"}}>
          <Text style={styles.title}>{title}</Text>
          
       </View>
       <View style={{ paddingTop:25,flex: 1, flexDirection: "row-reverse",padding:5}}>
          <View style={{width:"10%", alignItems:"flex-end"}}>
                  <Icon
                      name='room'
                      color='blue' />
                  </View>
          <View  style={{width:"21%", alignItems:"flex-end"}}>
                  <Text style={styles.paragraph}>אשדוד </Text>
              
          </View>
          <View >
            <Image
                  style={{flex:1}}
                  source={require('../../assets/images/shekl.png')}
              />
          </View>
          <View  style={{width:"22%", alignItems:"flex-end"}}>
                  <Text style={styles.paragraph}>40-50 </Text>
              
          </View>
          <View style={{width:"10%", alignItems:"flex-end"}}>
                  <Icon
                      name='alarm'
                      color='blue' />
          </View>
          <View  style={{flex: 1, alignItems:"flex-end"}}>
                  <Text style={styles.paragraph}> חצי משרה </Text>
              
          </View>
      </View>

      <View style={{flex: 1, flexDirection: "row-reverse",padding:15}}>
          <View  style={{width:"40%", alignItems:"center",paddingStart:5}}>
                  <Text style={styles.TextWithBorders}> פרטים נוספים</Text>
              
          </View>
          <View  style={{width:"30%", alignItems:"flex-start"}}>
                  <Text style={styles.TextWithBorders}>מתאים לי</Text>
              
          </View>
          <View  style={{width:"30%", alignItems:"center"}}>
                  <Text style={styles.TextWithBordersShare}>שתף</Text>
              
          </View>

          <View style={styles.IconBookmarkBorder}>
                  <Icon
                      name='bookmark-border'
                      color='blue' />
          </View>

      </View>
      
    </View>
     
  );
}



export default class PartHotj extends React.Component {
    constructor(props){
        super(props) 
    }
  
   
    render() {
        return (
         
          <View style={styles.container}>
            
           

            <FlatList
                style={{backgroundColor:'white'}}
                data={DATA}
                renderItem={({ item }) => <Item  title={item.title}  />}
                keyExtractor={item => item.id}
                
            />
            <View style={{width: '15%', height: 33,alignItems:"flex-start",paddingStart:5}}>
                      <View style={styles.IconKeyboardArrowUp}>
                        <Icon
                          size={18} 
                          name='keyboard-arrow-up'
                          reverse={false}
                          disabledStyle={{ backgroundColor: 'white' }}
                          color='white' />    
                      </View>          
            </View>
           
           
            
          </View>
         
        
          
        );
        }

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',     
    },
    whatshotIcon:{
        fontSize: 21.7,
        fontWeight:'normal',
        letterSpacing:8.79,
        textAlign:"left",
   },
   item: {
    backgroundColor: 'white',
    borderRadius:5,
    shadowColor:'black',
    shadowOffset:{width:0, height:7},
    shadowOpacity:0.43,
    elevation:15,
    width:'91%',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  
  jobDescription:{
    
    padding:10,
    fontSize:15,
    fontWeight:'bold',
  },
  description:{
    fontSize:15,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  },
  paragraph: {
    fontSize: 18,
    color:"black",
    justifyContent: 'center', 
  },
  TextWithBorders:{
    padding:5,
    textAlign: 'center', 
    height:30,
    borderWidth: 2,
    borderColor: '#00aeff',
    borderRadius: 15.8 ,
    backgroundColor : "#FFFFFF",
    color:"#052172",

  },
  TextWithBordersShare:{
    padding:5,
    textAlign: 'center', 
    height:30,
    borderWidth: 2,
    borderColor: '#00aeff',
    borderRadius: 15.8 ,
    backgroundColor : "#FFFFFF",
    color:"gray",

  },
  IconBookmarkBorder:{
    textAlign: 'center', 
    height:30,
    width:"11%", 
    alignItems:"flex-end",
    borderWidth: 2,
    borderColor: '#00aeff',
    borderRadius: 26 ,
    backgroundColor : "#FFFFFF",
  },
  IconKeyboardArrowUp:{
    padding:5,
    fontWeight:'normal',
    letterSpacing:8.79,
    textAlign:"left",
    borderWidth: 2,
    borderColor: '#d436ab',
    borderRadius: 23 ,
    backgroundColor : "#d436ab",


  },
})