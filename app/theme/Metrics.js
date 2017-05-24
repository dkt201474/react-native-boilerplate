import { Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  m0: 0,
  m1: 1,
  m2: 2,
  m3: 3,
  m4: 4,
  m5: 5,
  m6: 6,
  m7: 7,
  m8: 8,
  m9: 9,
  m10: 10,
  m15: 15,
  m20: 20,
  m25: 25,
  m30: 30,
  m40: 40,
  m50: 50,

  width: width < height ? width : height,
  height: width < height ? height : width,

  icons: {
    xxs: 10,
    xs: 10,
    sm: 25,
    md: 30,
    lg: 40,
    xl: 50,
    xxl: 60,
  },
  images: {
    xxs: 15,
    xs: 20,
    sm: 30,
    md: 40,
    lg: 50,
    xl: 60,
    xxl: 100,
    logo: 200,
  },
};

export default metrics;
