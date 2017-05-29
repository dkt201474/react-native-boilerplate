import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Row,
  H1,
  Input,
  Item,
  Button,
} from 'native-base';

/* App imports */
import { resetPassword } from '../../reducers/nav/actions';
import { Metrics, } from '../../theme';
import AppStyles, { block, align, inline, margin, } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';

const ForgotPassword = ({ email, handleOnPress }) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Grid style={styles.formWrapper}>
      <Row style={align.centerX}>
        <H1 style={StyleSheet.flatten(styles.titleText)}>Réinitialiser mot de passe</H1>
      </Row>

      <Row style={align.centerX}>
        <Text style={StyleSheet.flatten(inline.subtitle)}>
          Entrer votre email pour reçevoir un lien de réinitialisation de votre mot de passe
        </Text>
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
      </View>

      <Button block onPress={handleOnPress} style={StyleSheet.flatten(AppStyles.button)} >
        <Text style={AppStyles.buttonText}>Réinitialiser</Text>
      </Button>
    </Grid>
  </Container>
);

const styles = StyleSheet.create({
  formWrapper: {
    ...block.whiteContainer,
    height: Metrics.height * 0.5,
    marginTop: Metrics.height * 0.25,
    marginBottom: Metrics.height * 0.25,
  },
});

ForgotPassword.propTypes = {
  email: Proptypes.string,
  handleOnPress: Proptypes.func,
};

ForgotPassword.defaultProps = {
  email: '',
  handleOnPress: null,
};

const mapDispatchToProps = (dispatch) => ({
  handleOnPress: () => dispatch(resetPassword({email: 'dkt201474'}))
});

export default connect(null, mapDispatchToProps)(ForgotPassword);
