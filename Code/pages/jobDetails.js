import React from 'react';
import { Share, StyleSheet, Text,Image, Alert, View, ScrollView, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SahbakDB } from '../SahbakDB/SahbakDB';
import Toast from 'react-native-simple-toast';

export default class jobDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      UserInfo: {

      },
      SearchBy: this.props.SearchBy,
      dataSource: []
    }
    this.LoadUserInfo = this.LoadUserInfo.bind(this)
    this.LoadUserInfo()

    try {
      const item=this.props.navigation.state.params.JobDetail
      this.state.item=item
    } catch (error) {
      
    }
  }
  async LoadUserInfo() {
    return SahbakDB.getInstance().GetUserInfo().then((result) => {
        
        this.setState({
            UserInfo: result._array[0],
        })
    });
}
  ShareMessage(jobObj){
    
    var msg=jobObj.description
    var title=jobObj.title
    Share.share({
      title:title,
      message: msg,
  }) 
};

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
  render() {
    item=this.state.item;
    
    const isLoading = false
    return (
      (isLoading||item==null)
        ?
     
        <View style={styles.item}>
          <Text style={{ textAlign: 'center' }}>תן לנו לעבוד בשבלך !!</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        :
      <ScrollView style={styles.scrollView}>
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
          source={{ uri: item.image}}
        />
        <Image
                style={{ width: "100%", height: 40, resizeMode: 'center',marginTop:10 }}
              source={{ uri: item._creator.company_logo}}
 
            />
        
        <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'center', padding: 10, }}>
     
          <View >
            <Image
              style={{ flex: 1, resizeMode: 'cover' }}

            />

          </View>
        </View>
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

        <View style={{ flex: 1,width:'100%', flexDirection: "row-reverse",justifyContent:'space-between',paddingLeft:0,paddingRight:15,alignContent:'flex-end' }}>
          
          <View style={{ width: "30%", alignItems: "flex-start" }}>
          <Text  onPress={()=>this.SuitsMe(item)}style={styles.TextWithBorders}>מתאים לי</Text>
            

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
      </ScrollView>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  whatshotIcon: {
    fontSize: 21.7,
    fontWeight: 'normal',
    letterSpacing: 8.79,
    textAlign: "left",
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.43,
    elevation: 15,
    flex:1,
    padding: 30,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    marginTop:-15,
    fontSize: 20,
    
  },
  ViewJobDescroption:{
    marginLeft: 0,
    marginRight:30
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
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
})

