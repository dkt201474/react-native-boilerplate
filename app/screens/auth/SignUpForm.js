import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Content,
  Grid,
  Row,
  Col,
  H1,
  Picker,
  Button,
  Icon,
} from 'native-base';
import { Field, reduxForm, } from 'redux-form';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import isNumeric from 'validator/lib/isNumeric';
import normalizeEmail from 'validator/lib/normalizeEmail';
import trim from 'validator/lib/trim';

/* App imports */
import { showModal, gotoSignUpValidation, } from '../../reducers/auth/actions';
import { Metrics, Colors, } from '../../theme';
import AppStyles, { margin, inline, block, align } from '../../theme/AppStyles';
import { AppStatusBar, AppInput, AppButton, } from '../../lib/components';

/* imports config */
const PickerItem = Picker.Item;

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

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Champ requis';
  } else if (!isNumeric(values.phoneNumber)) {
    errors.phoneNumber = 'Numéro de téléphone incorrect';
  } else if (!isLength(values.phoneNumber, {min: 8})) {
    errors.phoneNumber = 'Numéro de téléphone trop court';
  } else if (!isLength(values.phoneNumber, {max: 10})) {
    errors.phoneNumber = 'Numéro de téléphone trop long';
  }

  if (!values.password) {
    errors.password = 'Champ requis';
  } else if (!isLength(values.password, {min: 8})) {
    errors.password = 'Au moins 8 caractères requis';
  } else if (!trim(values.password) && true) {
    errors.password = 'Mot de passe invalide';
  }

  return errors;
};

/*
* Function that will be call if form get submitting
*/
const submit = (values, dispatch) => dispatch(
  gotoSignUpValidation(
    {
      email: normalizeEmail(values.email),
      password: trim(values.password),
      phoneNumber: trim(values.phoneNumber),
    }
  )
);

const renderInput = (field) => AppInput(field);

let SignUpForm = ({
  handleSubmit,
  countryCode,
  handlePickerOnPress,
  openModal,
  visibleModal,
  ...rest,
}) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content style={margin.mt25}>
      <Grid style={styles.formWrapper}>
        <Row style={align.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Inscription</H1>
        </Row>

        <Row style={align.centerX}>
          <Text style={[inline.subtitle, {textAlign: 'center'}]}>
            Presque fini...
          </Text>
        </Row>

        <View style={margin.mt10}>
          <Field component={renderInput} keyboardType="email-address" name="email" placeholder="Email" />

          <Row style={{ marginBottom: 10, marginTop: 5, alignItems: 'flex-start'}}>
            <Col size={1}>
              <Picker
                  enabled={countryCode.length > 1 || false}
                  mode="dialog"
                  onValueChange={handlePickerOnPress}
                  selectedValue="229"
              >
                  {countryCode.map((code) => (
                    <PickerItem key={code} label={`+${code}`} value={code} />
                  ))}
                </Picker>
            </Col>
            <Col size={3}>
              <Field
                  component={renderInput}
                  keyboardType="phone-pad"
                  name="phoneNumber"
                  placeholder="Téléphone"
              />
            </Col>
          </Row>

          <Field component={renderInput} name="password" placeholder="Mot de passe" secureTextEntry />
        </View>

        <AppButton
            handleSubmit={openModal}
            invalid={rest.invalid}
            title="Continuer"
        />
      </Grid>
    </Content>

    <View style={{ justifyContent: 'center', }}>
      <Modal isVisible={visibleModal}>
        <View style={AppStyles.modal} >
          <View><Icon name="ios-information-circle" style={{...AppStyles.modalIcon, color: Colors.yellow7}} /></View>

          <Text style={{textAlign: 'center', fontSize: Metrics.m20}}>Mot de passe réinitialisé</Text>

          <Text style={{textAlign: 'center', color: Colors.gray7}}>Veuillez suivre les instructions envoyées à votre email pour finaliser la réinitialisation de votre mot de passe</Text>

          <View style={{marginTop: Metrics.m25, marginBottom: Metrics.m5}}>
            <Button block onPress={handleSubmit(submit)} style={StyleSheet.flatten(AppStyles.button)} >
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
    marginTop: Metrics.m25,
  },
});

SignUpForm.propTypes = {
  countryCode: PropTypes.array,
  email: PropTypes.string,
  handlePickerOnPress: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string,
  visibleModal: PropTypes.bool.isRequired,
};

SignUpForm.defaultProps = {
  countryCode: ['229'],
  email: '',
  handlePickerOnPress: null,
  phoneNumber: '',
};

const mapStateToProps = (state) => ({ visibleModal: state.auth.visibleModal, });

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(showModal()),
  handleOnCloseModal: (values) => dispatch(gotoSignUpValidation({
    email: values.email,
    password: values.password,
    phoneNumber: values.phoneNumber,
  })),
});

SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
