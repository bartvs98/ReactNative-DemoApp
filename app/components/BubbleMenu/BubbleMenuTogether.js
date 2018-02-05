import React from 'react';
import Icon from 'react-native-fa-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  AppRegistry,
  Animated,
} from 'react-native';

export default class BubbleMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bubbleVisible: false,
      yPositionBubble: new Animated.Value(0),
      opacity: new Animated.Value(0),
      spinValue: new Animated.Value(0),
      height: new Animated.Value(0),
    }
  }

  render() {

    const { yPositionBubble, opacity } = this.state;

    const { icon1, icon2, icon3, icon4, icon5, icon6} = this.props

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    })

    let animateBubble = {transform: [{translateY: yPositionBubble}]};
    let bubbleOpacity = {opacity: opacity};
    let spinBubble = {transform: [{rotate: spin}]};

    return (
      <View>

        <View style={styles.bubbleButtonWrapper}>
          <TouchableNativeFeedback useForeground={false} onPress={() => this.toggleBubble()}>
            <Animated.View style={[styles.bubbleButton, spinBubble]}>
              <Text style={{color: '#ffffff', fontSize: 20}}><Icon name='plus' allowFontScaling /></Text>
            </Animated.View>
          </TouchableNativeFeedback>
        </View>

        <Animated.View style={[styles.animatedBubble, animateBubble, bubbleOpacity]}>

          {icon6 == '' ? (
            <View style={{display: 'none'}}></View>
          ) : (
            <TouchableOpacity style={[styles.newNoteButton]}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon6} allowFontScaling /></Text>
            </TouchableOpacity>
          )}

          {icon5 == '' ? (
            <View style={{display: 'none'}}></View>
          ) : (
            <TouchableOpacity style={[styles.newNoteButton]}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon5} allowFontScaling /></Text>
            </TouchableOpacity>
          )}

          {icon4 == '' ? (
            <View style={{display: 'none'}}></View>
          ) : (
            <TouchableOpacity style={[styles.newNoteButton]}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon4} allowFontScaling /></Text>
            </TouchableOpacity>
          )}

          {icon3 == '' ? (
            <View style={{display: 'none'}}></View>
          ) : (
            <TouchableOpacity style={[styles.newNoteButton]}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon3} allowFontScaling /></Text>
            </TouchableOpacity>
          )}

          {icon2 == '' ? (
            <View style={{display: 'none'}}></View>
          ) : (
            <TouchableOpacity style={[styles.newNoteButton]}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon2} allowFontScaling /></Text>
            </TouchableOpacity>
          )}

          {icon1 == '' ? (
            <View style={{display: 'none'}}></View>
          ) : (
            <TouchableOpacity style={[styles.newNoteButton]}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon1} allowFontScaling /></Text>
            </TouchableOpacity>
          )}

        </Animated.View>

      </View>
    );
  }

  openBubble() { this.setState({bubbleVisible:true}) }
  closeBubble() { this.setState({bubbleVisible:false}) }

  toggleBubble() {

    const { yPositionBubble,
            opacity,
            spinValue } = this.state;

    if (this.state.bubbleVisible) {

      Animated.parallel([
        Animated.timing(yPositionBubble, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(spinValue, {toValue: 0, duration: 200, useNativeDriver: true,}),
      ]).start();

      this.closeBubble();
    } else {

      Animated.parallel([
        Animated.timing(yPositionBubble, {toValue: -420, duration: 200, useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 1, duration: 200, useNativeDriver: true,}),
        Animated.timing(spinValue, {toValue: 1, duration: 200, useNativeDriver: true,}),
      ]).start();

      this.openBubble();
    }
  }

}

AppRegistry.registerComponent('BubbleMenu', () => BubbleMenu);

const styles = StyleSheet.create({
  bubbleButtonWrapper: {
    position:'absolute',
    zIndex: 3,
    height: 56,
    width:56,
    bottom:15,
    right:340,
    borderRadius:50,
    overflow:'hidden',
    elevation: 8,
  },
  bubbleButton: {
    backgroundColor: '#E91E63',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newNoteButton: {
    zIndex: 2,
    backgroundColor: '#E91E63',
    width: 40,
    height: 40,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  animatedBubble: {
    position: 'absolute',
    zIndex: 1,
    right: 340,
    bottom: -400,
    width: 60,
    height: 410,
    margin: 0,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
