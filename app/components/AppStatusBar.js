import React from 'react';
import { StatusBar, Platform } from 'react-native';

import { Colors } from '../theme';

const AppStatusBar = () => (
  <StatusBar
      backgroundColor={Colors.gray10}
      barStyle="light-content"
      hidden={Platform.OS === 'ios' ? true : false}
  />
);

export default AppStatusBar;
