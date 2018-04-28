import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TileIndexContainer from './TileIndexContainer';
import HeaderContainer from './HeaderContainer';

class Main extends Component {

  constructor() {
    super()
    this.setActiveTile = this.setActiveTile.bind(this);
    this.state = {
      activeStarter: {},
      activeMiddle: {},
      activeFinisher: {},
      currentTileSet: "starter"
    }
  }

  setActiveTile(item, e) {
    if (typeof item === "undefined") {
      return null
    }

    if (this.state.currentTileSet === "starter") {
      //based on onPress. Insert tile into activeStarter position if the tile is a starter
      this.setState({ activeStarter: item, currentTileSet: "middle"}, () => console.log(this.state))
    }
    else if (this.state.currentTileSet === "middle") {
      //check activeStarter to see if we are done, otherwise change to a finisher
      // let nextState = "done"
      //talk to Matthew about making this easier to call
      // if (item.finishers.length !== 0) {
      //   nextState = "finisher"
      // }
      this.setState({ activeMiddle: item, currentTileSet: "finisher"}, () => console.log(this.state))
    }
    else if (this.state.currentTileSet === "finisher") {
      this.setState({ activeFinisher: item, currentTileSet: "done"})
    }

  }

  //back button will handle the reset state
  // <Provider store={store}>
  // </Provider>

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderContainer style={{flex: 2}} activeTileState={this.state} />
        <TileIndexContainer
          setTile={this.setActiveTile}
          currentTileSet={this.state.currentTileSet}
          sentenceState={this.state}
          style={{flex: 1}} />
      </View>
    )
  }

}

export default Main;
