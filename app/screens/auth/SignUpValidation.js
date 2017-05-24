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

import { Metrics, AppStyles, } from '../../theme';

const SignUpValidation = ({ confirmationCode, handleOnPress, navigation, }) => (
  <Container style={StyleSheet.flatten(AppStyles.containerBg)}>
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

const styles = StyleSheet.create({
  formWrapper: {
    ...AppStyles.whiteContainer,
    marginTop: Metrics.height * 0.3,
    marginBottom: Metrics.height * 0.3,
  },
});

SignUpValidation.propTypes = {
  confirmationCode: Proptypes.string,
  handleOnPress: Proptypes.func,
  navigation: Proptypes.func,
};

SignUpValidation.defaultProps = {
  confirmationCode: '',
  navigation: null,
  handleOnPress: null,
};

export default SignUpValidation;
