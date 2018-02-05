import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-fa-icons';
import Comments from './Comments'
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

  static navigationOptions = { header: null, gesturesEnabled: true };

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      comments: {}
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    const { state } = this.props.navigation

    fetch('https://jsonplaceholder.typicode.com/comments?postId='+ state.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          comments: responseJson,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { state, goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.bubbleButtonWrapper}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#90CAF9')} onPress={() => goBack()}>
              <View style={[styles.bubbleButton]}>
                <Text style={{color: '#ffffff',fontSize: 24}}><Icon name='arrow-left' allowFontScaling /></Text>
              </View>
            </TouchableNativeFeedback>
          </View>

        </View>

        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#BDBDBD')}>
          <View style={styles.paper} pointerEvents='box-only'>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{ state.params.title }</Text>
            <Text style={{fontSize: 16}}>{ state.params.body }</Text>
          </View>
        </TouchableNativeFeedback>

        {this.state.isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#2196F3" />
          </View>
        ) : (
          <ScrollView>
            {Object.values(this.state.comments).map(posts => <Comments key={posts.id} {...posts} />)}
          </ScrollView>
        )}

      </View>
    );

  }
}

AppRegistry.registerComponent('PostDetail', () => PostDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#2196F3',
    elevation: 8,
    paddingLeft: 3,
    height: 56,
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#ffffff',
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    elevation: 5,
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
