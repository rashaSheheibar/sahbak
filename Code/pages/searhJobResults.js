import React from 'react';
import { Share, StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SahbakDB } from '../SahbakDB/SahbakDB';
import Toast from 'react-native-simple-toast';


export default class searhJobResults extends React.Component {
    constructor(props){
        
        super(props)
        
       this.state = {
            isLoading: true,
            SearchBy: this.props.SearchBy,
            dataSource: [],
            UserInfo: {

            },
            params:{
              age_id:this.props.navigation.state.params.AgeList,
              category_id:this.props.navigation.state.params.CategoryList,
              region_id:this.props.navigation.state.params.regions,
              page:1,
              extra:false,
            }
        }
        
        this.FunctionGetData=this.FunctionGetData.bind(this)
        this.LoadUserInfo = this.LoadUserInfo.bind(this)
        this.LoadUserInfo().then(()=>{
          this.FunctionGetData()
        })
      }

    async LoadUserInfo() {
        return SahbakDB.getInstance().GetUserInfo().then((result) => {
            
            this.setState({
                UserInfo: result._array[0],
            })
           
        });
    }

    FunctionGetData() {
        let params=this.state.params 
        console.log(params)
        const RequestUrl = 'https://jobus.herokuapp.com/job/search/query'
        fetch(RequestUrl, {
        method: 'POST',
        headers: new Headers({
          'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnsiX2lkIjoxLCJmaXJzdF9uYW1lIjoxLCJlbWFpbCI6MSwicGhvbmUiOjEsInJvbGUiOjEsImltYWdlIjoxLCJnZW5kZXIiOjEsImJpcnRoZGF5IjoxLCJjaXR5IjoxLCJwYXNzd29yZCI6MX0sImdldHRlcnMiOnt9LCJ3YXNQb3B1bGF0ZWQiOmZhbHNlLCJhY3RpdmVQYXRocyI6eyJwYXRocyI6eyJyb2xlIjoiaW5pdCIsImdlbmRlciI6ImluaXQiLCJjaXR5IjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsInBob25lIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsImZpcnN0X25hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsicm9sZSI6dHJ1ZSwiZ2VuZGVyIjp0cnVlLCJjaXR5Ijp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmUiOnRydWUsImVtYWlsIjp0cnVlLCJmaXJzdF9uYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsicm9sZSI6InVzZXIiLCJnZW5kZXIiOnRydWUsImNpdHkiOiLXl9eZ16TXlCIsInBhc3N3b3JkIjoiJDJhJDEwJHhQdlBEWmlUbE1Rb0VneTJHZkMxd08zVlVPZHFwbE1KT294Z25hT3c2TkJFdVRqZHZkOWdlIiwicGhvbmUiOiIwNTQ1NzM0NTU0IiwiZW1haWwiOiJyYXNoYS4xNS45MEBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoi16jXqdeQIiwiX2lkIjoiNWVmNWZmYWY3YjA1OTkwMDE2N2NiMjJiIn0sImlhdCI6MTU5MzUzMjYyOSwiZXhwIjoxNTk0MTM3NDI5fQ.9QkNcCOaps4a2BpbIX_rKuhE--SxW8A8YV_Wjf4y1Es', 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }),
        body: JSON.stringify({"age_id":params.age_id,"category_id":params.category_id,"region_id":params.region_id,"page":1,"extra":false})
        
      }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function () {});
      });
    }

    async SaveData(jobObj) {
      var data = {jobid:jobObj._id};
      try {
        let response = await fetch(
          "https://jobus.herokuapp.com/users/save/job", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Authorization': this.state.UserInfo.Token, 
            'Content-Type':'application/json',
          
          },
          body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((responseJson) => {
          Toast.show("המשרה נשמרה בהצלחה", Toast.LONG);
          return responseJson;
        })
        .catch((error) => {
        });
    } catch (error) {
  
    }
    }

    ShareMessage(jobObj){
      var msg=jobObj.description
      var title=jobObj.title
      Share.share({
        title:title,
        message: msg,
      })     
    };
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
    renderItem = ({ item }) => {

        return (
    
          <View style={styles.item}>
    
            <View style={{ width: '10%', height: 20, alignItems: "flex-start" }}>
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
              style={{ width: "100%", height: 200, resizeMode: 'cover',borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              overflow: 'hidden', }}
              source={{ uri: item.image!=""?item.image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8NLdQraRmmuIcSMzh0u9lnLcVvVwRkUc44Q&usqp=CAU' }}
            />
            <Image
                style={{ width: "100%", height: 50, resizeMode: 'center',marginTop:10 }}
                source={{ uri: item._creator.company_logo!=""?item._creator.company_logo:'https://www.sahbak.co.il/assets/images/sachback/sahbak-min.png' }}
              />
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.jobDescription}> תיאור תפקיד:</Text>
              <Text style={styles.description}>{item.description}</Text>
             
    
            </View>
            <View style={{ flex: 1, flexDirection: "row-reverse", paddingTop: 15 }}>
              <View style={{ width: "10%", alignItems: "flex-end" }}>
                <Icon
                  name='room'
                  color='blue' />
              </View>
              <View style={{ width: "20%", alignItems: "flex-end" }}>
                <Text style={styles.paragraph}>{item.location} </Text>
    
              </View>
              <View >
                {/* <Image
                  style={{ flex: 1 }}
                  source={require('../assets/images/shekl.png')}
                /> */}
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
    
            <View style={{ flex: 1, flexDirection: "row-reverse", padding: 10 }}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('JobDetails', {
                    JobDetail:item,
                    
 
                  });}}>
                <View style={{ flex:1, alignItems: "center" }}>
                <Text  style={styles.TextWithBorders}> פרטים נוספים</Text>
                </View>
                </TouchableOpacity>
              <View style={{ width: "30%", alignItems: "flex-start" }}>
                
                 <Text  onPress={()=>this.SuitsMe(item)}style={styles.TextWithBorders} style={styles.TextWithBorders}
                 
                 >מתאים לי</Text>
                  
                </View>
                
              <View style={{ width: "30%", alignItems: "center" }}>
                  <TouchableOpacity onPress={()=>this.ShareMessage(item)}>
                    <Text style={styles.TextWithBordersShare} >שתף</Text>
                  </TouchableOpacity>
                    
              </View>
    
              <View style={styles.IconBookmarkBorder}>
                <Icon
                  name='bookmark-border'
                  color='blue'
                  onPress={()=>this.SaveData(item)}
                   />
              </View>
    
            </View>
    
          </View>
        )
      }
    
   
    render() {
        const isLoading = this.state.isLoading
        return (
            (isLoading)
            ?
            <View style={styles.item}>
                <Text style={{ textAlign: 'center' }}>תן לנו לעבוד בשבלך !!</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
                :
              <View style={styles.container}>
                <FlatList data={this.state.dataSource} style={{ flex: 1, alignContent: "center" }} renderItem={this.renderItem} keyExtractor={item => item._id} />
            </View>  
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
  
    },
    whatshotIcon: {
      fontSize: 21.7,
      fontWeight: 'normal',
      letterSpacing: 8.79,
      textAlign: "left",
    },
    item: {
      backgroundColor: 'white',
      borderRadius: 5,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.43,
      elevation: 15,
      width: '91%',
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
    stretch: {
      width: 50,
      height: 50,
      resizeMode: 'stretch'
    },
    paragraph: {
      fontSize: 12,
      color: "black",
      justifyContent: 'center',
    },
    TextWithBorders: {
      padding: 5,
      fontSize:14,
      textAlign: 'center',
      height: 30,
      borderWidth: 2,
      borderColor: '#00aeff',
      borderRadius: 15.8,
      backgroundColor: "#FFFFFF",
      color: "#052172",
  
    },
    TextWithBordersShare: {
      padding: 5,
      textAlign: 'center',
      height: 30,
      borderWidth: 2,
      borderColor: '#00aeff',
      borderRadius: 15.8,
      backgroundColor: "#FFFFFF",
      color: "gray",
  
    },
    IconBookmarkBorder: {
      textAlign: 'center',
      height: 30,
      width: "11%",
      alignItems: "flex-end",
      borderWidth: 2,
      borderColor: '#00aeff',
      borderRadius: 26,
      backgroundColor: "#FFFFFF",
    },
    IconKeyboardArrowUp: {
      padding: 5,
      fontWeight: 'normal',
      letterSpacing: 8.79,
      textAlign: "left",
      borderWidth: 2,
      borderColor: '#d436ab',
      borderRadius: 23,
      backgroundColor: "#d436ab",
  
    },
  })
  
  