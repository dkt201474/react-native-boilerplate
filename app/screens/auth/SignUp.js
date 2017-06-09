import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Row, Grid, Col, Content, Container } from 'native-base';
import { Field, reduxForm } from 'redux-form';

/* App imports */
import { container, text, align, marginTop } from '../../theme/AppStyles';
import { gray } from '../../theme/Colors';
import { AppInput, AppButton } from '../../lib/components';
import { SignUp as validate } from '../../lib/validate';

const renderInput = (field) => AppInput(field);

const SignUpValidation = ({ handleSubmit, navigation, invalid }) =>
  (<Container style={container.default}>
    <Content>
      <Grid style={[container.whiteBox, { marginTop: 25 }]}>
        <Row style={align.centerX}>
          <Text style={text.title}>Inscription</Text>
        </Row>

        <Row style={align.centerX}>
          <Text style={[text.subtitle, { textAlign: 'center' }]}>
            Presque fini...
          </Text>
        </Row>

        <View style={marginTop.mt10}>
          <Field
              component={renderInput}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
          />

          <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
            <Col size={1} style={{ marginTop: 15, marginLeft: 15 }}>
              <Text style={{ color: gray.g7 }}>+229</Text>
            </Col>
            <Col size={5}>
              <Field
                  component={renderInput}
                  keyboardType="phone-pad"
                  name="phoneNumber"
                  placeholder="Téléphone"
              />
            </Col>
          </View>

          <Field
              component={renderInput}
              name="password"
              placeholder="Nouveau mot de passe"
              secureTextEntry
          />
        </View>

        <AppButton
            handleOnPress={handleSubmit(() =>
            navigation.navigate('SignUpValidation')
          )}
            invalid={invalid}
            title="Continuer"
        />
      </Grid>
    </Content>
  </Container>);

SignUpValidation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};

SignUpValidation.defaultProps = { confirmationCode: '' };

export default reduxForm({
  form: 'CreateAccountValidation',
  validate
})(SignUpValidation);
