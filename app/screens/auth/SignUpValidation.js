import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, Text, View, } from 'react-native';
import {
  Container,
  Grid,
  Row,
  H1,
  Input,
  Item,
  Button,
} from 'native-base';

import { Metrics, AppStyles, Colors, } from '../../theme';
import { AppStatusBar } from '../../lib/components';

const SignUpValidation = ({ confirmationCode, handleOnPress }) => (
  <Container style={StyleSheet.flatten(AppStyles.containerBg)}>
    <AppStatusBar />
    
    <Grid style={styles.formWrapper}>
      <Row style={AppStyles.centerX}>
        <H1 style={StyleSheet.flatten(styles.titleText)}>Confirmation</H1>
      </Row>

      <Row style={AppStyles.centerX}>
        <Text style={StyleSheet.flatten(AppStyles.subtitle)}>Confirmez votre inscription</Text>
      </Row>

      <View style={AppStyles.mt10}>
        <Item style={StyleSheet.flatten(AppStyles.mb10)}>
          <Input placeholder="X X X X" value={confirmationCode} />
        </Item>
      </View>

      <Button block onPress={handleOnPress} style={StyleSheet.flatten(AppStyles.button)} >
        <Text style={AppStyles.buttonText}>Confirmer</Text>
      </Button>
    </Grid>
  </Container>
);

/* screen config */
SignUpValidation.navigationOptions = {
  headerTitle: 'Confirmation',
  headerLeft: null,
  headerTintColor: Colors.white,
  headerStyle: AppStyles.bgGray10,
};

const styles = StyleSheet.create({
  formWrapper: {
    ...AppStyles.whiteContainer,
    height: Metrics.height * 0.5,
    marginTop: Metrics.height * 0.25,
    marginBottom: Metrics.height * 0.25,
  },
});

SignUpValidation.propTypes = {
  confirmationCode: Proptypes.string,
  handleOnPress: Proptypes.func,
};

SignUpValidation.defaultProps = {
  confirmationCode: '',
  navigation: null,
  handleOnPress: null,
};

export default SignUpValidation;
