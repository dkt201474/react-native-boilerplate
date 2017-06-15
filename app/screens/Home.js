import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ gotoFoo }) =>
  (<View style={{ alignItems: 'center', marginTop: 200 }}>
    <Text>Hello Universe</Text>
    <TouchableOpacity onPress={gotoFoo}>
      <Text>Goto foo</Text>
    </TouchableOpacity>
  </View>);

export default connect(null, (dispatch) => ({gotoFoo: () => dispatch({ type: 'GOTO_FOO' })}))(Home);
