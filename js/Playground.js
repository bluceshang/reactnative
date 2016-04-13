'use strict';

import React,{
	Component,
	Animated,
	Text,
}from 'react-native';
var BSToast = require('./module/BSToast');
BSToast.show('hello toast',BSToast.SHORT);

class Playground extends Component{
	constructor(props){
		super(props);
		this.state={
			bounceValue:new Animated.Value(0),
		};
	}
	render():ReactElement{
		return(
			<Animated.Image
				source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
				style={{flex:1,
					transform:[{scale:this.state.bounceValue},]
				}}
				>
				<Text style={{width:80,height:50,color:'#FFF',fontSize:20,paddingLeft:15,backgroundColor:'#F00'}} 
					onPress={this.onImageClick.bind(this)}>click</Text>
				</Animated.Image>
			);
	}
	componentDidMount(){
		this.state.bounceValue.setValue(1.5);
		Animated.spring(
			this.state.bounceValue,
			{
				toValue:0.8,
				friction:1,
			}
			).start();
	}
	onImageClick(){
		BSToast.show('hello toast',BSToast.SHORT);
		this.state.bounceValue.setValue(0.6);
		Animated.spring(
			this.state.bounceValue,
			{
				toValue:0.8,
				friction:1,
			},
		).start(()=>this.onEndAnimation());
	}

	onEndAnimation(){
		
	}

}

module.exports = Playground;