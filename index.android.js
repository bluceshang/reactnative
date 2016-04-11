'use strict';

var React = require('react-native');
var {
  Text,
  AppRegistry,
  Component,
  View
} = React;

class FirstNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    )
  }
}
var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('FirstNative', () => FirstNative);