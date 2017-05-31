import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Image, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
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
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import normalizeEmail from 'validator/lib/normalizeEmail';

// App imports
import { gotoHomeFromSignIn, } from '../../reducers/auth/actions';
import { Images, Metrics, Colors, } from '../../theme';
import AppStyles, { margin, block, colors, align, inline, } from '../../theme/AppStyles';
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

  if (!values.password) {
    errors.password = 'Champ requis';
  } else if (!isLength(values.password, {min: 8})) {
    errors.password = 'Au moins 8 caractères requis';
  }

  return errors;
};

/*
* Function that will be call if form get submitting
*/
const submit = (values, dispatch) => dispatch(gotoHomeFromSignIn(values));

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
          secureTextEntry={field.secureTextEntry && true}
      />
    </Item>

    {field.meta.error && field.meta.touched && <Text style={{textAlign: 'right', color: Colors.error}}>{field.meta.error}</Text>}
  </View>
);

let SignIn = ({
  email,
  handleLogin,
  handleSubmit,
  navigation,
  ...rest,
}) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content>
      <Row style={styles.logoWrapper}>
        <Image source={Images.logo} style={styles.logo} />
      </Row>

      <Grid style={styles.formWrapper}>
        <Row style={align.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Connexion</H1>
        </Row>

        <Row style={align.centerX}>
          <Text style={StyleSheet.flatten(inline.subtitle)}>Heureux de vous revoir</Text>
        </Row>

        <View style={margin.mt10}>
          <Field component={renderInput} name="email" placeholder="Email" />
          <Field component={renderInput} name="password" placeholder="Mot de passe" secureTextEntry />

          <Row style={[margin.mt25, margin.mb15, align.centerX]}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={inline.link}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </Row>
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
          <Text style={AppStyles.buttonText}>Connexion</Text>
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpForm')} style={margin.mt25}>
          <Row style={align.centerX}>
            <View>
              <Text style={styles.newAccountText}>Nouveau compte </Text>
            </View>
            <View>
              <Icon
                  name="ios-arrow-round-forward"
                  style={StyleSheet.flatten(colors.gray10)}
              />
            </View>
          </Row>
      </TouchableOpacity>

      </Grid>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  logoWrapper: {
    justifyContent: 'center',
    marginTop: Metrics.m40,
  },
  logo: {
    width: 225,
    height: 50,
  },
  formWrapper: {
    ...block.whiteContainer,
    marginTop: Metrics.m25,
  },
  newAccountText: {
    fontSize: Metrics.m20,
    color: Colors.gray10,
  },
});

SignIn.propTypes = {
  email: Proptypes.string,
  handleLogin: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  navigation: Proptypes.object.isRequired,
};

SignIn.defaultProps = { email: '', };

const mapDispatchToProps = (dispatch) => ({ handleLogin: () => dispatch(gotoHomeFromSignIn({email: "hi", password: "ok"})), });

SignIn = connect(null, mapDispatchToProps)(SignIn);

export default reduxForm({
  form: 'SignIn',
  validate,
})(SignIn);
