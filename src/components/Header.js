import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import ActiveTiles from './ActiveTiles';
import BackButton from './BackButton';
import ToggleSetting from './ToggleSetting';

class Header extends Component {

  constructor(props) {
    super(props)
    this.changeSetting = this.changeSetting.bind(this);
  }

  componentWillMount(){
    this.props.getSetting(1)
  }

  changeSetting() {
    if (this.props.activeTileState.currentTileSet === "starter") {
      this.props.setting.id === 1 ? this.props.getSetting(2) : this.props.getSetting(1)
    } else {
      console.warn("Starter onleh")
    }
  }

  render() {
    console.log(this.props.activeTileState)
    let color = this.props.setting.id !== 2 ? '#ddd' : '#F8C471'
    // <Image style={{flex: 1}} source={{uri: this.props.setting.image_path}} />
    return(
    <View style={{flex: 3, flexDirection: 'row', backgroundColor: color}}>
      <ToggleSetting changeSetting={this.changeSetting}/>
      <BackButton onPressHandler={this.props.onPressHandler}/>
      <ActiveTiles
        activeTileState={this.props.activeTileState} />
      <View>
        <Text style={{flex:1}} onPress={this.props.pageButtonHandler.bind(this, "back", Object.keys(this.props.tiles).length)}>Back</Text>
        <Text style={{flex:1}} onPress={this.props.pageButtonHandler.bind(this, "forward", Object.keys(this.props.tiles).length)}>Forward</Text>
      </View>
    </View>
  )}
}

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
  margin: '20px',
  backgroundColor: '#3498DB',

}
