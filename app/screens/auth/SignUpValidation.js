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

import { Metrics, } from '../../theme';
import AppStyles, { block, align, inline, margin, } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';

const SignUpValidation = ({ confirmationCode, handleOnPress }) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Grid style={styles.formWrapper}>
      <Row style={align.centerX}>
        <H1 style={StyleSheet.flatten(styles.titleText)}>Confirmation</H1>
      </Row>

      <Row style={align.centerX}>
        <Text style={StyleSheet.flatten(inline.subtitle)}>Confirmez votre inscription</Text>
      </Row>

      <View style={margin.mt10}>
        <Item style={StyleSheet.flatten(margin.mb10)}>
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
    ...block.whiteContainer,
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
