//级联菜单
var React = require('react-native');
var {
  Text,
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  View
} = React;

	var prefixType = '_type_';
	var prefixStyle='_style_';
	var defaultBackgroundColor = {backgroundColor:'#FFF'};

var CascadMenu = React.createClass({

	render:function(){
		var header = this.renderHeader();
		var left = this.renderLeft();
		var right = this.renderRight();
		return(
			<View style={styles.container}>
					<View style={[styles.row,styles.header]}>
							{header}
					</View>
					<View style={[styles.row,styles.flex_1]}>
							<ScrollView style={[styles.flex_1,styles.left_pannel]}>
									{left}
							</ScrollView>
							<ScrollView style={[styles.flex_1,styles.right_pannel]}>
									{right}
							</ScrollView>
					</View>
			</View>
			);
	},

	getInitialState:function () {
		 var data = this.props.data;
		 var nSelected = this.props.nSelected;
		 var tabSelected = this.props.tabSelected;
		 var obj = {};
		 var kIndex = 0;
		 for (var k in data){
		 	var childData = data[k];
		 	var cIndex = 0;
		 	for (var c in childData){
		 		var type = prefixType + k + '_' + c;
		 		var style = prefixStyle + k + '_' + c;
		 		if ( tabSelected == kIndex &&  nSelected == cIndex ){
		 			obj[type] = true;
		 			obj[style] = defaultBackgroundColor;
		 		}else{	
			 		obj[type] = false;
			 		obj[style] = {};
		 		}
		 		cIndex ++;
		 	}
		 	kIndex ++;
		 }
		 obj.tabSelected = tabSelected;
		 obj.nSelected = nSelected;
		 return obj;
	},

	renderHeader:function(){
		var data = this.props.data;
		var tabSelected = this.state.tabSelected;
		var header =[];
		var tabIndex = 0;
		for(var i in data){
			var tabStyle = null;
			var headerContainerStyle = {};
			if (tabIndex == tabSelected) {
				tabStyle = [styles.header_text,styles.active_blue];
				headerContainerStyle = [styles.flex_1,styles.center,styles.header,styles.header_selected];
			}else {
				tabStyle = [styles.header_text];
				headerContainerStyle = [styles.flex_1,styles.center,styles.header];
			}
			header.push(
				<TouchableOpacity style={headerContainerStyle}
					onPress={this.headerPress.bind(this,i)}>
					<Text style={tabStyle}>{i}</Text>
				</TouchableOpacity>
				);
			tabIndex ++;
		}
		return header;
	},
	renderLeft:function(){
		var data = this.props.data;
		var tabSelected = this.state.tabSelected;
		var leftPannel = [];
		var index = 0;
		for (var i in data){
			if(index == tabSelected){
				for (var k in data[i]){
					var style = this.state[prefixStyle+i+'_'+k];
					leftPannel.push(
						<View style={[styles.pannel,styles.center,style]}>
							<Text onPress={this.leftPress.bind(this,i,k)} style={[styles.left_row]}>{k}</Text>
						</View>
						);
				}
				break;
			}
			index ++;
		}
		return leftPannel;
	},

	renderRight:function(){
		var data = this.props.data;
		var tabSelected = this.state.tabSelected;
		var nSelected = this.state.nSelected;
		var tabIndex = 0;
		var rightPannel = [];
		for(var i in data){
			if (tabSelected == tabIndex) {
				for (var k in data[i]){
					if (this.state[prefixType+i+'_'+k]) {
						for(var j in data[i][k]){
							rightPannel.push(
								<View style={[styles.pannel,styles.center,styles.right_item]}>
									<Text onPress={this.props.click.bind(this,data[i][k][j])} style={styles.left_row}>{data[i][k][j]}</Text>
								</View>
								);
						}
						break;
					};
				}
			};
			tabIndex ++;
		}
		return rightPannel;
	},
	headerPress:function(title){
		var data = this.props.data;
		var index = 0;
		for(var i  in data){
			if ( i == title){
				this.setState({tabSelected:index,});
				var obj = {};
				var n = 0;
				for (var k in data[i]){
					if (n !== 0){
						obj[prefixType+i+'_'+k] = false;
						obj[prefixStyle+i+'_'+k] = {};
					}else{
						obj[prefixType+i+'_'+k] = true;
						obj[prefixStyle+i+'_'+k] = defaultBackgroundColor;
					}
					n++;
				}
			    this.setState(obj);
			}
			index++;
		}
	},
	leftPress:function(tabIndex,nIndex){
		var obj = {};
		for (var k in this.state){
			if (k.indexOf(prefixType) > -1) {
				var obj = {};
				obj [k] = false;
				this.setState(obj);
			};
			if (k.indexOf(prefixStyle) > -1){
				var obj = {};
			    obj[k] = {};
				this.setState(obj);
			}
		}
		obj[prefixType + tabIndex + '_' + nIndex] = true;
		obj[prefixStyle + tabIndex+ '_' + nIndex] = defaultBackgroundColor;
		this.setState(obj);
	},
});

var styles = StyleSheet.create({
	container:{
		height:200,
		flex:1,
		borderTopWidth:1,
		borderBottomWidth:1,
		borderColor:'#DDD',
	},
	row:{
		flexDirection:'row',
	},
	flex_1:{
		flex:1,
	},
	header:{
		height:35,
		borderBottomWidth:1,
		borderColor:'#DFDFDF',
		backgroundColor:'#F5F5F5',
	},
	header_selected:{
		backgroundColor:'#FFFFFF',
	},
	header_text:{
		color:'#7B7B7B',
		fontSize:15,
	},
	center:{
		justifyContent:'center',
		alignItems:'center',
	},
	left_pannel:{
		backgroundColor:'#F2F2F2',
	},
	right_item:{
		height:35,
		borderColor:'#EEEEEE',
		borderBottomWidth:1/PixelRatio.get(),
	},
	pannel:{
		height:30,
	},
	left_row:{
		fontSize:14,
		color:'#7C7C7C',
	},
	right_pannel:{
	},
	active_blue:{
		color:'#00B7EB',
	},
	active_fff:{
		backgroundColor:'#FFF',
	},
});

module.exports = CascadMenu;