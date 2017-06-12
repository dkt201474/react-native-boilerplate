import React from 'react';
import PropTypes from 'prop-types';

/* App imports */
import { colors, gray } from '../../theme/Colors';
import { AppBubble } from '../../lib/components';

export const AppServiceBubble = ({
  title,
  iconName,
  bgColor,
  handleOnPress = null
}) =>
  (<AppBubble
      bgColor={bgColor}
      handleOnPress={handleOnPress}
      icon={{
        name: iconName,
        style: { color: colors.white, fontSize: 30 }
      }}
      title={title}
      titleStyle={{ fontSize: 11, color: gray.g9 }}
  />);

AppServiceBubble.propTypes = {
  bgColor: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default AppServiceBubble;
