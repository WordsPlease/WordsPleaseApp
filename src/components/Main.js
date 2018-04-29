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
    this.onPressHandler = this.onPressHandler.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.getPrevTileSet = this.getPrevTileSet.bind(this);
    this.state = {
      activeStarter: {title: ""},
      activeMiddle: {title: ""},
      activeFinisher: {title: ""},
      currentTileSet: "starter"
    }
  }

  setActiveTile(item, e) {
    if (typeof item === "undefined") {
      return null
    }

    if (this.state.currentTileSet === "starter") {
      //based on onPress. Insert tile into activeStarter position if the tile is a starter
      this.setState({ activeStarter: item, currentTileSet: "middle"})
    }
    else if (this.state.currentTileSet === "middle") {
      //check activeStarter to see if we are done, otherwise change to a finisher
      // let nextState = "done"
      //talk to Matthew about making this easier to call
      // if (item.finishers.length !== 0) {
      //   nextState = "finisher"
      // }
      this.setState({ activeMiddle: item, currentTileSet: "finisher"})
    }
    else if (this.state.currentTileSet === "finisher") {
      this.setState({ activeFinisher: item, currentTileSet: "done"})
    }
  }

  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
  }

  getPrevTileSet(str) {
    let prevTileSet = ""
    if (str === "done") {
      prevTileSet = "finisher"
    } else if (str === "finisher") {
      prevTileSet = "middle"
    } else {
      prevTileSet = "starter"
    }
    return prevTileSet
  }

  onPressHandler() {
    let currentTile = this.state.currentTileSet
    let actualCurrentTileSet = this.getPrevTileSet(currentTile)
    let prevTile = "active" + this.capitalize(actualCurrentTileSet)
    let newState = {currentTileSet: actualCurrentTileSet}
    newState[prevTile] = {title: ""}
    this.setState(newState)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderContainer style={{flex: 4}} onPressHandler={this.onPressHandler}
          activeTileState={this.state} />
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
