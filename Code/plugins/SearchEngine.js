import React from 'react';
import { StyleSheet, Text, Button,  View ,Picker, } from 'react-native';
import { Icon } from 'react-native-elements'
import { SahbakDB } from '../SahbakDB/SahbakDB';

export default class SearchEngine extends React.Component {
  
    constructor(props){
        super(props)
        
        this.state={
          UserInfo: {

          },
          SelectedCategory:0,
          SelectedRegion:0,
          SelectedAges:0,
          CategoryList:[],
          regions:[],
          AgeList:[],
         
        }
        this.LoadUserInfo = this.LoadUserInfo.bind(this)
        this.GetData = this.GetData.bind(this)
        this.LoadUserInfo()
    };

    async LoadUserInfo() {
      return SahbakDB.getInstance().GetUserInfo().then((result) => {
          
          this.setState({
              UserInfo: result._array[0],
          })
          this.GetData()

      });
  }
  async GetData(){
      const RequestUrl = 'https://jobus.herokuapp.com/settings/option/'
      fetch(RequestUrl, {
      method: 'GET',
      headers: new Headers({
        Authorization: this.state.UserInfo.Token, 
      }),
    }).then((response) => response.json())
      .then((responseJson) => {        
        this.setState({
          isLoading: false,
          CategoryList: responseJson.category,
          regions: responseJson.regions,
          AgeList: responseJson.ages,
        }, function () {});
      });
    }
    render() {
        return (
      <View style={styles.container}>
      
          <Text style={styles.TxtStyle}>חפשו את המשרה המתאימה לכם</Text>
            <View style={styles.layoutSearch}>
      
        <View style={styles.innerAeraView}>
             <View style={{width: "84%",flexDirection:'row', height: 40, justifyContent: 'space-between', backgroundColor: 'white'}} >
                
                 <View style={{flex:1,paddingTop:10}}> 
                  <Icon
                      style={{flex:1}}
                      name='favorite'
                      color='blue' />
                  </View>
                  <Picker
                    style={{flex:5}}
                    selectedValue={this.state.SelectedCategory }
                    onValueChange={(itemValue, itemIndex) => this.setState({SelectedCategory:itemIndex})}>{
                    this.state.CategoryList.map( (c,itemIndex)=>{
                        return <Picker.Item key={itemIndex} label={c.title} value={c.catId} />
                    })
                    }
                  </Picker>
              </View>
        </View>
        <View style={{paddingTop:10}}  />

        <View style={styles.innerAeraView}>
             <View style={{width: "84%",flexDirection:'row', height: 40, justifyContent: 'space-between', backgroundColor: 'white'}} >
                
                 <View style={{flex:1,paddingTop:10}}> 
                  <Icon
                      style={{flex:1}}
                      name='room'
                      color='blue' />
                  </View>
                  <Picker
                    style={{flex:5}}
                    selectedValue={this.state.SelectedRegion }
                    onValueChange={(itemValue, itemIndex) => this.setState({SelectedRegion:itemValue})}>{
                    this.state.regions.map( (r)=>{
                        return <Picker.Item label={r.name} key={r.region_id} value={r.region_id} />
                        
                    })
                    }
                  </Picker>  

              </View>
        </View>

        <View style={{paddingTop:10}}  />
        <View style={styles.innerAeraView}>
             <View style={{width: "84%",flexDirection:'row', height: 40, justifyContent: 'space-between', backgroundColor: 'white'}} >
                
                 <View style={{flex:1,paddingTop:10}}> 
                  <Icon
                      style={{flex:1}}
                     name='unfold-more'
                      color='blue' />
                  </View>
                  <Picker
                    style={{flex:2,marginLeft:165,marginRight:0}}
                    selectedValue={this.state.SelectedAges }
                    onValueChange={(itemValue, itemIndex) => this.setState({SelectedAges:itemValue})}>{
                    this.state.AgeList.map( (a)=>{
                        return <Picker.Item label={a.title} key={a.position} value={a.position} />
                    })
                    }
                  </Picker>
              </View>
        </View>
        
        <View style={styles.buttonContainer}>
      
          <Button
           onPress={() => {
                  this.props.navigation.navigate('SearhJobResults', {
                    CategoryList:this.state.SelectedCategory,
                    regions:this.state.SelectedRegion,
                    AgeList:this.state.SelectedAges,

                  });
              }}
              title=" חפש !"
              color="#f194ff"
              
              />
        
        </View>

        
        </View>  
         
  </View>
 
    
        
         
        
            

     
     
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:40,
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
      padding: 10,
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
  