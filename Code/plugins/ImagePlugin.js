
import * as React from 'react';
import { Button, Image ,View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class ImagePlugin extends React.Component {
    constructor(props){
        super(props)
        const inputImage=this.props.imageUrl
        this.state={
            image:(inputImage!=undefined&&inputImage!='')?inputImage:'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }
    }
    UpdateLoadedImage(ImageUrl){
        this.setState({image:ImageUrl})
    }
    sendData = (res) => {
        this.props.parentCallback(res,"Image");
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('סליחה, צריך הרשאות גישה למצלימה  כדי שתוכל לבחור תמונה');
            }
        }
    };

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.sendData(result.uri)
                this.setState({ image: result.uri });
            }
        } catch (E) {
           
        }
    };
    render(){
        return(
            <View style={{ paddingHorizontal: '15%'}}>
            <View style={{ width: '100%', height: 20 ,alignItems:'stretch' }} >
                    <Button    
                        icon={{
                            name: "arrow-right",
                            size: 15,
                            color: "white"
                        }}
                        onPress={this._pickImage}
                        title="הוסף תמונה"
                    />
                    <Image source={{ uri: this.state.image }} style={{height: 200 }} />
                  </View>
        </View>
        )
    }
}

