'use strict';
import React,{
	Component,
	PropTypes,
	requireNativeComponent,
}from 'react-native';

var BSToast = require('./BSToast');

class BSTextView extends Component{
	constructor(){
		super();
		this._onChange = this._onChange.bind(this);
	}

	_onChange(event:Event){
		BSToast.show('js event ',BSToast.SHORT);
		if(!this.props.onChangeMessage){
			return;
		}
		this.props.onChangeMessage(event.nativeEvent.message);
	}

	render(){
		return <BSTextView {...this.porps} onChange={this._onChange} />;
	}
}

BSTextView.propTypes={
	onChangeMessage:PropTypes.func,
	text:PropTypes.string,
	textColor:PropTypes.string,
	textSize:PropTypes.number,
}

module.exports = requireNativeComponent('BSTextView', BSTextView,{nativeOnly:{
	onChange:true,
	renderToHardwareTextureAndroid:true,
	onLayout:true,
	accessibilityLiveRegion:true,
	accessibilityComponentType:true,
	importantForAccessibility:true,
	accessibilityLabel:true,
	testID:true,
}});