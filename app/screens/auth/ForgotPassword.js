import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, Text, View, } from 'react-native';
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
import { Field, reduxForm, } from 'redux-form';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import isEmail from 'validator/lib/isEmail';

/* App imports */
import { resetPassword, closeForgotPasswordModal } from '../../reducers/auth/actions';
import { Metrics, Colors, } from '../../theme';
import AppStyles, { block, align, inline, margin, } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';


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
* Function that will be call if will want to get submitted
*/
const submit = (values, dispatch) => {
  dispatch(resetPassword(values))
}

const renderInput = (field) => (
  <View>
    <Item
        error={field.meta.error && field.meta.touched && true}
        style={StyleSheet.flatten(margin.mb10)}
    >
      <Input
          {...field.input}
          onChangeText={field.input.onChange}
          placeholder={field.placeholder}
      />
    </Item>

    {field.meta.error && field.meta.touched && <Text style={{textAlign: 'right', color: Colors.error}}>{field.meta.error}</Text>}
  </View>
);

let ForgotPassword = ({ handleSubmit, visibleModal, email, handleOnCloseModal, ...rest }) => {
  console.log(rest.invalid);

  return (
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

          <Button
              block
              disabled={rest.invalid}
              onPress={handleSubmit(submit)}
              style={rest.invalid
                ? StyleSheet.flatten(AppStyles.buttonDisabled)
                : StyleSheet.flatten(AppStyles.button)
              }
          >
            <Text style={AppStyles.buttonText}>Réinitialiser</Text>
          </Button>
        </Grid>
      </Content>

      <View style={{ justifyContent: 'center', }}>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    ...block.whiteContainer,
    marginTop: Metrics.height * 0.2,
  },
});

ForgotPassword.propTypes = { handleSubmit: Proptypes.func.isRequired, };

ForgotPassword.defaultProps = {
  email: 'dkt201474@gmail.com',
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
