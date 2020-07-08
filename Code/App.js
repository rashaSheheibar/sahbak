import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState }  from 'react';
import { Platform,Text, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AppNavigator from './navigation/AppNavigator';
import { Icon} from 'react-native-elements' 
import { MenuProvider,Menu,MenuTrigger,MenuOptions,MenuOption} from "react-native-popup-menu";
import Logo from './plugins/Logo';
import { SahbakDB } from './SahbakDB/SahbakDB';
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';


export default function App(props) {
  
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  let NavHnalder;
 
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
        locations={[0, 0.1, 1]}
        colors={['#00f4ff', '#00fef3', '#223dc7']}
        style={styles.linearGradient,{flex:1}}>
         
        <MenuProvider style={{ paddingTop: 30,height:10,flex:1}}> 
        <Menu>
                <MenuTrigger style={{ flexDirection: 'row', justifyContent: 'space-between', background: 'black' }} >
                    <Icon raised name='menu' />
                     <Logo/>
                </MenuTrigger  >
                
                <MenuOptions style={{ padding: 10, backgroundColor: '#0a49fb' }}>
                    <MenuOption >
                        <Text style={styles.menuContent}
                            onPress={() =>{
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate("MainPage");
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              }
                            }
                        >דף בית</Text>
                    </MenuOption>
                    <MenuOption >
                        <Text style={styles.menuContent}
                            onPress={() =>{
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate("AboutUs");
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              } 
                            }
                        >מי אנחנו</Text>
                    </MenuOption>
                    <MenuOption >
                        <Text style={styles.menuContent}
                            onPress={() => {
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate('Courses')
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              }
                              
                             }
                        >קורסים ולימודים</Text>
                    </MenuOption>
                    <MenuOption>
                        <Text style={styles.menuContent}
                            onPress={() =>  {
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate('Favorit')
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              }
                            }
                        >עבודה מועדפת</Text>
                    </MenuOption>
                    <MenuOption >
                        <Text style={styles.menuContent}
                            onPress={() => {
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate('Profile')
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              }
                              }
                        >הפרופיל שלי</Text>
                    </MenuOption>
                    <MenuOption >
                        <Text style={styles.menuContent}
                            onPress={() => {
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate('SaveJobs')
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              }
                              
                             }
                        >משרות שמורות</Text>
                    </MenuOption>
                    <MenuOption value={"Logout"}>
                        <Text style={styles.menuContent}

                            onPress={() =>{
                              SahbakDB.retrieveData().then((res)=>{
                                  if(res!=null){
                                    NavHnalder._navigation.navigate('Chatboot')
                                  }else{
                                    const msg="קודם תתחבר למערכת "
                                    Toast.show(msg, Toast.LONG);
                                    NavHnalder._navigation.navigate('SingIn')
                                  }
                                })
                              }
                               }

                        > הודעות </Text>

                    </MenuOption>
                    <MenuOption value={"Logout"}>
                        <Text style={styles.menuContent}
                          onPress={
                            ()=>{
                              SahbakDB.getInstance().ClearUserInfo().then((res)=>{
                                let keys = ['JWT'];
                                  AsyncStorage.multiRemove(keys, (err) => {
                                    
                                  });
                                NavHnalder._navigation.navigate('SingIn')
                              });
                            }
                          }
                        >  יציאה</Text>
                             
                    </MenuOption>
                  

                </MenuOptions>

            </Menu>


        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <AppNavigator ref={navigatorRef => { NavHnalder=navigatorRef }}  />
        </MenuProvider>
      </LinearGradient>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:0,
    padding:0,
    margin:0

  },
  menuContent: {
    color: "white",
    fontWeight: "bold",
    padding: 2,
    fontSize: 16
  },
  TextLogInstyle:{
    margin:10,
    marginTop:17,
    color:'white', 
    fontWeight:'bold',
    fontSize:13,
    textAlign:'center'
  },
  ViewLogInText:{
    flex:1,
    borderRadius:25,
    borderWidth:1, 
    backgroundColor:'#252bb0',
    alignItems:'center', 
    justifyContent: 'flex-start'
  },
 
});
