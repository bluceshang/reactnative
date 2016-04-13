'use strict';

import React,{
	Component,
	Animated,
	Text,
	DeviceEventEmitter,
	PropTypes,
}from 'react-native';
var BSToast = require('./module/BSToast');

var BSImageView = require('./module/BSImageView');
var BSTextView = require('./module/BSTextView');

class Playground extends Component{
	constructor(props){
		super(props);
		this.state={
			bounceValue:new Animated.Value(0),
		};
	}
		// <BSImageView style={{width:80,height:50,padding:5,backgroundColor:'#FFF'}} 
		// 			src={'http://i.imgur.com/XMKOH81.jpg'} 
		// 			borderRadius={15} 
		// 			resizeMode={'cover'}
		// 			onPress={this.onImageClick.bind(this)}/>
	render():ReactElement{
		return(
			<Animated.Image
				source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
				style={{flex:1,
					transform:[{scale:this.state.bounceValue},]
				}}
				>
			

				<BSTextView  text={'myView'} textColor={'#FFFFFF'} textSize={16} />
				</Animated.Image>
			);
	}
	componentDidMount(){
		DeviceEventEmitter.addListener('PersonInfo',function(e:Event){
			BSToast.show(e.name+' '+e.age+' '+e.sex ,BSToast.SHORT);
		});

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
		var a = 34+' ' ;
		this.stringToInt(a);
		this.state.bounceValue.setValue(0.6);
		Animated.spring(
			this.state.bounceValue,
			{
				toValue:0.8,
				friction:1,
			},
		).start();
	}

	stringToInt(val){
		this.messageOperation();
		BSToast.stringToInt(val,(msg)=>{
			BSToast.show(msg+'hello toast',BSToast.SHORT);
		},(msg)=>{
			BSToast.show(msg,BSToast.SHORT);
		});
	}

	async  messageOperation(){
		try{
			var{
				relativeX,
				relativeY,
				width,
				height,
				message,
			} = await BSToast.messageOperation(100+' ');
			BSToast.show('relativeX:'+relativeX+' relativeY:'+relativeY+' width:'+width+' height:'+height+' msg:'+message,BSToast.SHORT);
		}catch(e){
			BSToast.show('sorry',BSToast.SHORT);
		}
	}

}

module.exports = Playground;