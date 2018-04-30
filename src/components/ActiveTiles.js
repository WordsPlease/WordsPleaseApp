import Tts from 'react-native-tts';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
      if (activeStateKeys[i] === 'currentTileSet' || activeStateKeys[i] ===
    'pageNumber') {
        continue
      }
      if (currentTile.title != "") {
        if (currentTile.is_last === 't') {
          renderedSentence += currentTile.title + '.'
        } else {
          renderedSentence += currentTile.title + ' '
        }
        renderedArray.push(<TileItem setTile={() => { console.log("") } }
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
        <TouchableOpacity
          onPress={()=> {
            Tts.speak(activeSet[0], { iosVoiceId: 'com.apple.ttsbundle.Samantha-compact' })
          }}>
          <Text>
            {activeSet[0]}
          </Text>
        </TouchableOpacity>
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
    marginRight: 1,
  },
  activeTilesContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 30,
    // marginRight: '25%',
    marginLeft: '25%',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#17202A',
    display: 'flex',
    alignSelf: 'center'
  }
}

export default ActiveTiles;
