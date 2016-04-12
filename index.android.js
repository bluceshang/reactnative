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

 var FirstNative = React.createClass ({
  render () {
    return (
      <View style={styles.container}>
        <ListViewBS title='宇航员在太空宣布"三体"获奖'></ListViewBS>
        <ListViewBS title='NASA发短片纪念火星征程50年'></ListViewBS>
        <ListViewBS title='男生连续做一周苦瓜吃吐女生'></ListViewBS>
        <ListViewBS title='女童遇鲨鱼袭击又下海救伙伴'></ListViewBS>
        <CascadMenu data={data} nSelected={0} tabSelected={0} click={this.onMyItemClick} ></CascadMenu>
      </View>
    );
  },
  onMyItemClick:function  (val) {
    // body...
    alert(val);
  },

});

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

var data = {
  'Language':{
    'All':['All'],
    'Web Front End':[
        'HTML',
        'CSS',
        'JavaScript',
    ],
    "Server":[
        'Node.js',
        'PHP',
        'Python',
        'Ruby',
    ],
  },
  'Tool':{
        'All':['All'],
        'Apple':['Xcode'],
        'Other':['Sublime Text','WebStrom',],
  }
};

AppRegistry.registerComponent('FirstNative', () => FirstNative);