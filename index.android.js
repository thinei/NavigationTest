
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet

} from 'react-native';
import Routes from './src/components/routes/Routes';

export default class NavigationTest extends Component {
  render() {
    return (
     <Routes />
    );
  }
}

AppRegistry.registerComponent('NavigationTest', () => NavigationTest);
