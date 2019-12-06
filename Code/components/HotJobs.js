import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

const DATA = [
  {
    image: './images/image1.png',
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

function Item({ title, descriptionForJob ,descriptionForTermsAndBenefits}) {
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
                source={require('./images/image1.png')}
            />

      <View style={{flex: 1, flexDirection: 'row', alignItems:"center",justifyContent: 'center',padding:10,}}>
        <View >
          <Image
                style={{flex:1}}
                source={require('./images/IconOne.png')}
            />
        </View>
        <View >
          <Image
                style={{flex:1}}
                source={require('./images/IconSecond.png')}
            />
        </View>
       
      </View>

      <View  style={{alignItems:"flex-end"}}>
        <Text style={styles.title}>{title}</Text>
        <Text  style={styles.jobDescription}> תיאור תפקיד:</Text>
        <Text  style={styles.description}> {descriptionForJob}  </Text>
        <Text  style={styles.jobDescription}>תנאים והטבות:</Text>
        <Text  style={styles.description}> {descriptionForTermsAndBenefits}  </Text>
        <Text  style={styles.jobDescription}>כישורים נדרשים:</Text>
        <Text  style={styles.description}>כולת עמידה בלחץ ורבוי משימות</Text>
        <Text  style={styles.description}>אנגלית ברמה טובה-יתרון</Text>
        <Text  style={styles.description}>הופעה ייצוגית</Text>
        <Text  style={styles.description}> התחייבות לחצי שנת עבודה </Text>
        <Text  style={styles.description}>תודעת שירות עבודה</Text>
        <Text  style={styles.description}>גביית תשלום במידת הצורך </Text>
      </View>
      // i have here eroor we should to fix it 

      <View style={{flex: 1, flexDirection: "row-reverse"}}>
     
        <View style={{flex: 1, alignItems:"flex-start"}}>
                    <Icon
                        name='room'
                        color='blue' />
                    </View>
          <View  style={{flex: 1, alignItems:"flex-end"}}>
                <Text style={styles.paragraph}>אשדוד </Text>
          
        </View>
        <View >
          <Image
                style={{flex:1}}
                source={require('./images/shekl.png')}
            />
        </View>
     </View>
     
      <View style={{flex: 1, flexDirection: "row-reverse"}}>
        <View  style={{flex: 1, alignItems:"flex-end"}}>
                <Text style={styles.paragraph}>שקל </Text>
          
        </View>
      </View>
</View>
     
  );
}



export class HotJobs extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
          <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item  title={item.title} descriptionForJob={item.descriptionForJob} descriptionForTermsAndBenefits={item.descriptionForTermsAndBenefits}   />}
                keyExtractor={item => item.id}
                
            />


          </View>
        );
        }

}


const styles = StyleSheet.create({
    container: {
        
        flex:1,
        backgroundColor:'white',
        marginTop: Constants.statusBarHeight,
        
       
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

})