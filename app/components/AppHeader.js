import React from 'react';
import Proptypes from 'prop-types';
import { Text } from 'react-native';
import { Header, Body } from 'native-base';
import { colors, bg } from '../theme/AppStyles';

const AppHeader = ({title}) => (
  <Header style={bg.gray10} >
    <Body>
      <Text style={[colors.white, {fontWeight: 'bold', fontSize: 17}]}>{title}</Text>
    </Body>
  </Header>
);

AppHeader.propTypes = { title: Proptypes.string.isRequired, };

export default AppHeader;
