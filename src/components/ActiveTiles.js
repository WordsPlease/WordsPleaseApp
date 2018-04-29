import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TileItem from './TileItem'

class ActiveTiles extends Component {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
  }

  renderingTiles() {
    let renderedSet = []
    let renderedSentence = ""
    let renderedArray = [];
    let activeState = this.props.activeTileState
    let activeStateKeys = Object.keys(activeState)
    for (i = 0; i < activeStateKeys.length; i++) {
      let currentTile = activeState[activeStateKeys[i]]
      if (activeStateKeys[i] === 'currentTileSet') {
        continue
      }
      if (currentTile.title != "") {
        renderedSentence += currentTile.title + ' '
        renderedArray.push(<TileItem setTile={() => { console.log("don't touch me") } }
        item={currentTile} key={currentTile.title} style={styles.tiles} /> )
      }
    }
    renderedSet.push(renderedSentence)
    renderedSet.push(renderedArray)
    return renderedSet

  }



  render() {
    let activeSet = this.renderingTiles();
    return (
      <View style={styles.activeTilesContainer}>
        <Text>{activeSet[0]}</Text>
        <View style={{flex: 3, flexDirection: 'row', backgroundColor: '#3498DB'}}>
          {activeSet[1]}
        </View>
      </View>
    )
  }
}

const styles = {
  tiles: {
    width: '33%',
  },
  activeTilesContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 50,
    marginRight: 70,
    marginLeft: 70,
    backgroundColor: '#3498DB',
  }
}

export default ActiveTiles;
