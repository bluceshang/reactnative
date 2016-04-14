'use strict';

import React,{
	Alert,
	Platform,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
}from 'react-native';
var BSToast = require('./BSToast');
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';
var AlertExampleBlock = React.createClass({
	render(){
		return(
			<View>
				<TouchableHighlight style={styles.wrapper} onPress={()=>Alert.alert('Alert Title',
					alertMessage,)} >
					<View style={styles.button}>
						<Text>Alert with message and default button </Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight style={styles.wrapper} onPress={()=>Alert.alert('Alert Title',
					alertMessage,
					[
						{text:'OK',onPress:()=> BSToast.show('click ok button',BSToast.SHORT);},
					]
				)} >
					<View style={styles.button}>
						<Text>Alert with one button </Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight style={styles.wrapper} onPress={()=>Alert.alert('Alert Title',
					alertMessage,
					[
						{text:'Cancel',onPress:()=>BSToast.show('click Cancel Button ',BSToast.SHORT)},
						{text:'OK',onPress:()=>BSToast.show('click OK button',BSToast.SHORT)},
					]
				)} >
					<View style={styles.button}>
						<Text>Alert with two button </Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight style={styles.wrapper} onPress={()=>Alert.alert('Alert Title',
					alertMessage,
					[
						{text:'Cancel',onPress:()=>BSToast.show('click Cancel Button ',BSToast.SHORT)},
						{text:'OK',onPress:()=>BSToast.show('click OK button',BSToast.SHORT)},
						{text:'Foo',onPress:()=>BSToast.show('click Foo button',BSToast.SHORT)},
					]
				)} >
					<View style={styles.button}>
						<Text>Alert with two button </Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight style={styles.wrapper} onPress={()=>Alert.alert('Alert Title',
					alertMessage,
					[
						'...........'.spilt('').map((dot,index) => ({
							text:'Button '+index,
							onPress:()=>BSToast.show('Press '+index,BSToast.SHORT)
						}))
					]
				)} >
					<View style={styles.button}>
						<Text>Alert with too many buttons </Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	},
});

var AlertExample = React.createClass({
	statics:{
		title:'Title',
		description:'Alerts display a concise and informative message and prompt the user to make a decision.',
	},
	render(){
		return(
					<AlertExampleBlock />
			)
	}
});

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

module.exports = {
  AlertExample,
  AlertExampleBlock,
}