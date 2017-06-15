/*
* -> Metrics contains the plateform Dimensions.
*    When the phone is rotated dimensions will be changed accordinly
*/

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  width: width < height ? width : height,

  height: width < height ? height : width
};

export default metrics;
