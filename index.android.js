'use strict';

var React = require('react-native');
var {
  Text,
  AppRegistry,
  Component,
  Image,
  ViewPagerAndroid,
  View
} = React;

var ListViewBS = require('./js/ListViewBS');
var CascadMenu = require('./js/CascadMenu');
var ViewPager = require('./js/ViewPager');
var Playground = require('./js/Playground');
// var Swiper = require('react-native-swiper');
var FirstNative = React.createClass({
    render(){
        return(
           <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
                      <View style={styles.pageStyle}>
                            <Image style={styles.image} resize="stretch" source={{uri:'http://a.hiphotos.baidu.com/image/h%3D200/sign=76a3f29d99510fb367197097e933c893/a8014c086e061d959a158b1c7cf40ad162d9ca47.jpg'}} />
                      </View>
                      <View style={styles.pageStyle}>
                            <Image style={styles.image} resize="stretch" source={{uri:'http://photo.iyaxin.com/attachement/jpg/site2/20100915/00138f9a83920dfada9d14.jpg'}} />
                      </View>
                      <View style={styles.pageStyle}>
                             <Image style={styles.image} resize="stretch" source={{uri:'http://www.xnnews.com.cn/yl/ylrdjj/201211/W020121128603570067239.jpg'}} />
                      </View>
           </ViewPagerAndroid>
          );
    }
});

//  var FirstNative = React.createClass ({
//   render () {
//     return (
//       <View style={styles.container}>
//         <ListViewBS title='宇航员在太空宣布"三体"获奖'></ListViewBS>
//         <ListViewBS title='NASA发短片纪念火星征程50年'></ListViewBS>
//         <ListViewBS title='男生连续做一周苦瓜吃吐女生'></ListViewBS>
//         <ListViewBS title='女童遇鲨鱼袭击又下海救伙伴'></ListViewBS>
//         <CascadMenu data={data} nSelected={0} tabSelected={0} click={this.onMyItemClick} ></CascadMenu>
//       </View>
//     );
//   },
//   onMyItemClick:function  (val) {
//     // body...
//     alert(val);
//   },

// });

var styles = React.StyleSheet.create({
  wrapper:{

  },
  image:{
    height:200,
    width:320,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  slide1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#9DD6EB',
  },
  slide2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#97CAE5',
  },
  slide3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#92BBD9',
  },
  text:{
    color:'#FFF',
    fontSize:30,
    fontWeight:'bold',
  },


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

AppRegistry.registerComponent('ViewPager', () => ViewPager);
AppRegistry.registerComponent('Playground',() => Playground);
AppRegistry.registerComponent('FirstNative', () => FirstNative);