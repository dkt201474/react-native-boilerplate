import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { Button, } from 'native-base';

import AppStyles from '../theme/AppStyles';

const AppButton = ({invalid, handleSubmit, title, ...rest}) => (
  <Button
      {...rest}
      block
      disabled={invalid}
      onPress={handleSubmit}
      style={invalid
        ? StyleSheet.flatten(AppStyles.buttonDisabled)
        : StyleSheet.flatten(AppStyles.button)
      }
  >
    <Text style={AppStyles.buttonText}>{title}</Text>
  </Button>
);

AppButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

AppButton.defaultProps = { doSubmit: null };

export default AppButton;
