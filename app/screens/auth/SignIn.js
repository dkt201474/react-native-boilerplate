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

// App imports
import { gotoHomeFromSignIn, } from '../../reducers/nav/actions';
import { Images, Metrics, Colors, } from '../../theme';
import AppStyles, { margin, block, colors, align, inline, } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';

const SignIn = ({
  email,
  handleLogin,
  navigation
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
          <Item style={StyleSheet.flatten(margin.mb10)}>
            {
              email ?
              <Input placeholder="email" value={email} />
              :
              <Input placeholder="email" />
            }
          </Item>

          <Item>
            <Input placeholder="mot de passe" secureTextEntry />
          </Item>

          <Row style={[margin.mt25, margin.mb15, align.centerX]}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={inline.link}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </Row>
        </View>

        <Button block onPress={handleLogin} style={StyleSheet.flatten(AppStyles.button)} >
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
  navigation: Proptypes.object.isRequired,
};

SignIn.defaultProps = { email: '', };

const mapDispatchToProps = (dispatch) => ({ handleLogin: () => dispatch(gotoHomeFromSignIn({email: "hi", password: "ok"})), });

export default connect(null, mapDispatchToProps)(SignIn);
