import React, {Component} from 'react';
import ReactNative, {
  Text,
  View,
  StyleSheet
} from 'react-native';
import TestData from './TestData';
import TileItem from './TileItem';
import size from 'lodash/size';

class TileIndex extends Component {
  // state = { list: [] };
  constructor(props){
    super(props)
    this.renderList = this.renderList.bind(this)
  }


  componentWillMount() {
    // this.setState({list: TestData})
    this.props.getStarters();

  }

  renderList() {

    let renderList = []
    let renderSubList = []
    this.props.tiles.forEach((item, i) => {
      if (i % 4 === 0 && i != 0) {
        renderList.push(renderSubList)
        renderSubList = []
      }

      renderSubList.push(<TileItem style={styles.box} key={item.id} item={item}
        setTile={this.props.setTile} />)
      // renderSubList.push(<TileItem style={styles.box} key={item.id} item={item}
      //   onPress={this.props.onPress} />)

    })

    renderList.push(renderSubList)

    return renderList

    // let count = 0
    // this.props.tiles.map(i => {
    //   count++
    // })

    // To come back to, for rendering null
    // let toRender = []
    // let subArr = []
    // this.props.tiles.forEach(item, i) => {
    //   subArr.push(item)
    //   if ((i+ 1) % 4 === 0){
    //     toRender.push(subArr)
    //     subArr = []
    //   }
    // }


  }

  render() {

    let listButtons = this.renderList();
    // this.renderList();

    // debugger

    return (
      <View style={{flex: 2}}>
        <View style={{ flex: 4, flexDirection: 'row', backgroundColor: '#F7DC6F'}}>
        {listButtons[0]}

        </View>
        <View style={{ flex: 4, flexDirection: 'row', backgroundColor: '#82E0AA'}} >
        {listButtons[1]}

        </View>
      </View>
    )
  }
  // {this.renderList()}

}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    flex: 1
  }
});

export default TileIndex;
