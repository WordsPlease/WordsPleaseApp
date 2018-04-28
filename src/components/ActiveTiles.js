import React, { Component } from 'react';
import { View } from 'react-native';
import TileItem from './TileItem'

class ActiveTiles extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  renderingTiles() {
    renderedArray = [];
    let activeState = this.props.activeTileState
    let activeStateKeys = Object.keys(activeState)
    for (i = 0; i < activeStateKeys.length; i++) {
      let currentTile = activeState[activeStateKeys[i]]
      if (activeStateKeys[i] === 'currentTileSet') {
        continue
      }
      if (currentTile.title) {
        renderedArray.push(  <TileItem setTile={() => { console.log("don't touch me") } }
        item={currentTile} />)
      }
    }
    return renderedArray
  }

  render() {
    let activeTiles = this.renderingTiles();
    return (
      <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#3498DB'}}>
        {activeTiles}
      </View>
    )
  }
}

export default ActiveTiles;
