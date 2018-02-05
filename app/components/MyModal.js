import React from 'react'
import Modal from 'react-native-modal';
import Icon from 'react-native-fa-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AppRegistry
} from 'react-native';

export default class MyModal extends React.Component {

  render() {
    return(

      <Modal isVisible={this.props.isVisible}
             style={styles.bottomModal}
             onBackdropPress={this.props.closeModal}
             backdropOpacity={0.3}
             onRequestClose={this.props.closeModal}>

        <View style={styles.modalWrapper}>

          <TouchableOpacity onPress={this.props.closeModal}
                            style={styles.closeModalButton}>
            <Text style={{fontSize: 26,}}><Icon name='times' allowFontScaling /></Text>
          </TouchableOpacity>

          <View style={styles.modalContainer}>
            <Text style={styles.label}>Title</Text>

            <TextInput style={styles.input}
                       autoFocus={true}
                       underlineColorAndroid={'#2196F3'}/>

            <Text style={styles.label}>Post</Text>

            <TextInput style={styles.input}
                       multiline={true}
                       numberOfLines={5}
                       underlineColorAndroid={'#2196F3'}/>
          </View>

        </View>

      </Modal>

    )
  }

}

AppRegistry.registerComponent('MyModal', () => MyModal)

const styles = StyleSheet.create({
  
  modalWrapper: {
    height: 190,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  closeModalButton: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    top: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  label: {
    marginLeft: 3,
    marginBottom: -10,
  },
  input: {
    alignSelf: 'stretch',
  }
})
