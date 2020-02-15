import React ,{component} from 'react';
import { Platform , StyleSheet, Text, Button, Image ,Alert, View,FlatList, TextInput,ScrollView } from 'react-native';
import { Icon,SocialIcon ,CheckBox} from 'react-native-elements'  
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Footer from '../Plugins/Footer'
import TopicC from '../Plugins/TopicWithoutPic'
import HotJobsPartp from '../Plugins/PartHotj'
import LogoWithCloseP from '../Plugins/LogoWithClose'
import { StackNavigator } from 'react-navigation';

export default class ProfilePart extends React.Component {

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
                        height: 2000,
                    }}
                    /> 

            
             <ScrollView>
                <View style={{width: '100%', height: 40,alignItems:"center",paddingTop:10}}>
                    <Text style={styles.TitleDescribtion} >הפרופיל שלי </Text>
                </View>
                

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '80%', height: 20}} >
                        <Text style={styles.SubTitle}>  תעזרו לנו להכיר אתכם טוב יותר </Text>
                    </View>
                    <View style={{width: '10%', height: 20}} >
                            <View style={styles.loveIcon}>
                                <Icon
                                size={20}  
                                name='favorite'
                                color='#f60f69' />
                            </View>
                    </View>
                    
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '95%', height: 20}} >
                                <View style={styles.CreateIcon}>
                                    <Icon
                                    size={20}  
                                    name='create'
                                    color='white' />
                                </View>
                    </View> 
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignContent:'space-between' }}>
                    <View style={{width: '45%', height: 120}} >
                        <View style={styles.AddImage}>
                            <Image
                                style={{ flex: 1 }}
                                source={require('../../assets/images/AddImage.png')} />
                        </View>
                        <View style={{width: '100%', height: 20,alignItems:'center'}} >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '80%', height: 20}} >
                                <Text style={{fontWeight:'bold',alignItems:'flex-start',color:'white',fontSize: 13}}> 
                                 הוסף תמונה  </Text>
                            </View>
                            <View style={{width: '20%', height: 20}} >
                                    <View style={styles.loveIcon}>
                                        <Icon
                                        size={20}  
                                        name='add'
                                        color='white' />
                            </View>
                    </View>
                    
                </View>
                          
                
                    </View>
                       
                    </View>
                    <View style={{width: '50%', height: 120}} >     
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <View style={{width: '100%', height: 20}} >
                                <Text style={styles.SubTitle}>  ליאור קינן    </Text>      
                            </View>
                            <View style={{width: '100%', height: 20}} >
                                <Text style={styles.SubTitle}> lior@gmail.com  </Text>      
                            </View>
                            <View style={{width: '100%', height: 20}} >
                                <Text style={styles.SubTitle}> ירושלים והסביבה  </Text>      
                            </View>
                            <View style={{width: '100%', height: 20}} >
                                <Text style={styles.SubTitle}> מעוניינת לעבוד באבטחה   </Text>      
                            </View>  
                        </View>       
                    </View>
                  
                    
                </View>


                <View style={{flex: 1, flexDirection: 'row-reverse', alignContent:'space-between' }}>
                    <View style={{width: '45%', height:30}} >
                        
                      <View style={{width: '100%', height: 20,alignItems:'center'}} >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '80%', height: 20}} >
                                <Text style={{fontWeight:'bold',alignItems:'flex-start',color:'white',fontSize: 13}}> 
                                  השכלה:   </Text>
                            </View>
                            <View style={{width: '20%', height: 20}} >
                                    <View style={styles.loveIcon}>
                                        <Icon
                                        size={22}  
                                        name='add'
                                        color='#f60f69' />
                                    </View>
                            </View>
                    
                        </View>
                      </View>  
                    </View>
                    <View style={{width: '50%', height: 35}} >     
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <View style={{width: '100%', height: 20,borderColor:'white',borderWidth:1}} >
                            <TextInput 
                                  placeholder =  "בחר" 
                                  size={8}
                                  placeholderTextColor = "white"
                                  secureTextEntry={true}
                                  style={styles.TextInputStyle}
                                  underlineColorAndroid='transparent'
                                    />     
                            </View>
                        </View>       
                    </View>
                  
                    
                </View>

                <View style={{flex: 1, flexDirection: 'row-reverse', alignContent:'space-between' }}>
                    <View style={{width: '45%', height: 40}} >
                        
                      <View style={{width: '100%', height: 20,alignItems:'center'}} >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '80%', height: 20}} >
                                <Text style={{fontWeight:'bold',alignItems:'flex-start',color:'white',fontSize: 13}}> 
                                תפקיד בצבא:   </Text>
                            </View>
                            <View style={{width: '20%', height: 20}} >
                                    <View style={styles.loveIcon}>
                                        <Icon
                                        size={22}  
                                        name='add'
                                        color='#f60f69' />
                                    </View>
                            </View>
                    
                        </View>
                      </View>  
                    </View>
                    <View style={{width: '50%', height: 30}} >     
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <View style={{width: '100%', height: 20,borderColor:'white',borderWidth:1}} >
                            <TextInput 
                                  placeholder =  "בחר" 
                                  size={8}
                                  placeholderTextColor = "white"
                                  secureTextEntry={true}
                                  style={styles.TextInputStyle}
                                  underlineColorAndroid='transparent'
                                    />     
                            </View>
                        </View>       
                    </View>  
                </View>
                <View style={{flex: 1, flexDirection: 'row-reverse', alignContent:'space-between' }}>
                    <View style={{width: '59%', height: 30}} >
                        
                      <View style={{width: '100%', height: 20,alignItems:'center'}} >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '80%', height: 20}} >
                                <Text style={{fontWeight:'bold',alignItems:'flex-start',color:'white',fontSize: 13}}> 
                                תכונות שהכי מתארות אותך:   </Text>
                            </View>
                            <View style={{width: '20%', height: 20}} >
                                    <View style={styles.loveIcon}>
                                        <Icon
                                        size={22}  
                                        name='add'
                                        color='#f60f69' />
                                    </View>
                            </View>
                    
                        </View>
                      </View>  
                    </View>
                  </View>
               
                <View style={{flex: 1, flexDirection: 'row',justifyContent:"space-between"}}>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  מצחיק </Text>
                    </View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  דייקנות </Text>
                    </View>
                    <View style={{width:'25%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}> שאיפה לגדולות </Text>
                    </View>
                    <View style={{width:'30%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>מוסר עבודה גבוהה</Text>
                    </View>
                </View>
                <View style={{paddingTop:10,flex: 1, flexDirection: 'row',justifyContent:"space-between"}}>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  אחראיות </Text>
                    </View>
                    <View style={{width:'20%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  חושב קדימה </Text>
                    </View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  מתקתק </Text>
                    </View>
                    <View style={{width:'26%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>יודע לקבל ביקורת </Text>
                    </View>
                </View>
                <View style={{paddingTop:10,flex: 1, flexDirection: 'row-reverse'}}>
                    <View style={{width:'20%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  עבודת צוות</Text>
                    </View>
                    <View style={{paddingStart:10}}></View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  מנהיגות </Text>
                    </View>
                   
                </View>

                <View style={{paddingTop:10,flex: 1, flexDirection: 'row-reverse', alignContent:'space-between' }}>
                    <View style={{width: '59%', height: 30}} >
                        
                      <View style={{width: '100%', height: 20,alignItems:'center'}} >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '80%', height: 20}} >
                                <Text style={{fontWeight:'bold',alignItems:'flex-start',color:'white',fontSize: 13}}> 
                                תחומי עניין:  </Text>
                            </View>
                            <View style={{width: '20%', height: 20}} >
                                    <View style={styles.loveIcon}>
                                        <Icon
                                        size={22}  
                                        name='add'
                                        color='#f60f69' />
                                    </View>
                            </View>
                    
                        </View>
                      </View>  
                    </View>
                  </View>
               
                <View style={{flex: 1, flexDirection: 'row',justifyContent:"space-between"}}>
                    <View style={{width:'13%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  אומנות </Text>
                    </View>
                    <View style={{width:'25%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  סרטים וקולנוע </Text>
                    </View>
                    <View style={{width:'13%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  ספורט  </Text>
                    </View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>מחשבים  </Text>
                    </View>
                </View>
                <View style={{paddingTop:10,flex: 1, flexDirection: 'row',justifyContent:"space-between"}}>
                    <View style={{width:'13%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  אופנה </Text>
                    </View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>   תאטרון </Text>
                    </View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  מוסיקה </Text>
                    </View>
                    <View style={{width:'20%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>אוכל ובישול   </Text>
                    </View>
                </View>
                <View style={{paddingTop:10,flex: 1, flexDirection: 'row-reverse'}}>
                    <View style={{width:'10%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  טבע </Text>
                    </View>
                    <View style={{paddingStart:10}}></View>
                    <View style={{width:'15%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  קריאה </Text>
                    </View>
                    <View style={{paddingStart:10}}></View>
                    <View style={{width:'13%', height: 20, backgroundColor: '#052172'}} >
                       <Text style={styles.SubTitle}>  גלישה </Text>
                    </View>
                   
                </View>
                <View style={{paddingTop:30}}></View>
                <View style={styles.SaveView} >
                       <Text style={styles.SaveText}>  שמור </Text>
                    </View>

             </ScrollView>
    </View>
      
    );
}

}





const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'white',  
      alignContent:'center',
      alignItems:'center',   
  },
  TitleDescribtion:{
    alignItems:'center',
    alignContent:'center',
    fontSize: 17,
    color:'white',
    fontWeight:'bold',
  },
  SubTitle:{
    textAlign: 'right',
    color:'white',
    fontSize: 13,  
  },
  SaveText:{
    paddingTop:5,
    textAlign: 'center',
    color:'white',
    fontSize: 15,    
  },
  loveIcon:{
    alignItems:'flex-start', 
      
  },
  CreateIcon:{
    alignItems:'flex-end', 
  },
  AddImage:{
    width: '10%', 
    height: 60,
    padding:1,
    alignItems:'center',
    fontWeight:'bold',
  },
  SearchIcon:{
    padding:1,
    alignItems:'center',
  },
  TextInputStyle:{
    textAlign: 'right',
    paddingEnd:10,
  },
  SaveView:{
    width:'20%', 
    height: 30, 
    backgroundColor: '#d436ab',
    alignItems:'center',
    borderRadius:15,
  },

 
})