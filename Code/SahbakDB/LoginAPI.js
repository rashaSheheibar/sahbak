import React from 'react';
import * as Facebook from 'expo-facebook';
import { SahbakDB } from '../SahbakDB/SahbakDB';
import Toast from 'react-native-simple-toast';

export class LoginAPI extends React.Component {
    static myInstance = null; 
    constructor(props){
        super(props)
        this.state={
          UserInfo:[],
      };
      this.UpdateInputFeild = this.UpdateInputFeild.bind(this)    
    }
   

    UpdateInputFeild(data,textFeild,userId){
       SahbakDB.getInstance().UpdateUserInfoByField(data,textFeild,userId).then((response)=>{ 
        
       })
   }
    static getInstance() { if(LoginAPI.myInstance == null){ LoginAPI.myInstance = new LoginAPI(); } return this.myInstance; }

    async FaceBookLogin () {
        let userInfo =null
        try {
          await Facebook.initializeAsync('2480992815545129');
          const {type,token,expires,declinedPermissions,} = await Facebook.logInWithReadPermissionsAsync('2480992815545129', {permissions: ['public_profile'],});
          
          
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            return fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
              .then(response => response.json())
              .then(data => {
                return data
              })
              .catch(e => console.log(e))
          } else {
            
          }
        } catch ({ message }) {
          Toast.show("יש בעיית התחברות ערך פייסבוק", Toast.LONG);
         
        }
        return null
      }
    

}