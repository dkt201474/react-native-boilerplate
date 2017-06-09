import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, View } from 'react-native';
import { Row, Grid } from 'native-base';
import { Field, reduxForm } from 'redux-form';

/* App imports */
import { Metrics } from '../../theme';
import { container, text, align } from '../../theme/AppStyles';
import { AppInput, AppButton } from '../../lib/components';
import { SignUpValidation as validate } from '../../lib/validate';

const renderInput = (field) => AppInput(field);

const SignUpValidation = ({ handleSubmit, invalid }) =>
  (<Container style={container.default}>
    <Content>
      <Grid style={[container.white, { marginTop: Metrics.height * 0.2 }]}>
        <Row style={align.centerX}>
          <Text style={text.title}>Confirmation</Text>
        </Row>

        <Row style={align.centerX}>
          <Text style={text.subtitle}>Entrez le code envoyé par SMS</Text>
        </Row>

        <View style={{ marginTop: 10 }}>
          <Field
              component={renderInput}
              keyboardType="number-pad"
              name="confirmationCode"
              placeholder="X X X X"
          />
        </View>

        <AppButton
            handleSubmit={handleSubmit((values) => console.log(values))}
            invalid={invalid}
            title="Confirmer"
        />
      </Grid>
    </Content>
  </Container>);

SignUpValidation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired
};

SignUpValidation.defaultProps = { confirmationCode: '' };

export default reduxForm({
  form: 'CreateAccountValidation',
  validate
})(SignUpValidation);
