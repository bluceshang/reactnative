//级联菜单
var React = require('react-native');
var {
  Text,
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  View
} = React;


var CascadMenu = React.createClass({
	getInitialState:function  () {
		return{
			wholeArea:false,
			hotBusiness:true,
			hotDistrict:false,
			wholeAreaFFF:{},
			hotBusinessFFF:{backgroundColor:'#FFF'},
			hotDistrictFFF:{},
		};
	},
	render:function(){
		return(
			<View style={styles.container}>
					<View style={[styles.row,styles.header]}>
							<View style={[styles.flex_1,styles.center]}>
									<Text style={[styles.header_text,styles.active_blue]}>全部区域</Text>
							</View>
							<View style={[styles.flex_1,styles.center]}>
									<Text style={[styles.header_text]}>地铁沿线</Text>
							</View>
					</View>
					<View style={[styles.row,styles.flex_1]}>
							<ScrollView style={[styles.flex_1,styles.left_pannel]}>
									<Text onPress={this.wholeArea.bind(this,this.state.wholeArea)} style={[styles.left_row,this.state.wholeAreaFFF,styles.center]}>全部区域</Text>
									<Text onPress={this.hotBusiness.bind(this,this.state.hotBusiness)} style={[styles.left_row,this.state.hotBusinessFFF]}>热门商圈</Text>
									<Text onPress={this.hotDistrict.bind(this,this.state.hotDistrict)} style={[styles.left_row,this.state.hotDistrictFFF]}>热门行政区</Text>
							</ScrollView>
							{
								this.state.wholeArea?
									<ScrollView style={[styles.flex_1,styles.right_pannel]}>
											<Text style={styles.left_row}>全部区域</Text>
									</ScrollView>:null
							}{
								this.state.hotBusiness?
									<ScrollView style={[styles.flex_1,styles.right_pannel]}>
											<Text style={styles.left_row}>虹桥地区</Text>
											<Text style={styles.left_row}>徐家汇地区</Text>
											<Text style={styles.left_row}>淮海路地区</Text>
											<Text style={styles.left_row}>静安寺地区</Text>
											<Text style={styles.left_row}>上海火车站地区</Text>
											<Text style={styles.left_row}>浦东陆家嘴金融贸易区</Text>
											<Text style={styles.left_row}>四川北路商业区</Text>
											<Text style={styles.left_row}>人民广场地区</Text>
									</ScrollView>:null
							}{
								this.state.hotDistrict?
									<ScrollView style={[styles.flex_1,styles.right_pannel]}>
											<Text style={styles.left_row}>静安区</Text>
											<Text style={styles.left_row}>徐汇区</Text>
											<Text style={styles.left_row}>长宁长</Text>
											<Text style={styles.left_row}>黄浦区</Text>
											<Text style={styles.left_row}>虹口区</Text>
											<Text style={styles.left_row}>宝山区</Text>
											<Text style={styles.left_row}>闸北区</Text>
									</ScrollView>:null
							}
					</View>
			</View>
			);
	},
	wholeArea:function(){
		this.setState({
			wholeArea:true,
			hotBusiness:false,
			hotDistrict:false,
			wholeAreaFFF:{backgroundColor:'#FFF'},
			hotBusinessFFF:{},
			hotDistrictFFF:{},
		});
	},
	hotBusiness:function(){
		this.setState({
			wholeArea:false,
			hotBusiness:true,
			hotDistrict:false,
			wholeAreaFFF:{},
			hotBusinessFFF:{backgroundColor:'#FFF'},
			hotDistrictFFF:{},
		});
	},
	hotDistrict:function(){
		this.setState({
			wholeArea:false,
			hotBusiness:false,
			hotDistrict:true,
			wholeAreaFFF:{},
			hotBusinessFFF:{},
			hotDistrictFFF:{backgroundColor:'#FFF'},
		});
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
	left_row:{
		textAlign:'center',
		textAlignVertical:'center',
		flex:1,
		height:30,
		lineHeight:20,
		fontSize:14,
		color:'#7C7C7C',
	},
	right_pannel:{
		marginLeft:10,
	},
	active_blue:{
		color:'#00B7EB',
	},
	active_fff:{
		backgroundColor:'#FFF',
	},
});

module.exports = CascadMenu;