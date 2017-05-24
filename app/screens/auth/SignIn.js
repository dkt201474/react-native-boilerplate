import React from 'react';
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

import { Images, Metrics, Colors, AppStyles, } from '../../theme';

const SignIn = ({email, password, handleOnPress, navigation}) => (
  <Container style={StyleSheet.flatten(AppStyles.containerBg)}>
    <Content>
      <Row style={styles.logoWrapper}>
        <Image source={Images.logo} style={styles.logo} />
      </Row>

      <Grid style={styles.formWrapper}>
        <Row style={AppStyles.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Connexion</H1>
        </Row>

        <Row style={AppStyles.centerX}>
          <Text style={StyleSheet.flatten(AppStyles.subtitle)}>Heureux de vous revoir</Text>
        </Row>

        <View style={AppStyles.mt10}>
          <Item style={StyleSheet.flatten(AppStyles.mb10)}>
            <Input placeholder="email" value={email} />
            <Label style={{ color: Colors.gray7 }}>@enanlypay.com</Label>
          </Item>

          <Item>
            <Input placeholder="mot de passe" secureTextEntry />
          </Item>

          <Row style={[AppStyles.mt25, AppStyles.mb15, AppStyles.centerX]}>
            <TouchableOpacity>
              <Text style={AppStyles.link}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </Row>
        </View>

        <Button block style={StyleSheet.flatten(AppStyles.button)}>
          <Text style={AppStyles.buttonText}>Connexion</Text>
        </Button>

        <TouchableOpacity style={AppStyles.mt25}>
          <Row style={AppStyles.centerX}>
            <View>
              <Text style={styles.newAccountText}>Nouveau compte </Text>
            </View>
            <View>
              <Icon
                  name="ios-arrow-round-forward"
                  style={StyleSheet.flatten(AppStyles.gray10)}
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
    ...AppStyles.whiteContainer,
    marginTop: Metrics.m25,
  },
  newAccountText: {
    fontSize: Metrics.m20,
    color: Colors.gray10,
  },
});

SignIn.propTypes = {
  email: Proptypes.string,
  handleOnPress: Proptypes.func,
  navigation: Proptypes.func,
  password: Proptypes.string,
};

SignIn.defaultProps = {
  email: '',
  handleOnPress: null,
  navigation: null,
  password: '',
};

export default SignIn;
