import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'native-base';

const AppBubble = ({
  title,
  titleStyle,
  icon,
  bgColor,
  handleOnPress,
  customStyle
}) =>
  (<TouchableOpacity onPress={handleOnPress}>
    <View
        style={[
          {
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          },
          customStyle
        ]}
    >
      <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: bgColor,
            width: 70,
            height: 70,
            borderRadius: 50
          }}
      >
        <Icon name={icon.name} style={StyleSheet.flatten(icon.style)} />
      </View>
      <View>
        <Text customStyle={titleStyle}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>);

AppBubble.propTypes = {
  bgColor: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.object.isRequired
};

AppBubble.defaultProps = { customStyle: null };

export default AppBubble;
