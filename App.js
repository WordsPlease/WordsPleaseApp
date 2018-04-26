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
import DisplayIndex from './src/components/DisplayIndex';
import Header from './src/components/Header';
// import store from './src/store/store';

type Props = {};
export default class App extends Component {

  constructor() {
    super()
    this.onPressHandler = this.onPressHandler.bind(this);
    this.state = { activeStarter: {}, activeMiddle: {}, activeFinisher: {}, currentTileSet: "starter" }
  }

  onPressHandler() {
    if (this.state.currentTileSet === "starter") {
      this.setState({ activeStarter: {title: "starter"}, currentTileSet: "middle"})
    }
    else if (this.state.currentTileSet === "middle") {
      let nextState = ""
      //check activeStarter to see if we are done, otherwise change to a finisher
      this.setState({ activeMiddle: {title: "middle"}, currentTileSet: nextState})
    }
    else if (this.state.currentTileSet === "finisher") {
      this.setState({ activeFinisher: {title: "finisher"}, currentTileSet: "done"})
    }
  }
  //back button will handle the reset state
  // <Provider store={store}>
  // </Provider>

  render() {
    return (
        <View style={{flex: 1}}>
          <Header style={{flex: 2}} />
          <DisplayIndex onPress={this.onPressHandler}
            style={{flex: 1}} />
        </View>
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
