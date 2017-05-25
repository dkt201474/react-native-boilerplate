import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '../theme';

const AppStatusBar = () => (
  <StatusBar
      backgroundColor={Colors.transparent}
      barStyle="light-content"
  />
);

export default AppStatusBar;
