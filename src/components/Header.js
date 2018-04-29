import React, { Component } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import ActiveTiles from './ActiveTiles';
import BackButton from './BackButton';
import ToggleSetting from './ToggleSetting';

class Header extends Component {

  constructor(props) {
    super(props)
    this.changeSetting = this.changeSetting.bind(this);
  }

  componentDidMount(){
    this.props.getSetting(1)
  }

  changeSetting() {
    // if (this.props.activeTileState.currentTileSet === "starter") {
    //   this.props.setting[0] === 1 ? this.props.getSetting(2) : this.props.getSetting(1)
    // }
    this.props.setting[0] === 1 ? this.props.getSetting(2) : this.props.getSetting(1)

  }

  render() {
    // console.log(this.props.activeTileState)
    let color = this.props.setting.id !== 2 ? '#ddd' : '#F8C471'

    // console.warn(this.props.setting);

    let bg = null

    if (this.props.setting[2]) {
      bg =
      <ImageBackground style={{width: '100%', height: '100%', position: 'absolute'}} source={{uri: this.props.setting[2]}}/>
    }

//this is the forward and backward functionality
    // <View>
    //   <Text style={{flex:1}} onPress={this.props.pageButtonHandler.bind(this, "back", Object.keys(this.props.tiles).length)}>Back</Text>
    //   <Text style={{flex:1}} onPress={this.props.pageButtonHandler.bind(this, "forward", Object.keys(this.props.tiles).length)}>Forward</Text>
    // </View>

    return(
    <View style={{flex: 3}}>
      {bg}
      <View style={styles.buttons}>
        <ToggleSetting
          changeSetting={this.changeSetting}/>
      </View>
      <View style={{display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'row', flex: 1}}>
        <ActiveTiles
          activeTileState={this.props.activeTileState} />
        <BackButton
          onPressHandler={this.props.onPressHandler}/>
      </View>
    </View>
  )}
}

// <View style={{flex: 1, backgroundColor: '#F8C471'}} />
export default Header;

// const Header = (props) => {
//   return (
//     <View style={{flex: 2, flexDirection: 'row'}}>
//       <View style={{flex: 1, backgroundColor: '#F8C471'}}>{props.title}</View>
//       <View style={{flex: 1, backgroundColor: '#EC7063'}}>
//         <Image
//           style={{width: 66, height: 58}}
//           source={{uri: {props.image_path}}}
//           />
//       </View>
//       <View style={{flex: 1, backgroundColor: '#3498DB'}} />
//     </View>
//   )
// }

const styles = {
  buttons: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
}
