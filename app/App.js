import React from 'react';
import { Font } from 'expo';

import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
      'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
      'robotoCondensedRegular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
      'robotoCondensedLight': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'robotoCondensedLight', fontSize: 30}}>Hello </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
