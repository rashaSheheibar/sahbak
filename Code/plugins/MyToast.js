import React from 'react';
import Toast from 'react-native-easy-toast';
import { Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class MyToast extends React.Component {
    constructor(props){
        super(props)
        const Msg=this.props.messege==undefined?"hellow world":this.props.messege;
        this.state={
            messege:Msg
        }
    }
    showMsg(){
        this.refs.toast.show(this.state.messege,DURATION.LENGTH_LONG);
    }
    render() {
        return (
            <View style={{position: 'absolute',bottom:40,}}>
                <TouchableHighlight
                    style={{padding: 10}}
                    onPress={()=>{
                        this.refs.toast.show(this.state.messege,DURATION.LENGTH_LONG);
                    }}>
                    <Text>Press me</Text>
                </TouchableHighlight>
                <Toast
                    ref="toast"
                    style={{backgroundColor:'red'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'red'}}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    statusBar: {
        height: 20,
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    textInput: {
        flex: 1,
        height: (Platform.OS === 'ios') ?30:40,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        paddingLeft: 5,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 3,
        opacity: 0.7,
        color:'white'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        flex: 1,
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        height: 40,
        position: 'absolute',
        left: 10,
        
        right: 10,
        bottom: 10,
        alignSelf: 'flex-end',
        borderRadius: 3,

    },
})
