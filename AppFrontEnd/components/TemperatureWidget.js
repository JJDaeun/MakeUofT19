import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ToastAndroid,
  Button
 } from 'react-native';

class TemperatureWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temperatureReading:-1,
      modalVis: false
    }
  }

  changeTemp(){
    // ToastAndroid.show('Temp changed', ToastAndroid.SHORT)
    modalVis = true
  }

  render() {
    return(
      <View>
        <Text style={styles.getStartedText}>
          The temperature is {this.state.temperatureReading} degrees
        </Text>
        <Button
          onPress={this.changeTemp}
          title='Adjust Temperature'
          color='#841584'
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
            </View>
          </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    margin: 30
  },
});


export default TemperatureWidget;
