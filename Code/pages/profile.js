
import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text,Picker, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Footer from '../plugins/Footer';
import { SahbakDB } from '../SahbakDB/SahbakDB';
import DialogInput from 'react-native-dialog-input';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImagePlugin from '../plugins/ImagePlugin'

export default class ProfilePart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {

            }
        }
        this.LoadUserInfo = this.LoadUserInfo.bind(this)
        this.LoadUserInfo()
    }
    LoadOptions() {
        const RequestUrl = 'https://jobus.herokuapp.com/settings/option/'
        fetch(RequestUrl, {
            method: 'GET',
            headers: new Headers({
                Authorization:this.state.UserInfo.Token
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    CategoryList: responseJson.category,
                    regions: responseJson.regions,
                    AgeList: responseJson.ages,
                }, function () { });
                this.setState({ isLoaded: true })
            });
    }
    async LoadUserInfo() {
        return SahbakDB.getInstance().GetUserInfo().then((result) => {
            
            this.setState({
                UserInfo: result._array[0],
            })
            this.LoadOptions()
        });
        
    }


    UpdateInputFeild(data, textFeild, userId) {
        SahbakDB.getInstance().UpdateUserInfoByField(data, textFeild, userId).then((response) => {
            this.LoadUserInfo()
        })
    }
   
    render() {
        var image = this.state.userInfo.Image
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                locations={[0, 1.0]}
                colors={['#00fef3', '#223dc7']}
                style={styles.linearGradient, { flex: 1 }}>
                <ScrollView>
                    <View style={styles.ViewTitle}>
                            <Text style={styles.TitleDescribtion} > פרופיל  </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'stretch' }}>
                       
                        <PersonalDetails parentCallback={this.callbackFunction} />
                        <Education/>
                        <FeaturesThatDescribeUser/>
                        <Interests/>
                        <Footer />
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
    componentDidMount() {
        // this.getPermissionAsync();
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
                UpdateInputFeild(result.uri, 'Picture', this.state.UserInfo.id)
            }
        } catch (E) {
            
        }
    };
}

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserInfo: {

            },
            regions: [],
            CategoryList:[]
        }
        this.LoadOptions = this.LoadOptions.bind(this)
        this.LoadUserInfo = this.LoadUserInfo.bind(this)
    }
    callbackFunction = (childData, Type) => {
        this.state.UserInfo[Type] = childData
        this.UpdateInputFeild(childData, 'Picture', this.state.UserInfo.id)
    }
    componentDidMount() {
        this.LoadUserInfo().then(() => {
            this.LoadOptions()
        })
    }
    async LoadOptions() {
        const RequestUrl = 'https://jobus.herokuapp.com/settings/option/'
        return fetch(RequestUrl, {
            method: 'GET',
            headers: new Headers({
                Authorization:this.state.UserInfo.Token
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    CategoryList: responseJson.category,
                    regions: responseJson.regions,
                    AgeList: responseJson.ages,
                }, function () { });
                this.setState({ isLoaded: true })
            });
    }
    async LoadUserInfo() {
        return SahbakDB.getInstance().GetUserInfo().then((result) => {
            
            this.setState({
                UserInfo: result._array[0],
            })
            this.refs.child.UpdateLoadedImage(this.state.UserInfo.Picture)
        });
    }


    UpdateInputFeild(data, textFeild, userId) {

        SahbakDB.getInstance().UpdateUserInfoByField(data, textFeild, userId).then((response) => {
            
            this.LoadUserInfo()
        })
    }

    render() {
        var image = this.state.UserInfo.Picture
        
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 0 }}>
                <View style={{ height: 250 }}>
                    <ImagePlugin ref="child" imageUrl={this.state.UserInfo.Picture} parentCallback={this.callbackFunction} />
                </View>
                <View style={{ flexDirection: "row-reverse" }} >
                    <Icon size={20} name='create' color='white' />

                </View>
                <View style={styles.ViewStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="שם משתמשם"
                        placeholderTextColor="#000000"
                        onEndEditing={(data) => this.UpdateInputFeild(data.nativeEvent.text, 'FirstName', this.state.UserInfo.id)}
                        defaultValue={this.state.UserInfo.FirstName}
                    />

                </View>

                <View style={styles.ViewStyle} >
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="שם משפחה"
                        placeholderTextColor="#000000"
                        onEndEditing={(data) => this.UpdateInputFeild(data.nativeEvent.text, 'LastName', this.state.UserInfo.id)}
                        defaultValue={this.state.UserInfo.LastName}
                    />
                </View>
                <View style={styles.ViewStyle} >
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="מין"
                        placeholderTextColor="#000000"
                        onEndEditing={(data) => this.UpdateInputFeild(data.nativeEvent.text, 'Gender', this.state.UserInfo.id)}
                        defaultValue={this.state.UserInfo.Gender}
                    />
                </View>
                <View style={styles.ViewStyle} >
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="מספר טלפון"
                        placeholderTextColor="#000000"
                        onEndEditing={(data) => this.UpdateInputFeild(data.nativeEvent.text, 'Phone', this.state.UserInfo.id)}
                        defaultValue={this.state.UserInfo.Phone}
                    />
                </View>
                <View style={styles.ViewStyle} >
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="אימל"
                        placeholderTextColor="#000000"
                        onEndEditing={(data) => this.UpdateInputFeild(data.nativeEvent.text, 'Email', this.state.UserInfo.id)}
                        defaultValue={this.state.UserInfo.Email}
                    />
                </View>
                <View style={styles.ViewStyle, { position: 'relative', minHeight: 55, backgroundColor: 'white', paddingHorizontal: "10%", marginVertical: 50, marginHorizontal: 15 }} >

                    {
                        this.state.regions.length != 0
                            ?
                            <View>
                                <View style={{ paddingTop: 20 }}>
                                    <Text style={{ color: "black" }} > עיר:</Text>
                                </View>
                                <Picker
                                    style={styles.pickertStyle}
                                    selectedValue={Number.parseInt(this.state.UserInfo.City)}
                                    onValueChange={(itemValue, itemIndex) =>{
                                        console.log(itemValue)
                                        this.UpdateInputFeild(itemValue, 'City', this.state.UserInfo.id)
                                    }} >{
                                        this.state.regions.map((r) => {
                                            return <Picker.Item label={r.name} key={r.region_id} value={r.region_id} />
                                        })}
                                </Picker>
                            </View>
                            :
                            <View style={styles.item}>
                                <Text style={{ textAlign: 'center' }}> רשימת הערים נטענת ..!!</Text>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                    }

                </View>
                <View style={styles.ViewStyle, { position: 'relative', minHeight: 55, backgroundColor: 'white', paddingHorizontal: "10%", marginVertical: 50, marginHorizontal: 15 }} >

                    {
                        this.state.CategoryList.length != 0
                            ?
                            <View>
                                <View style={{ paddingTop: 20 }}>
                                    <Text style={{ color: "black" }} > תחומי עניין:</Text>
                                </View>
                                <Picker
                                    style={styles.pickertStyle}
                                    selectedValue={Number.parseInt(this.state.UserInfo.Category)}
                                    onValueChange={(itemValue, itemIndex) => {
                                        this.UpdateInputFeild(itemValue, 'Category', this.state.UserInfo.id)
                                    }
                                    }>{
                                        this.state.CategoryList.map((r) => {
                                            return <Picker.Item label={r.title} key={r.catId} value={r.catId} />
                                        })}
                                </Picker>
                            </View>
                            :
                            <View style={styles.item}>
                                <Text style={{ textAlign: 'center' }}> רשימת הערים נטענת ..!!</Text>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                    }

                </View>
            </View>

        );
    }

}

