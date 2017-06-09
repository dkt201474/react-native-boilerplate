import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { Icon } from 'native-base';

/* App imports */
import { colors, gray } from '../theme/Colors';
import { text } from '../theme/AppStyles';

const InfoModal = ({ visibleModal, title, content, closeModal }) =>
  (<View style={{ justifyContent: 'center' }}>
    <Modal isVisible={visibleModal}>

      <TouchableOpacity
          onPress={() => closeModal()}
          style={{ alignItems: 'center', marginBottom: 20 }}
      >
        <Icon
            name="ios-close-circle-outline"
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginBottom: 10,
              color: colors.white
            }}
        />
      </TouchableOpacity>

      <ScrollView
          style={{
            paddingHorizontal: 15,
            paddingTop: 15,
            paddingBottom: 30,
            backgroundColor: 'white'
          }}
      >
        <Text style={[text.title, { textAlign: 'left' }]}>{title}</Text>

        <Text style={{ textAlign: 'left', color: gray.g7, paddingBottom: 20 }}>
          {content}
        </Text>
      </ScrollView>
    </Modal>
  </View>);

InfoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  visibleModal: PropTypes.bool.isRequired
};

export default InfoModal;
