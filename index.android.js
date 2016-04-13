'use strict';

import React, {
  AppRegistry,
} from 'react-native';

var ListViewBS = require('./js/ListViewBS');
var CascadMenu = require('./js/CascadMenu');
var ViewPager = require('./js/ViewPager');
var Playground = require('./js/Playground');

AppRegistry.registerComponent('ViewPager', () => ViewPager);
AppRegistry.registerComponent('Playground',() => Playground);
AppRegistry.registerComponent('FirstNative', () => FirstNative);