class MilitaryRole extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MilitaryRole: [],
            MilitaryRoleList: [],
            isDialogVisible: false
        }

        this.renderMilitaryRole = this.renderMilitaryRole.bind(this);
        this.DeleteMilitaryRole = this.DeleteMilitaryRole.bind(this);
        this.LoadMilitaryRole = this.LoadMilitaryRole.bind(this);
        this.LoadMilitaryRole()
    }
    LoadMilitaryRole() {
        SahbakDB.getInstance().GetUserMilitaryRole().then((result) => {
            let MilitaryRole
            this.state.MilitaryRole = MilitaryRole
            this.setState({
                MilitaryRole: result._array
            })
        });

    }

    showDialog(Situation) {
        this.setState({ isDialogVisible: Situation })
    }
    sendInputToDB(data) {
        SahbakDB.getInstance().AddUserMilitaryRole(data).then(() => {
            this.LoadMilitaryRole()
            this.showDialog(false)
        })
    }
    DeleteMilitaryRole(itemID) {
        SahbakDB.getInstance().RemoveMilitaryRole(itemID).then((result) => {
            this.LoadMilitaryRole()
        })

    }

    renderMilitaryRole() {
        let MilitaryRoleList = this.state.MilitaryRoleList;
        return MilitaryRoleList.map((item, index) => {
            return (
                <TouchableOpacity activeOpacity={0.8} key={index} onLongPress={() => this.DeleteMilitaryRole(item.id)}>
                    <Text style={{ margin: 2, paddingLeft: 7, paddingRight: 7, paddingTop: 3, paddingBottom: 3, borderRadius: 2, color: 'white', backgroundColor: '#052172', fontSize: 13 }} key={index}>{item.MilitaryRoleInfo}</Text>
                </TouchableOpacity>
            )
        });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                <View style={{ flexDirection: "row-reverse" }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.showDialog(true)}>
                        <Icon size={22} name='add' color='#f60f69' />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13 }}> תפקיד בצבא: </Text>
                </View>
                <View style={{ flexDirection: "row-reverse", flexWrap: "wrap" }}>
                    {this.renderMilitaryRole()}
                </View>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"תפקיד בצבא "}
                    hintInput={"הוסף תפקד"}
                    submitInput={(inputText) => { this.sendInputToDB(inputText) }}
                    closeDialog={() => { this.showDialog(false) }}>
                </DialogInput>


            </View>
        );
    }

}

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            EducationList: [],
            isDialogVisible: false
        }

        this.RemoveEducation = this.RemoveEducation.bind(this);
        this.renderEducations = this.renderEducations.bind(this);
        this.LoadEdcutionList = this.LoadEdcutionList.bind(this);
        this.LoadEdcutionList()
    }
    LoadEdcutionList() {
        SahbakDB.getInstance().GetUserEducation().then((response) => {
            this.setState({
                EducationList: response._array
            })
        });
    }
    sendInput(textvalue) {
        SahbakDB.getInstance().AddUserEducation(textvalue).then(() => {
            this.LoadEdcutionList()
            this.showDialog(false)
        })
    }
    showDialog(Switch) {
        this.setState({ isDialogVisible: Switch })
    }
    RemoveEducation(id) {
        SahbakDB.getInstance().RemoveEducation(id).then((response) => {
            this.LoadEdcutionList()
        })
    }
    renderEducations() {
        let EducationList = this.state.EducationList;
        return EducationList.map((item, index) => {
            return (
                <TouchableOpacity activeOpacity={0.8} key={index} onLongPress={() => this.RemoveEducation(item.id)}>
                    <Text style={{ margin: 2, paddingLeft: 7, paddingRight: 7, paddingTop: 3, paddingBottom: 3, borderRadius: 2, color: 'white', backgroundColor: '#052172', fontSize: 13 }} key={index}>{item.EducationInfo}</Text>
                </TouchableOpacity>
            )
        });
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                <View style={{ flexDirection: "row-reverse" }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.showDialog(true)}>
                        <Icon size={22} name='add' color='#f60f69' />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13 }}> השכלה:</Text>
                </View>
                <View style={{ flexDirection: "row-reverse", flexWrap: "wrap" }}>
                    {this.renderEducations()}
                </View>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"השכלה"}
                    hintInput={"הוסף השכלה:"}
                    submitInput={(inputText) => { this.sendInput(inputText) }}
                    closeDialog={() => { this.showDialog(false) }}>
                </DialogInput>
            </View>
        );
    }

}

class FeaturesThatDescribeUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FeaturesThatDescribeList: [],
            isDialogVisible: false
        }
        this.renderFeaturesThatDescribeUser = this.renderFeaturesThatDescribeUser.bind(this)
        this.LoadUserFeaturesThatDescribe = this.LoadUserFeaturesThatDescribe.bind(this)
        this.LoadUserFeaturesThatDescribe()
    }
    LoadUserFeaturesThatDescribe() {
        SahbakDB.getInstance().GetUserFeaturesThatDescribe().then((result) => {
            this.setState({
                FeaturesThatDescribeList: result._array
            })
        });
    }
    sendInput(DataInput) {
        SahbakDB.getInstance().AddUserFeaturesThatDescribe(DataInput).then(() => {
            this.LoadUserFeaturesThatDescribe()
            this.showDialog(false)
        })
    }
    showDialog(Switch) {
        this.setState({ isDialogVisible: Switch })
    }
    RemoveFeaturesThatDescribe(ItemId) {
        SahbakDB.getInstance().RemoveFeaturesThatDescribe(ItemId).then((result) => {
            this.LoadUserFeaturesThatDescribe()
        })
    }
    renderFeaturesThatDescribeUser() {
        let FeaturesThatDescribeList = this.state.FeaturesThatDescribeList;
        return FeaturesThatDescribeList.map((item, index) => {
            return (
                <TouchableOpacity activeOpacity={0.8} key={index} onLongPress={() => this.RemoveFeaturesThatDescribe(item.id)}>
                    <Text style={{ margin: 2, paddingLeft: 7, paddingRight: 7, paddingTop: 3, paddingBottom: 3, borderRadius: 2, color: 'white', backgroundColor: '#052172', fontSize: 13 }} key={index}>{item.FeaturesThatDescribeUserInfo}</Text>
                </TouchableOpacity>
            )
        });
        
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                <View style={{ flexDirection: "row-reverse" }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.showDialog(true)}>
                        <Icon size={22} name='add' color='#f60f69' />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13 }}> תכונות שהכי מתארות אותך:</Text>
                </View>
                <View style={{ flexDirection: "row-reverse", flexWrap: "wrap" }}>
                    {this.renderFeaturesThatDescribeUser()}
                </View>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"תכונות שהכי מתארות אותך"}
                    hintInput={"הוסף תכונה"}
                    submitInput={(inputText) => { this.sendInput(inputText) }}
                    closeDialog={() => { this.showDialog(false) }}>
                </DialogInput>

            </View>
        );
    }

}

