import React, {Component} from 'react';
import ReactNative, {
  Text,
  View,
  StyleSheet
} from 'react-native';
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

  componentWillReceiveProps(nextProps){
    if (nextProps.currentTileSet !== this.props.currentTileSet) {
      if (nextProps.currentTileSet==='middle') {
        this.props.getMiddles(nextProps.sentenceState.activeStarter.id)
      } else if (nextProps.currentTileSet==='finisher') {
        this.props.getFinishers(nextProps.sentenceState.activeMiddle.id, this.props.setting.id)
      }
      else if (nextProps.currentTileSet==='starter') {
        this.props.getStarters();
      }
    }
  }

  renderList() {

    let renderList = []
     let renderSubList = []
    // let startingIndexNumber = (this.props.pageNumber * 8 > this.props.tiles.length) ? (parseInt(this.props.tiles.length/8) * 8  : this.props.pageNumber * 8
    let startingIndex =
      this.props.tiles.slice(this.props.pageNumber*8, this.props.tiles.length)
        .forEach((item, i) => {
        if (i % 4 === 0 && i != 0) {
          renderList.push(renderSubList)
          renderSubList = []
        }

        renderSubList.push(<TileItem style={styles.box}
          innerKey={item.title} item={item}
          key={item.title}
          keyboardShouldPersistTaps='always'
          setTile={this.props.setTile} />)
        // renderSubList.push(<TileItem style={styles.box} key={item.id} item={item}
        //   onPress={this.props.onPress} />)

      })

        while (renderSubList.length !== 4) {
          renderSubList.push(<TileItem style={styles.box} item={{title: ""}}
          innerKey={'empty' + this.props.currentTileSet + renderSubList.length} setTile={() => {}}/>)

        }
        renderList.push(renderSubList)

        renderSubList = []
        while (renderSubList.length !== 4) {
          renderSubList.push(<TileItem style={styles.box} item={{title: ""}}
          innerKey={'empty' + this.props.currentTileSet + renderSubList.length} setTile={() => {}}/>)

        }
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

    return (
      <View style={{flex: 2}}>
        <View  key={'top-index'} style={{ flex: 4, flexDirection: 'row', backgroundColor: '#F7DC6F'}}>
        {listButtons[0]}

        </View>
        <View key={'bottom-index'} style={{ flex: 4, flexDirection: 'row', backgroundColor: '#82E0AA'}} >
        {listButtons[1]}

        </View>
      </View>
    )
  }
  // {this.renderList()}

}

// borderWidth: 1,
// borderRadius: 2,
// borderColor: 'black',
// borderBottomWidth: 0,
// borderRightWidth: 0,
const styles = {
  box: {
    flex: 1,
    width: '25%'
  }
}

export default TileIndex;
