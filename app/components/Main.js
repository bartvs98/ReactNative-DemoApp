import React from 'react';
import Icon from 'react-native-fa-icons';
import Posts from './Posts/Posts';
import MyModal from './MyModal';
import BubbleMenu from './BubbleMenu/BubbleMenu';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  AppRegistry,
  StatusBar,
  Animated,
  ActivityIndicator
} from 'react-native';

export default class Main extends React.Component {

  static navigationOptions = { header: null }

  constructor(){
    super();
    this.state = {
      modalVisible: false,
      isLoading: true,
      data: {},
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const { data } = this.state;
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>

      <StatusBar
        backgroundColor={'#1976D2'}
        barStyle="light-content"
      />

        <View style={styles.header}>
          <View style={styles.bubbleButtonWrapper}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#90CAF9')}>
              <View style={[styles.bubbleButton]}>
                <Text style={{color: '#ffffff',fontSize: 24}}><Icon name='bars' allowFontScaling /></Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>

        {this.state.isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#2196F3" />
          </View>
        ) : (
          <ScrollView contentContainerStyle={{paddingTop:10}}>

            { Object.values(data).map(posts =>
              <Posts
                key={posts.id}
                {...posts}
                details={() => navigate('PostDetail', {transition: 'fromRight', id: posts.id,title: posts.title, body: posts.body})}
              />)
            }
          </ScrollView>
        )}

        <BubbleMenu
          icon1={'sticky-note-o'}
          action1={() => this.openModal()}
          icon2={'pencil'}
          icon3={'list'}
          icon4={'bell-o'}
          icon5={'flag'}
          icon6={'comment'}
        />

        <MyModal
          isVisible={this.state.modalVisible}
          closeModal={() => this.closeModal()}
        />

      </View>
    );
  }

  openModal() { this.setState({modalVisible:true})}
  closeModal() { this.setState({modalVisible:false}) }

}

AppRegistry.registerComponent('Main', () => Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    backgroundColor: '#2196F3',
    elevation: 8,
    paddingLeft: 3,
    height: 56,
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
