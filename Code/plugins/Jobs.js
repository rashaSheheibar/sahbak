import React, { component } from 'react';
import { Share, Platform, StyleSheet, Text, Button, Image, Alert, View, FlatList, TextInput, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements'
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { SahbakDB } from '../SahbakDB/SahbakDB';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";

import Toast from 'react-native-simple-toast';


const windowWidth = Dimensions.get('window').width;
export default class Jobs extends React.Component {

  constructor(props) {
    super(props)
    const displayImage = (this.props.displayImage) ? true : false
    this.state = {
      selected: 1,
      UserInfo:[],
      displayImage: displayImage,
    }

  }
  async LoadUserInfo() {
    return SahbakDB.getInstance().GetUserInfo().then((result) => {
        this.setState({
            UserInfo: result._array[0],
        })
    });
  }
  GetJobBySelectedTab(id) {
    this.refs.child.LoadingProcces(true)
    this.setState({ selected: id })
    this.refs.child.LoadJobs(id);
  }


  render() {

    return (

      <View style={styles.container}>
        <View style={styles.SearchIcon}>

          {(this.state.displayImage) ? <Image style={{ width: "50%", height: 200 }} source={require('../assets/images/sahbak.png')} /> : null}
        </View>
        <View style={styles.Button}>
          {/* <View style={styles.ButtonDiscription}>
            <Text style={styles.textButtom}>תנו לסחבק לעבוד בשבילכם</Text>
          </View> */}
        </View>
        <View style={{ flex: 1, fontSize: 18, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginTop: 20 }}>
          <View style={styles.TextStyle}>
            <Text style={styles.TextDesctiption}
              onPress={() => this.GetJobBySelectedTab(3)}
            >  משרות לפי תחום  </Text>
          </View>

          <View style={styles.TextStyle}>
            <Text style={styles.TextDesctiption}
              onPress={() => this.GetJobBySelectedTab(2)}
            >  משרות לפי מיקום</Text>
          </View>
          <View style={styles.TextStyle}>
            <Text style={styles.TextDesctiption}
              onPress={() => this.GetJobBySelectedTab(1)}
            > משרות חמות</Text>
          </View>
        </View>
        <ScrollView horizontal scrollEnabled={false} style={{ paddingTop: 20 }}>
          <JobList navigation={this.props.navigation} parentScrollView={this.props.parentscrollview} ref="child" SearchBy="HotJob" />
        </ScrollView>

      </View>
    );
  }
}


export class JobList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      SearchBy: this.props.SearchBy,
      dataSource: [],
      job_id: '',
      UserInfo: {

      },
      url: 'https://www.sahbak.co.il/',
      message: '',
      age_id: Math.floor(Math.random() * 8) + 1,
      category_id: Math.floor(Math.random() * 8) + 0,
      region_id: 'null',
      page: Math.floor(Math.random() * 59) + 1,
      totalPages: Math.floor(Math.random() * 60) + 1,
    }
    this.fetchData = this.fetchData.bind(this)
    this.LoadUserInfo = this.LoadUserInfo.bind(this)
    this.GoToPage = this.GoToPage.bind(this)
    this.LoadUserInfo()
  }
  componentDidMount() {
    this.LoadUserInfo().then(() => {
      this.LoadOptions()
    })
  }
  async LoadUserInfo() {
    return SahbakDB.getInstance().GetUserInfo().then((result) => {

      this.setState({
        UserInfo: result._array[0],
      })
    });
  }
  LoadingProcces(status){
    this.setState({
      isLoading: status,
    })
  }
  LoadJobs(selected) {
    this.setState({
      isLoading: true,
    })
    this.LoadUserInfo().then(()=>{
      this.fetchData(selected)
    })
  }

  MyFecthData(RequestUrl, Token, MethodType, params) {
    if (MethodType == 'GET') {
      fetch(RequestUrl, {
        method: MethodType,
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.jobs,
          }, function () { });
        });
    } else {

      fetch(RequestUrl, {
        method: MethodType,
        headers: new Headers({
          'Authorization': Token, 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }),
        
        body:  JSON.stringify({"age_id":params.age_id,"category_id":params['category_id'],"region_id":params['region_id'],"page":1,"extra":false}),
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.data,
          }, function () { });
        });
    }
  }

  fetchData(selected = null) {
    if (this.state.UserInfo == undefined || selected == null || selected == 1) {
      const RequestUrl = 'https://jobus.herokuapp.com/joblist'
      this.MyFecthData(RequestUrl, null, 'GET')

    } else {
      const RequestUrl = 'https://jobus.herokuapp.com/job/search/query'
      var params={age_id:"",category_id:"",region_id:"",page:1,extra:false}
      if(selected==3){
        params.category_id=this.state.UserInfo.Category
      }
      if(selected==2){
        params.region_id=this.state.UserInfo.City
      }
      var token =this.state.UserInfo.Token  
      this.MyFecthData(RequestUrl, token, 'POST', params)
    }
  }


  componentDidMount() {
    this.fetchData()
  }

  GoToPage(page, item) {
    SahbakDB.retrieveData().then((res) => {
      if (res == null && this.props.parentScrollView) {
        this.props.parentScrollView.scrollTo({ y: 0 })
        const msg = "קודם תתחבר למערכת "
        Toast.show(msg, Toast.LONG);
        return;
      }

      this.props.navigation.navigate(page, item, { params: item })
    })
  }
  ShareMessage(jobObj) {
    SahbakDB.retrieveData().then((res) => {
      if (res == null && this.props.parentScrollView) {
        this.props.parentScrollView.scrollTo({ y: 0 })
        const msg = "קודם תתחבר למערכת "
        Toast.show(msg, Toast.LONG);
        return;
      }
      var msg = jobObj.description
      var title = jobObj.title
      Share.share({
        title: title,
        message: msg,
      })



    })
  };
  async SaveData(jobObj) {

    var data = { jobid: jobObj._id };
    try {
      let response = await fetch(
        "https://jobus.herokuapp.com/users/save/job", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Authorization': this.state.UserInfo.Token,
          'Content-Type': 'application/json',

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

  penDialog = (show) => {
    this.setState({ showDialog: show });
  }

  openConfirm = (show) => {
    this.setState({ showConfirm: show });
  }

  openProgress = () => {
    this.setState({ showProgress: true });

    setTimeout(
      () => {
        this.setState({ showProgress: false });
      },
      4000,
    );
  }

  optionYes = () => {
    this.openConfirm(false);
    // Yes, this is a workaround :(
    // Why? See this https://github.com/facebook/react-native/issues/10471
    setTimeout(
      () => {
        Alert.alert("The YES Button touched!");
      },
      300,
    );
  }

  optionNo = () => {
    this.openConfirm(false);
    // Yes, this is a workaround :(
    // Why? See this https://github.com/facebook/react-native/issues/10471
    setTimeout(
      () => {
        Alert.alert("The NO Button touched!");
      },
      300,
    );
  }
  async SuitsMe(jobObj) {
    var data = { 'job_id': jobObj._id };
    var jsondata = JSON.stringify({
      job_id: jobObj._id
    })
    try {
      let response = await fetch(
        "https://jobus.herokuapp.com/users/test/apply-job/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.state.UserInfo.Token,

        },
        body: jsondata

      }).then((response) => response.json())
        .then((responseJson) => {
          this.props.navigation.navigate("SucssesSendJob")
        })
        .catch((error) => {

        });
    } catch (error) { }
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
          style={{
            width: "100%", height: 200, resizeMode: 'cover', borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            overflow: 'hidden',
          }}
          source={{ uri: item.image != '' ? item.image : 'https://www.sahbak.co.il/assets/images/sachback/sahbak_small_cut_w-min.png' }}
        />
        <Image
          style={{ width: "100%", height: 30, resizeMode: 'center', marginTop: 10 }}
          source={{ uri: item._creator.company_logo!=''? item._creator.company_logo:'https://www.sahbak.co.il/assets/images/sachback/sahbak_small_cut_w-min.png' }}
        />

        <View style={{ alignItems: "flex-end", flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.jobDescription}>תיאור תפקיד:</Text>
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

        <View style={{ flex: 1, flexDirection: "row-reverse", padding: 10 }}>
          <TouchableOpacity onPress={() => this.GoToPage('JobDetails', { JobDetail: item })} style={{ width: "100%", alignItems: "center" }}>
            <View >
              <Text style={styles.TextWithBorders}> פרטים נוספים</Text>

            </View>
          </TouchableOpacity>
          <View style={{ width: "30%", alignItems: "flex-start" }}>
            <Text onPress={() => this.SuitsMe(item)} style={styles.TextWithBorders}>מתאים לי</Text>

          </View>

          <View style={{ width: "30%", alignItems: "center" }}>
            <Text onPress={() => this.ShareMessage(item)} style={styles.TextWithBordersShare} >שתף</Text>
          </View>

          <View style={styles.IconBookmarkBorder}>
            <Icon
              name='bookmark-border'
              color='blue'
              onPress={() => this.SaveData(item)}
            />
          </View>

        </View>

      </View>

    )
  }




  render() {
    const windowWidth = Dimensions.get('window').width;
    const isLoading = this.state.isLoading
    return (

      (isLoading)
        ?
        <View style={styles.item}>
          <Text style={{ textAlign: 'center' }}>תן לנו לעבוד בשבלך !!</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        :

        <View>

          <FlatList
            data={this.state.dataSource}
            
            style={{ flex: 1, alignContent: "center", windowWidth }}
            renderItem={this.renderItem}
            keyExtractor={item => item._id}
          />

        </View>


    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',

  },
  SearchIcon: {
    padding: 1,
    alignItems: 'center',
  },
  textButtom: {
    padding: 2,
    color: '#052172',

    textAlign: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 'bold'
  },
  ButtonDiscription: {
    backgroundColor: "#00fef3",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignContent: 'center',
    borderRadius: 15,
  },
  Button: {
    alignItems: "center",
    position: 'absolute',
    textShadowOffset: { width: 4, height: 1 },
    flex: 1,
    top: 80,
    bottom: 0,
    left: 0,
    right: 0,
  },
  TextStyle: {
    width: '33%',
    backgroundColor: '#f5f5f5',
    borderRadius:50, 
   

  },
  TextDesctiption: {
    fontWeight: '800',
    color: "#0A49FB",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold"
  },

  // JOBLIST STYLE
  whatshotIcon: {
    fontSize: 21.7,
    fontWeight: 'normal',
    letterSpacing: 8.79,
    textAlign: "left",
  },
  item: {
    width: windowWidth * 0.93,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.43,
    elevation: 15,
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },

  jobDescription: {
    textAlign: 'right',
    marginEnd: 0,
    paddingTop: 10,
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
    fontSize: 14,
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
  //dialog message
  welcomeText: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 25,
    textAlign: "center",
  },
  instructionsText: {
    color: "#333333",
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
  },
})