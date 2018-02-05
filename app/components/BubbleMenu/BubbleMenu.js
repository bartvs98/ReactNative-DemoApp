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
      yPositionBubble1: new Animated.Value(0),
      yPositionBubble2: new Animated.Value(0),
      yPositionBubble3: new Animated.Value(0),
      yPositionBubble4: new Animated.Value(0),
      yPositionBubble5: new Animated.Value(0),
      yPositionBubble6: new Animated.Value(0),
      opacity: new Animated.Value(0),
      spinValue: new Animated.Value(0)
    }
  }

  render() {

    const { yPositionBubble1,
            yPositionBubble2,
            yPositionBubble3,
            yPositionBubble4,
            yPositionBubble5,
            yPositionBubble6,
            opacity } = this.state;

    const { icon1, icon2, icon3, icon4, icon5, icon6} = this.props

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    })

    let animateBubble1 = {transform: [{translateY: yPositionBubble1}]};
    let animateBubble2 = {transform: [{translateY: yPositionBubble2}]};
    let animateBubble3 = {transform: [{translateY: yPositionBubble3}]};
    let animateBubble4 = {transform: [{translateY: yPositionBubble4}]};
    let animateBubble5 = {transform: [{translateY: yPositionBubble5}]};
    let animateBubble6 = {transform: [{translateY: yPositionBubble6}]};
    let bubbleOpacity = {opacity: opacity};
    let spinBubble = {transform: [{rotate: spin}]};

    return (
      <View>

        <View style={styles.bubbleButtonWrapper}>
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#880E4F')} onPress={() => this.toggleBubble()}>
            <Animated.View style={[styles.bubbleButton, spinBubble]}>
              <Text style={{color: '#ffffff', fontSize: 22}}><Icon name='plus' allowFontScaling /></Text>
            </Animated.View>
          </TouchableNativeFeedback>
        </View>

        {icon1 == null ? (
          null
        ) : (
          <Animated.View style={[styles.animatedBubble, animateBubble1, bubbleOpacity]}>
            <TouchableOpacity style={[styles.newNoteButton]} onPress={this.props.action1}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon1} allowFontScaling /></Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {icon2 == null ? (
          null
        ) : (
          <Animated.View style={[styles.animatedBubble, animateBubble2, bubbleOpacity]}>
            <TouchableOpacity style={[styles.newNoteButton]} onPress={this.props.action2}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon2} allowFontScaling /></Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {icon3 == null ? (
          null
        ) : (
          <Animated.View style={[styles.animatedBubble, animateBubble3, bubbleOpacity]}>
            <TouchableOpacity style={[styles.newNoteButton]} onPress={this.props.action3}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon3} allowFontScaling /></Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {icon4 == null ? (
          null
        ) : (
          <Animated.View style={[styles.animatedBubble, animateBubble4, bubbleOpacity]}>
            <TouchableOpacity style={[styles.newNoteButton]} onPress={this.props.action4}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon4} allowFontScaling /></Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {icon5 == null ? (
          null
        ) : (
          <Animated.View style={[styles.animatedBubble, animateBubble5, bubbleOpacity]}>
            <TouchableOpacity style={[styles.newNoteButton]} onPress={this.props.action5}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon5} allowFontScaling /></Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {icon6 == null ? (
          null
        ) : (
          <Animated.View style={[styles.animatedBubble, animateBubble6, bubbleOpacity]}>
            <TouchableOpacity style={[styles.newNoteButton]} onPress={this.props.action6}>
              <Text style={{color: '#ffffff', fontSize: 22,}}><Icon name={icon6} allowFontScaling /></Text>
            </TouchableOpacity>
          </Animated.View>
        )}



      </View>
    );
  }

  openBubble() { this.setState({bubbleVisible:true}) }
  closeBubble() { this.setState({bubbleVisible:false}) }

  toggleBubble() {

    const { yPositionBubble1,
            yPositionBubble2,
            yPositionBubble3,
            yPositionBubble4,
            yPositionBubble5,
            yPositionBubble6,
            opacity,
            spinValue } = this.state;

    if (this.state.bubbleVisible) {

      Animated.parallel([
        Animated.timing(spinValue, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble6, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble5, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble4, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble3, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble2, {toValue: 0, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble1, {toValue: 0, duration: 200, useNativeDriver: true,}),
      ]).start();

      this.closeBubble();
    } else {

      Animated.parallel([
        Animated.timing(yPositionBubble1, {toValue: -70, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble2, {toValue: -130, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble3, {toValue: -190, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble4, {toValue: -250, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble5, {toValue: -310, duration: 200, useNativeDriver: true,}),
        Animated.timing(yPositionBubble6, {toValue: -370, duration: 200, useNativeDriver: true,}),
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
    right:15,
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
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#E91E63',
    width: 40,
    height: 40,
    bottom: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  animatedBubble: {
    position: 'absolute',
    zIndex: 1,
    right: 13,
    bottom: 13,
    width: 60,
    height: 60,
    margin: 0,
    borderRadius: 50,
    alignItems: 'center',
  }
});
