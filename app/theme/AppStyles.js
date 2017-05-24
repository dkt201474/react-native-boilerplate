import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const AppStyles = {
  // Block
  containerBg: { backgroundColor: Colors.bg, },
  containerPadding: {
    paddingVertical: Metrics.m20,
    paddingHorizontal: Metrics.m10,
  },
  containerMargin: {
    marginHorizontal: Metrics.m10,
    marginVertical: Metrics.m10,
  },
  container: {
    backgroundColor: Colors.bg,
    paddingVertical: Metrics.m20,
    paddingHorizontal: Metrics.m10,
    marginHorizontal: Metrics.m10,
    marginVertical: Metrics.m10,
  },
  whiteContainer: {
    backgroundColor: Colors.white,
    paddingVertical: Metrics.m20,
    paddingHorizontal: Metrics.m10,
    marginHorizontal: Metrics.m10,
    marginVertical: Metrics.m10,
  },

  // Inline
  textBold: { fontWeight: 'bold', },
  textCenter: { justifyContent: 'center'},
  title: { color: Colors.gray10, },
  subtitle: {
    color: Colors.gray7,
    fontSize: Fonts.size.sm,
  },
  link: { color: Colors.gray8 },

  // button
  button: {
    backgroundColor: Colors.gray10,
    marginTop: Metrics.m10,
  },
  buttonText: { color: Colors.white, },

  // Colors
  gray7: { color: Colors.gray7 },
  gray8: { color: Colors.gray8 },
  gray9: { color: Colors.gray9 },
  gray10: { color: Colors.gray10 },

  // Center
  centerX: {justifyContent: 'center'},
  centerY: {alignItems: 'center'},

  // margins
  m0: { margin: 0 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  m25: { margin: 25 },

  mv0: { marginVertical: 0 },
  mv5: { marginVertical: 5 },
  mv10: { marginVertical: 10 },
  mv15: { marginVertical: 15 },
  mv20: { marginVertical: 20 },
  mv25: { marginVertical: 25 },

  mh0: { marginHorizontal: 0 },
  mh5: { marginHorizontal: 5 },
  mh10: { marginHorizontal: 10 },
  mh15: { marginHorizontal: 15 },
  mh20: { marginHorizontal: 20 },
  mh25: { marginHorizontal: 25 },


  mt0: { marginTop: 0 },
  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt15: { marginTop: 15 },
  mt20: { marginTop: 20 },
  mt25: { marginTop: 25 },

  mb0: { marginBottom: 0 },
  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },
  mb25: { marginBottom: 25 },

  // padding
  p0: { padding: 0 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },
  p25: { padding: 25 },

  pv0: { paddingVertical: 0 },
  pv5: { paddingVertical: 5 },
  pv10: { paddingVertical: 10 },
  pv15: { paddingVertical: 15 },
  pv20: { paddingVertical: 20 },
  pv25: { paddingVertical: 25 },

  ph0: { paddingHorizontal: 0 },
  ph5: { paddingHorizontal: 5 },
  ph10: { paddingHorizontal: 10 },
  ph15: { paddingHorizontal: 15 },
  ph20: { paddingHorizontal: 20 },
  ph25: { paddingHorizontal: 25 },


  pt0: { paddingTop: 0 },
  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt15: { paddingTop: 15 },
  pt20: { paddingTop: 20 },
  pt25: { paddingTop: 25 },

  pb0: { paddingBottom: 0 },
  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb15: { paddingBottom: 15 },
  pb20: { paddingBottom: 20 },
  pb25: { paddingBottom: 25 },

};

export default AppStyles;
