import React  from 'react';
import {StyleSheet, Text,View,ScrollView,FlatList,Image,ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import Footer from '../plugins/Footer';
import { Dimensions } from 'react-native';
import Toast from 'react-native-simple-toast';
import { SahbakDB } from '../SahbakDB/SahbakDB';

const windowWidth = Dimensions.get('window').width;
export default class saveJobs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      UserInfo: {

      },
      itemUniqeId:0,
      dataSource:[],
      isLoading: true,
      value: false,
    }  
    this.LoadUserInfo = this.LoadUserInfo.bind(this)
    this.FunctionGetData=this.FunctionGetData.bind(this)
    this.LoadUserInfo()
    this._renderItem=this._renderItem.bind(this)
  }
  async LoadUserInfo() {
    return SahbakDB.getInstance().GetUserInfo().then((result) => {
        
        this.setState({
            UserInfo: result._array[0],
        })
        this.FunctionGetData()
    });
    
}
  FunctionGetData(){
    const data = {Authorization:this.state.UserInfo.Token};   
  return fetch("https://jobus.herokuapp.com/users/save/job", {
       method: "GET",
       headers: {
        'Content-Type':'application/json',
        //'Host':'calculated when request is sent',
        'Authorization': this.state.UserInfo.Token, 
        
      },
    }).then((response) => response.json())
      .then((responseJson) => {  
        
        this.setState({'dataSource': responseJson.job.slice(0, 10), isLoading: false, });
      })
      .catch((error) =>{

      });
    }
  OnPresHere(){this.setState({value:!this.state.value})}

  async DeleteData(jobObj) { 
    const url='https://jobus.herokuapp.com/users/save/job/'+jobObj._id
    return fetch(url, {
       method: "DELETE",
       headers:{
        Authorization:this.state.UserInfo.Token
       }   
    })
      .then((responseJson) => {    
        this.FunctionGetData()    
      })
      .catch((error) =>{
      
      });
    }
    async SuitsMe(jobObj){
      var data ={'job_id':jobObj._id};
      var jsondata=JSON.stringify({
        job_id:jobObj._id
      }) 
      try {
        let response = await fetch(
          "https://jobus.herokuapp.com/users/test/apply-job/", {
          method: "POST",
          headers: {
            'Content-Type':'application/json',
            'Authorization': this.state.UserInfo.Token, 
            
          },
          body: jsondata
        
        }).then((response) => response.json())
        .then((responseJson) => {
          this.props.navigation.navigate("SucssesSendJob")
        })
        .catch((error) => {
          
        });
        } catch (error) {}
      }
    
  
  _renderItem({ item }) {
    
    var KeyGen=this.state.itemUniqeId++
    KeyGen="prd"+KeyGen
    if(item==null) return 
    return (<View key={KeyGen} style={styles.item}>
      <Image
          style={{ width: "100%", height: 200, resizeMode: 'cover',borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: 'hidden', }}
          source={{ uri: item.image }}
        />
         <Image
          style={{ width: "100%", height: 30, resizeMode: 'center',marginTop:10 }}
          source={{ uri: item._creator.company_logo }}
        />
         <View style={{ alignItems: "flex-end",flex:1}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.jobDescription}>מספר משרה:</Text>
          <Text style={styles.description}>{item._id}</Text>
          <Text style={styles.jobDescription}>שם החברה:</Text>
          <Text style={styles.description}>{item._creator.name}</Text>
          <Text style={styles.jobDescription}>תיאור תפקיד:</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.jobDescription}>כישורים נדרשים:</Text>
          <Text style={styles.description}>{item.require}</Text>
          <Text style={styles.jobDescription}>דרישות גיל:</Text>
          <Text style={styles.description}>{item.ages}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row-reverse", paddingTop: 10 }}>
          <View style={{ width: "10%", alignItems: "flex-end" }}>
            <Icon
              name='room'
              color='blue' />
          </View>
          <View style={{ width: "20%", alignItems: "flex-end" }}>
            <Text style={styles.paragraph}>{item.location} </Text>

          </View>
          <View >
            <Image
              style={{ flex: 1 }}
              source={require('../assets/images/shekl.png')}
            />
          </View>
          <View style={{ width: "23%", alignItems: "flex-end" }}>
            <Text style={styles.paragraph}>{item.salary}</Text>

          </View>
          <View style={{ width: "10%", alignItems: "flex-end" }}>
            <Icon
              name='alarm'
              color='blue' />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={styles.paragraph}> {item.availability}  </Text>

          </View>
        </View>
        <View style={{ flex: 1,width:'100%', flexDirection: "row-reverse",justifyContent:'space-between',paddingTop:10,paddingLeft:0,paddingRight:15,alignContent:'flex-end' }}>
          <View style={{ width: "50%", alignItems: "center" }}>
                  <TouchableOpacity >
                      <Text onPress={()=>this.SuitsMe(item)}style={styles.TextWithBordersShare} >מתאים לי</Text>
                  </TouchableOpacity>

          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
                  <TouchableOpacity onPress={()=>this.DeleteData(item)}>
                      <Text style={styles.TextWithBordersShare} >מחק</Text>
                  </TouchableOpacity>

        </View>
      </View>

          

       


    </View>
    
  );
    }



  

  render() {
    const windowWidth = Dimensions.get('window').width;
    const isLoading = this.state.isLoading
    return (
      <View style={{flex:1}}>
      {
      (isLoading)
        ?
        <View style={styles.item}>
          <Text style={{ textAlign: 'center' }}>תן לנו לעבוד בשבלך !! המתינו עד לטעינת הנתונחם</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        :
    
      <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }} locations={[0, 0.1, 1]} colors={['#00f4ff', '#00fef3', '#223dc7']} style={styles.linearGradient,{flex:1}}> 
      <ScrollView horizontal scrollEnabled={false} style={{paddingTop:20}}>
      <View style={styles.container}>
         
             
                <View style={styles.ViewTitle}>
                    <Text style={styles.TitleDescribtion} >משרות שמורות </Text>
                </View>
               
              
          <View style={{paddingBottom:50}}>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={()=>"prd"+this.state.itemUniqeId++}
            renderItem={this._renderItem}
            style={{ flex: 1, alignContent: "center", windowWidth }}
            
          />
          </View>      
       
      
           
       
      </View>
      
      </ScrollView>
      <Footer/> 
      </LinearGradient> 
    
  }
        
 
      </View>
   
      );
  }
}
const styles = StyleSheet.create({ 
  container:{flex:1,alignItems:"center",alignContent:'center'},
  TitleDescribtion:{paddingTop:10,alignItems:'center',alignContent:'center',fontSize: 17,color:'white',fontWeight:'bold',},
  ViewTitle:{width: '100%', height: 40,alignItems:"center",marginLeft:'2%'},
  ViewDescription:{marginStart:40,marginEnd:40,height:90,alignItems:"center",alignContent:'center'},
  TextDescription:{color:'#052172',fontWeight:'bold',textAlign: 'center'},
  item: {
    width: windowWidth * 0.93,
    paddingStart:10,
    paddingEnd:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.43,
    elevation: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },

  jobDescription: {
    textAlign: 'right',
    marginEnd:0,
    paddingTop:10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
  },
  TextWithBordersShare: {
    padding: 5,
    textAlign: 'center',
    height: 30,
    borderWidth: 2,
    borderColor: '#00aeff',
    borderRadius: 15.8,
    backgroundColor: "#FFFFFF",
    color: "#052172",

  },
})