import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Grid, Row, Content, Container } from 'native-base';
import { Field, reduxForm } from 'redux-form';

// App imports
import { Images } from '../../theme';
import { gray } from '../../theme/Colors';
import {
  marginTop,
  text,
  marginBottom,
  container,
  align,
  link
} from '../../theme/AppStyles';
import { AppInput, AppButton } from '../../lib/components';
import { SignIn as validate } from '../../lib/validate';

const renderInput = (field) => AppInput(field);

const SignIn = ({ handleSubmit, navigation, ...rest }) =>
  (<Container style={container.default}>
    <Content>
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Image source={Images.logo} style={{ width: 225, height: 50 }} />
      </View>

      <Grid style={[container.whiteBox, { marginTop: 25 }]}>
        <Row style={align.centerX}>
          <Text style={text.title}>Connexion</Text>
        </Row>

        <Row style={align.centerX}>
          <Text style={text.subtitle}>Heureux de vous revoir</Text>
        </Row>

        <View style={marginTop.mt20}>
          <Field
              component={renderInput}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
          />
          <Field
              component={renderInput}
              name="password"
              placeholder="Mot de passe"
              secureTextEntry
          />

          <Row style={[marginTop.mt10, marginBottom.mb15, align.centerX]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ResetPassword')}
            >
              <Text style={[link, { textAlign: 'center' }]}>
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>
          </Row>
        </View>

        <AppButton
            handleOnPress={handleSubmit(() => navigation.navigate('Home'))}
            invalid={rest.invalid}
            title="Connexion"
        />

        <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={marginTop.mt25}
        >
          <Row style={{ justifyContent: 'center' }}>
            <View>
              <Text
                  style={{
                    fontSize: 15,
                    color: gray.g8,
                    textDecorationLine: 'underline'
                  }}
              >
                Nouveau compte
              </Text>
            </View>
          </Row>
        </TouchableOpacity>
      </Grid>
    </Content>
  </Container>);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'SignIn',
  validate
})(SignIn);
