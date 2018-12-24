/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import TouchID from "react-native-touch-id";

export default class App extends Component {

  constructor(props){
    super(props);
}
  _pressHandler() {
    const optionalConfigObject = { title: 'Authentication Required', color: '#e00606' };
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  }
  _testSupport() {
    TouchID.isSupported()
      .then(supported => {
        // Success code
        Alert.alert('Touch ID supported');
      })
      .catch(error => {
        // Failure code
        Alert.alert('Touch ID not support');
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableHighlight onPress={this._pressHandler}>
          <Text>Authenticate with Touch ID</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._testSupport}>
          <Text> Test Support </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('App', () => App);
