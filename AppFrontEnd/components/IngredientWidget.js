import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ToastAndroid,
  Button
 } from 'react-native';

import DialogInput from 'react-native-dialog-input';

class IngredientWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVis: false,
      reading: "60",
      numOfIngredients: 2,
      ingredients:["pear", "apple"],
      time: [23, 54]
    };

    this.showDiag = this.showDiag.bind(this)
    this.sendInput = this.sendInput.bind(this)
  }

  showDiag(show){
    // ToastAndroid.show('Temp changed', ToastAndroid.SHORT)
    this.setState({modalVis:show});
  }
  sendInput(inputText){
    this.setState({reading:inputText});
  }

  render() {
    return(
      <View>


        <Text style={styles.getStartedText}>
          1. {this.state.ingredients[0]} - {this.state.time[0]} seconds
        </Text>
        <Text style={styles.getStartedText}>
          1. {this.state.ingredients[1]} - {this.state.time[1]} seconds
        </Text>



        <Button
          onPress={()=>{this.showDiag(true)}}
          title='Add another ingredient'
          color='#99DFFF'
          type= "outline"
          //rounded = 1;
        />

        <DialogInput isDialogVisible={this.state.modalVis}
                    title={"DialogInput 1"}
                    message={"Message for DialogInput #1"}
                    hintInput ={"HINT INPUT"}
                    submitInput={ (inputText) => {this.sendInput(inputText)}}
                    closeDialog={()=>{this.showDiag(false)}}>
        </DialogInput>
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
    margin: 30,
  },
});


export default IngredientWidget;
