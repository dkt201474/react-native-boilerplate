import React from 'react';
import Proptypes from 'prop-types';
import { Text, View } from 'react-native';

/* App imports */
import { gray } from '../theme/Colors';

const AppHeader = ({ title }) =>
  (<View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center'
      }}
  >
    <Text
        style={{
          color: gray.g8,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 17
        }}
    >
      {title}
    </Text>
  </View>);

AppHeader.propTypes = { title: Proptypes.string.isRequired };

export default AppHeader;
