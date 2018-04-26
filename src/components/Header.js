import React, { Component } from 'react';
import { View } from 'react-native';

class Header extends Component {

  // this.props.fetchSetting(1)
  componentWillMount(){
    // this.setState({[]})
  }

  render() {

    // console.log(this.props.fetchSetting(1));

    return(
    <View style={{flex: 2, flexDirection: 'row'}}>
      <View style={{flex: 2, backgroundColor: '#3498DB'}} />
      <View style={{flex: 1, backgroundColor: '#EC7063'}} />
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
