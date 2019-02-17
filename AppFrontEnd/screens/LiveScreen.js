import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import TemperatureWidget from '../components/TemperatureWidget';
import WaterWidget from '../components/WaterWidget';
import IngredientWidget from '../components/IngredientWidget';
import CameraWidget from '../components/CameraWidget';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.getStartedText}>
            Temperature
          </Text>
        </View>

        <TemperatureWidget/>

        <View style={styles.container}>
          <Text style={styles.getStartedText}>
            Water Level
          </Text>
        </View>

        <WaterWidget/>

        <View style={styles.container}>
          <Text style={styles.getStartedText}>
            Ingredients
          </Text>
        </View>

        <IngredientWidget/>

        <CameraWidget/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    margin: 30
  },
});
