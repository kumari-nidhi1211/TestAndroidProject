/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';
import Root from './root'


export default class TestAndroidProject extends Component {

  render() {
    return <Root/>;
  }
}
const styles = StyleSheet.create({
  main: {
  	flex: 1,
  }
});

AppRegistry.registerComponent('TestAndroidProject', () => TestAndroidProject);
