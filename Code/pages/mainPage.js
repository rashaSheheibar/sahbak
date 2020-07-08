import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import Jobs from '../plugins/Jobs'
import { LinearGradient } from 'expo-linear-gradient';
import SearchEngine from '../plugins/SearchEngine';
import Footer from '../plugins/Footer';



export default class mainPage extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                locations={[0, 0.1, 1]}
                colors={['#00f4ff', '#00fef3', '#223dc7']}
                style={styles.linearGradient, { flex: 1 }}>
                <ScrollView ref={(c) => { this.scroll = c }}>
                    <SearchEngine navigation={this.props.navigation} />
                    <Jobs displayImage={true} parentScrollView={this.scroll} navigation={this.props.navigation} />   
                    <Footer/>
                </ScrollView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    TxtStyle: { fontSize: 19, textShadowOffset: { width: 1, height: 4 }, textShadowColor: '#0a49fb', fontWeight: 'bold', color: '#ffffff', textAlign: "center", padding: 10, },
    NewUser: { margin: 10, color: 'white', },
    TextInputStyle: { textAlign: 'right', },
    stretch: { flex: 1, height: undefined, width: undefined, },
    ViewItems: { paddingTop: 20, flexDirection: 'column', justifyContent: 'space-between', width: '100%', alignItems: 'center' },
    ViewInputText: { padding: 15, width: '80%', height: 50, backgroundColor: "white", alignContent: "flex-end", borderWidth: 1, borderRadius: 30, borderColor: 'white' },
    ViewNewUser: { borderRadius: 20, backgroundColor: '#0a49fb', alignItems: 'center', height: 45, marginTop: 20, marginLeft: 38, marginRight: 38 },
    ViewGoogleAndFacebook: { paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', flex: 1, margin: 10 },
    ViewFacebook: { flex: 1, borderRadius: 20, borderWidth: 1.5, borderColor: '#252bb0', alignItems: 'center', justifyContent: 'flex-start' },
    Textstyle: { margin: 10, color: 'white', fontWeight: 'bold' },
    ViewStyleItemPassword: { flexDirection: 'row-reverse', flex: 1, margin: 10 },
    ViewPassword: { flex: 1, alignItems: 'center', justifyContent: 'flex-start' },
    ViewDone: { paddingStart: '15%', alignItems: 'flex-start' },
})
