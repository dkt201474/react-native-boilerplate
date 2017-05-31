import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Grid,
  Row,
  H1,
  Input,
  Item,
  Button,
  Icon,
} from 'native-base';
import Modal from 'react-native-modal';

/* App imports */
import { resetPassword, closeForgotPasswordModal } from '../../reducers/auth/actions';
import { Metrics, Colors, } from '../../theme';
import AppStyles, { block, align, inline, margin, } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';

const ForgotPassword = ({ visibleModal, email, handleOnResetPassword, handleOnCloseModal }) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content>
      <Grid style={styles.formWrapper}>
        <Row style={align.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Réinitialisation</H1>
        </Row>

        <Row style={align.centerX}>
          <Text style={[inline.subtitle]}>
            Entrez votre email pour reçevoir les instructions à suivre pour réinitialiser votre mot de passe
          </Text>
        </Row>

        <View style={margin.mt10}>
          <Item style={StyleSheet.flatten(margin.mb10)}>
            {
              email ?
              <Input placeholder="email" value={email} />
              :
              <Input placeholder="email" />
            }
          </Item>
        </View>

        <Button block onPress={handleOnResetPassword} style={StyleSheet.flatten(AppStyles.button)} >
          <Text style={AppStyles.buttonText}>Réinitialiser</Text>
        </Button>
      </Grid>

      <View
          style={{ justifyContent: 'center', }}
      >
          <Modal isVisible={visibleModal}>
            <View
                style={{
                  height: 300,
                  padding: 10,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                }}
            >
                <View>
                  <Icon
                      name="ios-checkmark-circle"
                      style={{
                        textAlign: 'center',
                        color: Colors.success,
                        fontSize: 50,
                        marginBottom: 15,
                      }}
                  />
                </View>
                <Text style={{textAlign: 'center', fontSize: Metrics.m20}}>Mot de passe réinitialisé</Text>
                <Text style={{textAlign: 'center', color: Colors.gray7}}>Veuillez suivre les instructions envoyées à votre email pour finaliser la réinitialisation de votre mot de passe</Text>
                <View style={{marginTop: Metrics.m25}}>
                  <Button block onPress={handleOnCloseModal} style={StyleSheet.flatten(AppStyles.button)} >
                    <Text style={AppStyles.buttonText}>OK</Text>
                  </Button>
                </View>
              </View>
            </Modal>
          </View>

    </Content>
  </Container>
);

const styles = StyleSheet.create({
  formWrapper: {
    ...block.whiteContainer,
    marginTop: Metrics.height * 0.2,
  },
});

ForgotPassword.propTypes = {
  email: Proptypes.string,
  handleOnCloseModal: Proptypes.func,
  handleOnResetPassword: Proptypes.func,
  visibleModal: Proptypes.bool.isRequired,
};

ForgotPassword.defaultProps = {
  email: '',
  handleOnResetPassword: null,
  handleOnCloseModal: null,
};

const mapStateToProps = (state) => ({ visibleModal: state.auth.visibleModal, });

const mapDispatchToProps = (dispatch) => ({
  handleOnResetPassword: () => dispatch(resetPassword()),
  handleOnCloseModal: () => dispatch(closeForgotPasswordModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
