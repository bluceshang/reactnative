'use strict';

var React = require('react-native');
var {
  Text,
  AppRegistry,
  Component,
  View
} = React;

var ListViewBS = require('./js/ListViewBS');
var CascadMenu = require('./js/CascadMenu');

class FirstNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListViewBS title='宇航员在太空宣布"三体"获奖'></ListViewBS>
        <ListViewBS title='NASA发短片纪念火星征程50年'></ListViewBS>
        <ListViewBS title='男生连续做一周苦瓜吃吐女生'></ListViewBS>
        <ListViewBS title='女童遇鲨鱼袭击又下海救伙伴'></ListViewBS>
        <CascadMenu></CascadMenu>
      </View>
    )
  }
}
var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

AppRegistry.registerComponent('FirstNative', () => FirstNative);