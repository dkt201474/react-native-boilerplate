import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

const Foo = ({ gotoHome }) =>
  (<View style={{ alignItems: 'center', marginTop: 200 }}>
    <Text>Foo</Text>
    <TouchableOpacity onPress={gotoHome}>
      <Text>Goto Home</Text>
    </TouchableOpacity>
  </View>);

export default connect(null, (dispatch) => ({gotoHome: () => dispatch({ type: 'GOTO_HOME' })}))(Foo);
