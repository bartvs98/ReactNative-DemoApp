import React from 'react';
import Icon from 'react-native-fa-icons';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  AppRegistry,
} from 'react-native';

export default class Posts extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { title, body, id, details } = this.props;

    return(
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#BDBDBD')} onPress={details}>
        <View style={styles.paper} >
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{ title }</Text>

          <View style={{flexDirection:'row'}}>
            <View style={styles.bubbleButtonWrapper}>
              <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#BDBDBD')}>
                <View style={[styles.bubbleButton]}>
                  <Text style={{fontSize: 22}}><Icon name='arrow-up' allowFontScaling /></Text>
                </View>
              </TouchableNativeFeedback>
            </View>

            <View style={styles.bubbleButtonWrapper}>
              <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#BDBDBD')}>
                <View style={[styles.bubbleButton]}>
                  <Text style={{fontSize: 22}}><Icon name='arrow-down' allowFontScaling /></Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>

        </View>
      </TouchableNativeFeedback>
    )
  }

}

AppRegistry.registerComponent('Posts', () => Posts);

const styles = StyleSheet.create({
  paper: {
    height: 120,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    elevation: 5,
    justifyContent: 'space-between'
  },
  bubbleButtonWrapper: {
    zIndex: 3,
    height: 40,
    width: 40,
    borderRadius:50,
    overflow:'hidden',
  },
  bubbleButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
