import React  from 'react';
import {StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';
import { LinearGradient } from 'expo-linear-gradient';




const steps = [
    {
      id: '0',
      message: ' אנחנו כאן בשבלך ',
      trigger: '1',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
           
    },
    {
      id: '1',
      message: ({ previousValue, steps }) => 'את/ה צריך/ה עזרה?',
      trigger: '2',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
      
    },
    {
      id: '2',
      
      options:[
        {value:'לא',label:'לא',trigger:'3'},
        {value:'כן',label:'כן',trigger:'4'}
        
      ]
      
    },
    {
      id: '3',
      message:'בחרת/ה לא !!',
      trigger: '12',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '4',
      message:'בחרת/ה כן !!',
      trigger: '5',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '5',
      message: 'את/ה מחפש/ת עבודה?',
      trigger: '6',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '6',
      options:[
        {value:'לא',label:'לא',trigger:'7'},
        {value:'כן',label:'כן',trigger:'8'}
        
      ]
    },
    {
      id: '7',
      message:'בחרת/ה לא !!',
      trigger: '14',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },

    {
      id: '8',
      message:'בחרת/ה כן !!',
      trigger: '10',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '9',
      message:'במה נוכל לעזור לך?',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
      end: true,
    },
    {
      id: '10',
      message: 'תלך/י לדף הבית ותתחיל/י לחפש משרה',
      trigger: '12',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
   
    {
      id: '12',
      message: 'את/ה יכול/ה להרגיש בנוח ולבקש עזרה',
      trigger: '13',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '13',
      message: 'אנחנו כאן בשבלך',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
      end: true,
    },
    {
      id: '14',
      message:'את/ה צריך/ה עזרה בבנית קורות חיים?',
      trigger: '15',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '15',
      options:[
        {value:'לא',label:'לא',trigger:'16'},
        {value:'כן',label:'כן',trigger:'17'}
        
      ]
    },
    {
      id: '16',
      message:'בחרת/ה לא !!',
      trigger: '12',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },

    {
      id: '17',
      message:'בחרת/ה כן !!',
      trigger: '18',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
    {
      id: '18',
      message:'תלך/י לדף הפרופיל ותתחיל/י להזין את הפרטים שלך',
      trigger: '12',
      avatar: 'https://res.cloudinary.com/hljdjmqlh/image/upload/c_scale,h_256/v1525271674/01_pjcyjz.jpg',
    },
  
  ];
  <ChatBot steps={steps} />
  
export default class chatboot extends React.Component {
  
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    
        this.state={
            picSource: null,
            emailaddress:''
        }
       
    };
   
    render() {
        
        return (
          <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                locations={[0, 0.1, 1]}
                colors={['#00f4ff', '#00fef3', '#223dc7']}
                style={styles.linearGradient,{flex:1}}> 
          <View style={styles.container}>
           
               <Text style={styles.TxtStyle}>הודעות</Text>
              <ChatBot styles={{flex:1}} steps={steps} />     
           
            
           </View>
           </LinearGradient>

    )
    
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:5,
        padding:0,
        width:"100%",
        height:330,
        
        
       
    },
    TxtStyle:{
      fontSize: 19, 
      textShadowOffset: { width: 1, height: 4 },
      textShadowColor: '#0a49fb',
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign:"center",
      padding:10,
    },
    layoutSearch:{
      flexDirection:'column',
      flex:1,
     
    },
    innerAeraView: { 
      paddingTop:5,
      flex: 1,
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
    
    buttonContainer: {
      margin: 30, 
      
      
    },
    
    
   
  });
  