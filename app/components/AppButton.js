import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button } from 'native-base';

/* App imports */
import { gray, colors } from '../theme/Colors';

const AppButton = ({ invalid, handleOnPress, title, ...rest }) =>
  (<Button
      {...rest}
      block
      disabled={invalid}
      onPress={handleOnPress}
      style={
      invalid
        ? { backgroundColor: gray.g7, marginTop: 10 }
        : { backgroundColor: gray.g10, marginTop: 10 }
    }
  >
    <Text style={{ color: colors.white }}>{title}</Text>
  </Button>);

AppButton.propTypes = {
  handleOnPress: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

AppButton.defaultProps = { doSubmit: null };

export default AppButton;
