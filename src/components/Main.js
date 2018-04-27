import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TileIndex from './TileIndex';
import Header from './Header';


class Setting extends Component {

  constructor() {
    super()
    this.onPressHandler = this.onPressHandler.bind(this);
    this.state = { activeStarter: {}, activeMiddle: {}, activeFinisher: {}, currentTileSet: "starter" }
  }

  onPressHandler() {
    console.log(this.state)
    if (this.state.currentTileSet === "starter") {
      //based on onPress. Insert tile into activeStarter position if the tile is a starter
      this.setState({ activeStarter: {title: "starter"}, currentTileSet: "middle"})
    }
    else if (this.state.currentTileSet === "middle") {
      //check activeStarter to see if we are done, otherwise change to a finisher
      let nextState = "done"
      //talk to Matthew about making this easier to call
      if (this.state[activeMiddle].finishers.length !== 0) {
        nextState = "finisher"
      }
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
        <Header style={{flex: 2}} state={this.state}/>
        <TileIndex onPress={this.onPressHandler}
          style={{flex: 1}} />
      </View>
    )
  }

}

export default Setting;
