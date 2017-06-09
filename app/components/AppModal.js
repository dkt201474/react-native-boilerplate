import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'native-base';

/* App imports */
import { gray } from '../theme/Colors';
import { text } from '../theme/AppStyles';
import { AppButton } from '../lib/components';

const AppModal = ({
  modalTitle,
  modalDescription,
  visibleModal,
  handleOnCloseModal,
  buttonTitle,
  iconName,
  iconColor
}) =>
  (<View style={{ justifyContent: 'center' }}>
    <Modal isVisible={visibleModal}>
      <View
          style={{
            height: 300,
            padding: 10,
            backgroundColor: 'white',
            justifyContent: 'center'
          }}
      >

        <View>
          <Icon
              color={iconColor}
              iconStyle={{
                textAlign: 'center',
                fontSize: 50,
                marginBottom: 10
              }}
              name={iconName}
          />
        </View>

        <Text style={text.title}>{modalTitle}</Text>

        <Text style={{ textAlign: 'center', color: gray.g7 }}>
          {modalDescription}
        </Text>

        <View style={{ marginTop: 25 }}>
          <AppButton handleOnPress={handleOnCloseModal} title={buttonTitle} />
        </View>
      </View>
    </Modal>
  </View>);

AppModal.propTypes = {
  buttonTitle: PropTypes.string,
  handleOnCloseModal: PropTypes.func,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  modalDescription: PropTypes.string,
  modalTitle: PropTypes.string,
  visibleModal: PropTypes.bool
};

AppModal.defaultProps = {
  modalTitle: 'title',
  modalDescription: 'description',
  iconName: 'ios-checkmark-circle',
  iconColor: 'red',
  handleOnCloseModal: null,
  buttonTitle: 'OK',
  visibleModal: false
};

export default AppModal;
