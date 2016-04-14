'use strict';

import React,{

}from 'react-native';

var FadeInView = require('./module/FadeInView');

var AnimatedDemo = React.createClass({
	render(){
		return(
			<FadeInView style={{width:80,height:80}}/>
		)
	}
});

module.exports = AnimatedDemo;