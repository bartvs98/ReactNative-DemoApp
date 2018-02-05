import React from 'react';
import Main from './app/components/Main';
import PostDetail from './app/components/Posts/PostDetail';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const fromRight = (index, position) => {
  const inputRange = [0, index, index + 0.80, index + 1];
  const translateX = position.interpolate({
    inputRange,
    outputRange: [width, 0, 0, 0]
  })

  return {
    transform: [{ translateX }]
  }
}

const transConfig= () => {
  return {
    screenInterpolator: (sceneProps) => {
      const { position, scene } = sceneProps;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transtition || 'default';

      return {
        default: CardStackStyleInterpolator.forHorizontal(sceneProps),
        fromRight: fromRight(index, position)
      }[transition]
    }
  }
}

const Routes = StackNavigator({
    Main: {screen: Main},
    PostDetail: {screen: PostDetail},
  }, {
    transitionConfig: transConfig,
})

export default class App extends React.Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });

    console.log('App loaded');
  }

  render() {

    if (this.state.isLoading) {
      return <View style={styles.loading}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>;
    }
      return <Routes />;
    }

}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
