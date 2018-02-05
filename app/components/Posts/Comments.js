import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-fa-icons';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  AppRegistry,
  TouchableNativeFeedback
} from 'react-native';

export default class PostDetails extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#BDBDBD')}>
        <View style={styles.paper} pointerEvents='box-only'>
          <Text style={{fontSize: 16, borderBottomWidth: StyleSheet.hairlineWidth, fontWeight: 'bold'}}>{ this.props.email }</Text>
          <Text style={{fontSize: 16}}>{ this.props.body }</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

AppRegistry.registerComponent('PostDetail', () => PostDetail);

const styles = StyleSheet.create({
  paper: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    justifyContent: 'space-between'
  },
  bubbleButtonWrapper: {
    zIndex: 3,
    height: 50,
    width: 50,
    borderRadius:50,
    overflow:'hidden',
  },
  bubbleButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
