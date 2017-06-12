import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Row } from 'native-base';
import { connect } from 'react-redux';

/* App imports */
import { AppInfoModal, HelpNewAccount } from '../../lib/components';
import { container } from '../../theme/AppStyles';
import { gray, colors } from '../../theme/Colors';

/* actions  */
import { ux } from '../../reducers/actions';

const DefaultMenu = ({
  openCreateAccount,
  openCreateAssociateAccount,
  closeModal,
  visibleModal
}) =>
  (<Container style={container.default}>

    <Content style={StyleSheet.flatten(styles.menuWrapper)}>
      <TouchableOpacity onPress={openCreateAccount}>
        <Row style={styles.item}><Text>Comment créer un compte ?</Text></Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={openCreateAssociateAccount}>
        <Row style={styles.item}>
          <Text>Comment ajouter un compte partenaire ?</Text>
        </Row>
      </TouchableOpacity>
    </Content>

    <AppInfoModal
        closeModal={closeModal}
        content={HelpNewAccount}
        title="Comment créer un compte"
        visibleModal={visibleModal === 'HelpNewAccount'}
    />

    <AppInfoModal
        closeModal={closeModal}
        content={HelpNewAccount}
        title="Comment créer un compte associé"
        visibleModal={visibleModal === 'HelpAssociateNewAccount'}
    />

  </Container>);

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: gray.g5
  },
  menuWrapper: {
    backgroundColor: colors.white,
    padding: 0,
    marginHorizontal: 10,
    marginVertical: 10
  }
});

DefaultMenu.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openCreateAccount: PropTypes.func.isRequired,
  openCreateAssociateAccount: PropTypes.func.isRequired,
  visibleModal: PropTypes.any.isRequired
};

export default connect(
  (state) => ({ visibleModal: state.ux.visibleModal }),
  (dispatch) => ({
    closeModal: () => dispatch(ux.closeModal()),
    openCreateAccount: () => dispatch(ux.openModal('HelpNewAccount')),
    openCreateAssociateAccount: () =>
      dispatch(ux.openModal('HelpAssociateNewAccount'))
  })
)(DefaultMenu);
