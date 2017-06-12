import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, Text } from 'react-native';

// App components
import { Images, Metrics } from '../../theme';
import { colors } from '../../theme/Colors';

const AppHomeHeader = ({ welcomeText }) =>
  (<View style={styles.header}>
    <View style={styles.imageContainer}>
      <Image source={Images.homeBg} style={styles.image} />
    </View>

    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>{welcomeText}</Text>
    </View>
  </View>);

AppHomeHeader.defaultProps = { welcomeText: 'Bienvenu Sadeck' };
AppHomeHeader.propTypes = { welcomeText: PropTypes.string };

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 0,
    width: Metrics.width,
    height: Metrics.height * 0.35
  },
  image: {
    width: Metrics.width,
    height: Metrics.height * 0.35,
    resizeMode: 'cover'
  },
  welcome: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -3.2 * 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white
  }
});

export default AppHomeHeader;
