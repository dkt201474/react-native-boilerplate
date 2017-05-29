import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, StyleSheet, } from 'react-native';
import { Button } from 'native-base';
import Modal from 'react-native-modalbox';

/* App imports */
import AppStyles, { colors, bg, padding, margin } from '../theme/AppStyles';

const AppModal = ({
  isOpen,
  isDisable,
  swipeToClose,
  sliderValue,
  modalText,
  buttonText,
  handleOnPress,
}) => (
  <Modal style={styles.modal}>
    <Text style={styles.modalText}>{modalText}</Text>

    <Button block onPress={handleOnPress} style={StyleSheet.flatten(styles.button)} >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Button>
  </Modal>
);

AppModal.propTypes = {
  buttonText: PropTypes.string,
  handleOnPress: PropTypes.func,
  isDisable: PropTypes.boolean,
  isOpen: PropTypes.boolean,
  modalText: PropTypes.string,
  sliderValue: PropTypes.number,
  swipeToClose: PropTypes.boolean,
};

AppModal.defaultProps = {
  modalText: `Un email à été envoyé à votre email. Veuillez suivre les instructions indiquées`,
  buttonText: 'OK',
  handleOnPress: null,
  isOpen: false,
  isDisable: false,
  swipeToClose: true,
  sliderValue: 0.3,
};

const styles = StyleSheet.create({
  modal: {
    ...bg.gray10,
    ...padding.p10,
    ...margin.mh10,
    ...margin.mk20,
  },
  modalText: { textAlign: 'center', },
  button: {
    ...AppStyles.button,
    ...bg.yellow6,
  },
  buttonText: {
    ...AppStyles.buttonText,
    ...colors.white,
  }
});

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  isDisable: state.modal.isDisable,
  swipeToClose: state.modal.swipeToClose,
  sliderValue: state.modal.sliderValue,
});

export default connect(mapStateToProps)(AppModal);
