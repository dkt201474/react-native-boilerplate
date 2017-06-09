import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Grid, Row, Content, Container } from 'native-base';
import { Field, reduxForm } from 'redux-form';

/* App imports */
import { Metrics } from '../../theme';
import { container, align, text } from '../../theme/AppStyles';
import { AppInput, AppButton } from '../../lib/components';
import { resetPassword as validate } from '../../lib/validate';

/* Actions */

const renderInput = (field) => AppInput(field);

const ResetPassword = ({ handleSubmit, invalid }) =>
  (<Container style={container.default}>
    <Content>
      <Grid style={[container.whiteBox, { marginTop: Metrics.height * 0.2 }]}>
        <Row style={align.centerX}>
          <Text style={text.title}>Réinitialisation</Text>
        </Row>

        <Row style={align.centerX}>
          <Text style={[text.subtitle, { marginHorizontal: 25 }]}>
            Entrez votre email pour réinitialiser votre mot de passe
          </Text>
        </Row>

        <View style={{ marginTop: 10 }}>
          <Field
              component={renderInput}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
          />
        </View>

        <AppButton
            handleOnPress={handleSubmit(() => console.log('ok'))}
            invalid={invalid}
            title="Réinitialiser"
        />
      </Grid>
    </Content>
  </Container>);

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'ResetPassword',
  validate
})(ResetPassword);
