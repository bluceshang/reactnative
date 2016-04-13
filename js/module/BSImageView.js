'use strict';

var { requireNativeComponent, PropTypes } = require('react-native');

var iface = {
  name: 'BSImageView',
  propTypes: {
    src: PropTypes.string,
    borderRadius: PropTypes.number,
    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
  },
};

module.exports = requireNativeComponent('BSImageView', iface,{nativeOnly:{
	renderToHardwareTextureAndroid:true,
	onLayout:true,
	accessibilityLiveRegion:true,
	accessibilityComponentType:true,
	importantForAccessibility:true,
	accessibilityLabel:true,
	testID:true,
}});