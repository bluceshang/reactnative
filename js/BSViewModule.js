'use strict';

import React,{
	Component,
	StyleSheet,
	View,
}from 'react-native';

var BSToast = require('./module/BSToast');
var BSTextView = require('./module/BSTextView');

var BSViewModule = React.createClass({
	render(){
		return(
			<View style={[styles.container,styles.center]}>
				<BSTextView onChange={this.clickListener} style={styles.text} text={'text'} textColor={'#FF0000'} textSize={40}/>
			</View>
			);
	},

	clickListener(e:Event){
		BSToast.show('hello toast '+e.toString(),BSToast.SHORT);
	}
});

var styles = StyleSheet.create({
	container:{
		width:250,
		height:80,
		backgroundColor:'blue',
	},
	center:{
		justifyContent:'center',
		alignItems:'center',
	},
	text:{
		width:250,
		height:80,
	}
});

module.exports = BSViewModule;