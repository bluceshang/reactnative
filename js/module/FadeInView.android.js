'use strict';

import React,{	
	Component,
	Animated,
}from 'react-native';

class FadeInView extends Component{
	constructor(props){
		super(props);
		this.state = {
			fadeAnim:new Animated.Value(0),
		};
	}

	componentDidMount(){
		this.state.fadeAnim.setValue(0.4);
		Animated.sequence([
			Animated.spring(
				this.state.fadeAnim,
				{
					toValue:1,
					friction:1,
					tension:80,
				},
			)
		]).start();
	}

	render(){
		return(
			<Animated.View
				style={{
					width:100,
					height:100,
					backgroundColor:'#0000ff',
				    opacity: this.state.fadeAnim, 
				    transform: [{
					    translateY: this.state.fadeAnim.interpolate({
					       inputRange: [0, 1],
					       outputRange: [150, 0]
					    }),
				    },{
				    	translateX:this.state.fadeAnim.interpolate({
					    	inputRange:[0, 1],
					    	outputRange:[0, 150]
					    }),
				    },{
				    	scale:this.state.fadeAnim,
				    }],
				 }}>
				{this.props.children}
			</Animated.View>
		);
	}
}

module.exports = FadeInView;