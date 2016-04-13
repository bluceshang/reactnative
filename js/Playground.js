'use strict';

import React,{
	Component,
	Animated,
	Text,
	DeviceEventEmitter,
}from 'react-native';
var BSToast = require('./module/BSToast');

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