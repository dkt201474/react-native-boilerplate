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
  Label,
  Input,
  Item,
  Button,
  Icon,
} from 'native-base';
import { NavigationActions } from 'react-navigation';

import { Images, Metrics, Colors, } from '../../theme';
import AppStyles, { margin, block, colors, align, inline, } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';

const SignIn = ({
  email,
  handleLogin,
  handleForgotPassword,
  handleNewAccount,
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
            <Input placeholder="email" value={email} />
            <Label style={{ color: Colors.gray7 }}>@enanlypay.com</Label>
          </Item>

          <Item>
            <Input placeholder="mot de passe" secureTextEntry />
          </Item>

          <Row style={[margin.mt25, margin.mb15, align.centerX]}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={inline.link}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </Row>
        </View>

        <Button block onPress={handleLogin} style={StyleSheet.flatten(AppStyles.button)} >
          <Text style={AppStyles.buttonText}>Connexion</Text>
        </Button>

        <TouchableOpacity onPress={handleNewAccount} style={margin.mt25}>
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
  handleForgotPassword: Proptypes.func.isRequired,
  handleLogin: Proptypes.func.isRequired,
  handleNewAccount: Proptypes.func.isRequired,
};

SignIn.defaultProps = { email: '', };

const mapDispatchToProps = (dispatch) => ({
  handleNewAccount: () => dispatch(NavigationActions.navigate({ routeName: 'SignUpForm'})),
  handleForgotPassword: () => dispatch(NavigationActions.navigate({ routeName: 'SignIn'})),
  handleLogin: () => dispatch(NavigationActions.navigate({ routeName: 'FindUs'})),
});

export default connect(null, mapDispatchToProps)(SignIn);
