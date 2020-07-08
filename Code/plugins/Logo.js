import React from 'react';
import { StyleSheet, Text , View } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements'

export default class Logo extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <View style={{ flexDirection: 'column', textAlign: 'TitleShbak', padding: 10, paddingTop: 10 }}>
        <View style={{ flexDirection: 'row-reverse' }}>
          <SocialIcon iconSize={10} raised={false} iconColor='white' type='facebook' />
          <SocialIcon iconSize={10} raised={false} iconColor='white' type='instagram' />
          <View style={{ flexDirection: 'row-reverse' }}>
            <Text style={styles.TitleShbak} > סחבק</Text>
            <Icon size={30} name='flash-on' color='#f60f69' />
          </View>
        </View>
        <View>
          <Text style={styles.TitleDescribtion}>אתר המשרות הצערים של ישראל</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SocialIconInstgram: {
    alignItems: "center",
    textAlign: "left",
    fontWeight: 'normal',
    color: 'blue'
  },
  SocialIconFacebook: {
    alignItems: "flex-end",
    textAlign: "left",
    fontWeight: 'normal',
    color: 'blue'
  },
  TitleShbak: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: "left",
    color: 'white',
    fontWeight: 'bold'
  },
  FlashOnIcon: {
    fontSize: 21.7,
    fontWeight: 'normal',
    letterSpacing: 8.79,
    textAlign: "left",

  },
  TitleDescribtion: {
    alignItems: 'center',
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
})