import React ,{component} from 'react';
import {  StyleSheet, Text,  Image , View,FlatList,  } from 'react-native';

const DATA = [
    {
      id: '1',
      image: '../../assets/images/image1.png',
      title: 'מישור החוף והסביה',
    },
    {
       id: '2',
       image: '../../assets/images/image1.png',
       title: 'איזור הדרום',
    },
    {
        id: '3',
        image: '../../assets/images/image1.png',
        title: 'איזור הצפון',
    
    },
    {
        id: '4',
        image: '../../assets/images/image1.png',
        title: 'חיפה והסביבה',
    },
    {
        id: '5',
        image: '../../assets/images/image1.png',
        title: 'איזור עמק יזרעאל',
    },
    {
        id: '6',
        image: '../../assets/images/image1.png',
        title: 'ירושלים והסביביה',
      
    },
  ];
  
  function Item({ location }) {
    return (
    
      <View style={styles.item}>
           <View style={styles.SearchLocationImage}>
                <Image
                    style={{ flex: 1,borderRadius:15 }}
                    source={require('../../assets/images/image1.png')} />
          </View>
          <View  style={styles.TextInfrontImage}>
            <Text style={styles.titleNameLocation}>{location}</Text>
          </View>
         
          
      </View>
     
    );
  }
  
  


export default class JobsByLocationP extends React.Component {
    constructor(props){
        super(props)
        this.state ={ isLoading: true}
    }
    componentDidMount(){
        return fetch('https://jobus.herokuapp.com/joblist')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.jobs,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    render() {
        return (
            <View style={styles.container}>
               
                <FlatList
                      data={this.state.dataSource}
                      style={{backgroundColor:'white'}}
                      renderItem={({ item }) => <Item 
                           location={item.location}  
                           
                           
        
                     />}
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
    },
    item: {
        paddingTop:10,
        flex:1,
       
    },
      
    titleNameLocation: {  
       padding:30,
       color:'white', 
       textAlign:"center",
       alignItems:"center",
       fontSize: 16,
       fontWeight:'bold'
    },
    SearchLocationImage:{
        padding:1,
        alignItems:'center',
       
     
    },
    TextInfrontImage:{
        alignItems:"center",
        position:'absolute',
        textShadowOffset: { width: 4, height: 1 },
        flex:1,
        top: 80,
        bottom: 0,
        left: 0,
        right: 0,
    },
})