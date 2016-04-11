/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  PixelRatio,
  View
} from 'react-native';

var ListViewBS = React.createClass({
    render:function  () {
        return (
              <View style={styles.list_item}>
                    <Text style={styles.list_item_font}>{this.props.title}</Text>
              </View> 
          );
    }
})



var styles = StyleSheet.create({
    flex:{
      flex:1,
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#DDD',
        justifyContent:'center',
    },
    list_item_font:{
        fontSize:16,
    },
})


module.exports = ListViewBS;