class Interests extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            InterestsList: [],
            isDialogVisible: false
        }
        this.renderInterestthis = this.renderInterests.bind(this);
        this.LoadInterestsList = this.LoadInterestsList.bind(this);
        this.RemoveInterests = this.RemoveInterests.bind(this);
        this.LoadInterestsList()

    }
    LoadInterestsList() {
        SahbakDB.getInstance().GetUserInterests().then((result) => {
            this.setState({
                InterestsList: result._array
            })
        });
    }
    showDialog(Switch) {
        this.setState({ isDialogVisible: Switch })
    }

    sendDataToDB(DATA) {
        SahbakDB.getInstance().AddUserInterests(DATA).then(() => {
            this.LoadInterestsList()
            this.showDialog(false)
        })
    }
    RemoveInterests(ItemID) {
        SahbakDB.getInstance().RemoveUserInterests(ItemID).then((response) => {
            this.LoadInterestsList()
        })
    }
    renderInterests() {
        let InterestsList = this.state.InterestsList;
        return InterestsList.map((item, index) => {
            return (
                <TouchableOpacity activeOpacity={0.8} key={index} onLongPress={() => this.RemoveInterests(item.id)}>
                    <Text style={{ margin: 2, paddingLeft: 7, paddingRight: 7, paddingTop: 3, paddingBottom: 3, borderRadius: 2, color: 'white', backgroundColor: '#052172', fontSize: 13 }} key={index}>{item.UserInterestsInfo}</Text>
                </TouchableOpacity>
            )
        });
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 15 }}>
                <View style={{ flexDirection: "row-reverse" }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.showDialog(true)}>
                        <Icon size={22} name='add' color='#f60f69' />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13 }}>  תחומי עניין:</Text>
                </View>
                <View style={{ flexDirection: "row-reverse", flexWrap: "wrap" }}>
                    {this.renderInterests()}
                </View>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"תחומי עניין"}
                    hintInput={"הוסף תחום עניין "}
                    submitInput={(inputText) => { this.sendDataToDB(inputText) }}
                    closeDialog={() => { this.showDialog(false) }}>
                </DialogInput>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
         
    },
    TitleDescribtion: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    SubTitle: {
        textAlign: 'right',
        color: 'white',
        fontSize: 13,
    },
    SaveText: {
        paddingTop: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    loveIcon: {
        alignItems: 'flex-start',

    },
    CreateIcon: {
        alignItems: 'flex-end',
    },
    AddImage: {
        width: '10%',
        height: 60,
        padding: 1,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    SearchIcon: {
        padding: 1,
        alignItems: 'center',
    },
    TextInputStyle: {
        color: "white",
        textAlign: 'right',
        paddingEnd: 10,
    },
    input: {
        alignContent: 'flex-end',
        width: 165,
        height: 20,
        textAlign: 'right',
        color: 'white',

    },
    SaveView: {
        width: '20%',
        height: 30,
        backgroundColor: '#d436ab',
        alignItems: 'center',
        borderRadius: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 25
    },
    buttonDesign: {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        resizeMode: 'contain',
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    TitleDescribtion: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    SubTitle: {
        textAlign: 'right',
        color: 'white',
        fontSize: 13,
    },
    SaveText: {
        paddingTop: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    loveIcon: {
        alignItems: 'flex-start',

    },
    CreateIcon: {
        alignItems: 'flex-end',
    },
    AddImage: {
        width: '10%',
        height: 60,
        padding: 1,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    SearchIcon: {
        padding: 1,
        alignItems: 'center',
    },
    TextInputStyle: {
        color: "white",
        textAlign: 'right',
        paddingEnd: 10,
    },
    input: {
        alignContent: 'flex-end',
        width: 165,
        height: 20,
        textAlign: 'right',
        color: 'white',
    },
    SaveView: {
        width: '20%',
        height: 30,
        backgroundColor: '#d436ab',
        alignItems: 'center',
        borderRadius: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 25
    },
    buttonDesign: {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        resizeMode: 'contain',
        width: '100%',
    },
    ViewStyle: {
        margin: 15,
        paddingTop: 10,
        flex: 1,
    },
    inputStyle: {
        height: 35,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 15,
        color: 'black',
        paddingTop: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingRight: 10,
    },
    pickertStyle: {
        height: 40,
        width: '80%',
        margin: -32,
        backgroundColor: '#052172',
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 15,
        color: 'white',
        paddingTop: 0,
        color: 'white',
    },
    pickerCatigrytStyle: {
        height: 40,
        width: '100%',
        marginStart: -80,
        marginTop: -30,
        backgroundColor: '#052172',
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 15,
        color: 'white',
        paddingTop: 0,
        color: 'white',
    },
    // military
    TitleDescribtion: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    SubTitle: {
        textAlign: 'right',
        color: 'white',
        fontSize: 13,
    },
    SaveText: {
        paddingTop: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    loveIcon: {
        alignItems: 'flex-start',

    },
    CreateIcon: {
        alignItems: 'flex-end',
    },
    AddImage: {
        width: '10%',
        height: 60,
        padding: 1,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    SearchIcon: {
        padding: 1,
        alignItems: 'center',
    },
    TextInputStyle: {
        color: "white",
        textAlign: 'right',
        paddingEnd: 10,
    },
    input: {
        alignContent: 'flex-end',
        width: 165,
        height: 20,
        textAlign: 'right',
        color: 'white',

    },
    SaveView: {
        width: '20%',
        height: 30,
        backgroundColor: '#d436ab',
        alignItems: 'center',
        borderRadius: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 25
    },
    buttonDesign: {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        resizeMode: 'contain',
        width: '100%',
    },
    ViewListAndText: {
        flex: 1,
        flexDirection: 'column-reverse',
        borderWidth: 1,
        borderColor: 'white',
        fontSize: 14,
        color: 'white',
        paddingTop: 10,
        color: 'white',
        backgroundColor: 'pink'
    },
    TitleDescribtion:{
        paddingTop:10,
        alignItems:'center',
        alignContent:'center',
        fontSize: 17,
        color:'white',
        fontWeight:'bold',
    },
    ViewTitle:{
        width: '100%', 
        height: 40,
        alignItems:"center",
        marginLeft:'5%'
    },

})


