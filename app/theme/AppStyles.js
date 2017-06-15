/*
* -> helper for app styling
*    
*
*
*/

import { gray, colors, yellow } from './Colors';

export const header = {
  headerTintColor: gray.g8,
  headerStyle: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 15
  }
};

export const margin = {
  m0: { margin: 0 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  m25: { margin: 25 }
};

export const marginVertical = {
  mv0: { marginVertical: 0 },
  mv5: { marginVertical: 5 },
  mv10: { marginVertical: 10 },
  mv15: { marginVertical: 15 },
  mv20: { marginVertical: 20 },
  mv25: { marginVertical: 25 }
};

export const marginHorizontal = {
  mh0: { marginHorizontal: 0 },
  mh5: { marginHorizontal: 5 },
  mh10: { marginHorizontal: 10 },
  mh15: { marginHorizontal: 15 },
  mh20: { marginHorizontal: 20 },
  mh25: { marginHorizontal: 25 }
};

export const marginTop = {
  mt0: { marginTop: 0 },
  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt15: { marginTop: 15 },
  mt20: { marginTop: 20 },
  mt25: { marginTop: 25 }
};

export const marginBottom = {
  mb0: { marginBottom: 0 },
  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },
  mb25: { marginBottom: 25 }
};

export const padding = {
  p0: { padding: 0 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },
  p25: { padding: 25 }
};

export const paddingVertical = {
  pv0: { paddingVertical: 0 },
  pv5: { paddingVertical: 5 },
  pv10: { paddingVertical: 10 },
  pv15: { paddingVertical: 15 },
  pv20: { paddingVertical: 20 },
  pv25: { paddingVertical: 25 }
};

export const paddingHorizontal = {
  ph0: { paddingHorizontal: 0 },
  ph5: { paddingHorizontal: 5 },
  ph10: { paddingHorizontal: 10 },
  ph15: { paddingHorizontal: 15 },
  ph20: { paddingHorizontal: 20 },
  ph25: { paddingHorizontal: 25 }
};

export const paddingTop = {
  pt0: { paddingTop: 0 },
  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt15: { paddingTop: 15 },
  pt20: { paddingTop: 20 },
  pt25: { paddingTop: 25 }
};

export const paddingBottom = {
  pb0: { paddingBottom: 0 },
  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb15: { paddingBottom: 15 },
  pb20: { paddingBottom: 20 },
  pb25: { paddingBottom: 25 }
};

export const text = {
  bold: { fontWeight: 'bold' },
  center: { textAlign: 'center' },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' },
  title: {
    textAlign: 'center',
    color: gray.g9,
    fontSize: 25
  },
  subtitle: {
    color: gray.g7,
    fontSize: 14,
    textAlign: 'center'
  }
};

export const link = { color: gray.g8 };

export const container = {
  bg: { backgroundColor: colors.bg },
  default: {
    backgroundColor: colors.bg,
    flex: 1
  },
  whiteBox: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10
  },
  box: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10
  }
};

export const grayColor = {
  white: { color: colors.white },
  gray1: { color: gray.g1 },
  gray2: { color: gray.g2 },
  gray3: { color: gray.g3 },
  gray4: { color: gray.g4 },
  gray5: { color: gray.g6 },
  gray6: { color: gray.g6 },
  gray7: { color: gray.g7 },
  gray8: { color: gray.g8 },
  gray9: { color: gray.g9 },
  gray10: { color: gray.g10 }
};

export const yellowColor = {
  yellow1: { color: yellow.y1 },
  yellow2: { color: yellow.y2 },
  yellow3: { color: yellow.y3 },
  yellow4: { color: yellow.y4 },
  yellow5: { color: yellow.y6 },
  yellow6: { color: yellow.y6 },
  yellow7: { color: yellow.y7 },
  yellow8: { color: yellow.y8 },
  yellow9: { color: yellow.y9 },
  yellow10: { color: yellow.y10 }
};

export const grayBg = {
  gray1: { backgroundColor: gray.g1 },
  gray2: { backgroundColor: gray.g2 },
  gray3: { backgroundColor: gray.g3 },
  gray4: { backgroundColor: gray.g4 },
  gray5: { backgroundColor: gray.g6 },
  gray6: { backgroundColor: gray.g6 },
  gray7: { backgroundColor: gray.g7 },
  gray8: { backgroundColor: gray.g8 },
  gray9: { backgroundColor: gray.g9 },
  gray10: { backgroundColor: gray.g10 }
};

export const yellowBg = {
  yellow1: { backgroundColor: yellow.y1 },
  yellow2: { backgroundColor: yellow.y2 },
  yellow3: { backgroundColor: yellow.y3 },
  yellow4: { backgroundColor: yellow.y4 },
  yellow5: { backgroundColor: yellow.y6 },
  yellow6: { backgroundColor: yellow.y6 },
  yellow7: { backgroundColor: yellow.y7 },
  yellow8: { backgroundColor: yellow.y8 },
  yellow9: { backgroundColor: yellow.y9 },
  yellow10: { backgroundColor: yellow.y10 }
};

export const align = {
  centerX: { justifyContent: 'center' },
  centerY: { alignItems: 'center' },
  left: { justifyContent: 'flex-start' },
  right: { justifyContent: 'flex-end' }
};
