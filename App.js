/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TileIndexContainer from './src/components/TileIndexContainer';
import HeaderContainer from './src/components/HeaderContainer';
import store from './src/store/store';
import Main from './src/components/Main';

type Props = {};
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});









const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});
