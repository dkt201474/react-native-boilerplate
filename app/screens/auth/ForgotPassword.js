import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, } from 'react-native';
import {
  Container,
  Content,
  Grid,
  Row,
  H1,
  Button,
  Icon,
} from 'native-base';
import { Field, reduxForm, } from 'redux-form';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import {stringify} from 'qs';

/* App imports */
import { resetPassword, closeForgotPasswordModal } from '../../reducers/auth/actions';
import { Metrics, Colors, } from '../../theme';
import AppStyles, { block, align, inline, margin, } from '../../theme/AppStyles';
import { AppStatusBar, AppInput, AppButton, } from '../../lib/components';

/*
* Function that will be call to ensure all field are properly setted
*/
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Champ requis';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email invalide';
  }

  return errors;
};

/*
* Function that will be call if form get submitting
*/
const submit = (values, dispatch) => dispatch(resetPassword(normalizeEmail(stringify(values.email))));

const renderInput = (field) => AppInput(field);

let ForgotPassword = ({ handleSubmit, visibleModal, handleOnCloseModal, ...rest }) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content>
      <Grid style={styles.formWrapper}>
        <Row style={align.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Réinitialisation</H1>
        </Row>

        <Row style={align.centerX}>
          <Text style={[inline.subtitle, {marginHorizontal: 25}]}>
            Entrez votre email pour réinitialiser votre mot de passe
          </Text>
        </Row>

        <View style={margin.mt10}>
          <Field component={renderInput} name="email" placeholder="Email" />
        </View>

        <AppButton
            doSubmit={submit}
            handleSubmit={handleSubmit(submit)}
            invalid={rest.invalid}
            title="Réinitialiser"
        />
      </Grid>
    </Content>

    <View style={{ justifyContent: 'center', }}>
      <Modal isVisible={visibleModal}>
        <View style={AppStyles.modal} >
          <View><Icon name="ios-checkmark-circle" style={AppStyles.modalIcon} /></View>

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
  </Container>
);

const styles = StyleSheet.create({
  formWrapper: {
    ...block.whiteContainer,
    marginTop: Metrics.height * 0.2,
  },
});

ForgotPassword.propTypes = {
  handleOnCloseModal: PropTypes.func.isRequired, 
  handleSubmit: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ visibleModal: state.auth.visibleModal, });

const mapDispatchToProps = (dispatch) => ({
  handleOnResetPassword: (values) => dispatch(resetPassword(values)),
  handleOnCloseModal: () => dispatch(closeForgotPasswordModal()),
});

ForgotPassword = connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

export default reduxForm({
  form: 'ForgotPassword',
  validate,
})(ForgotPassword);
