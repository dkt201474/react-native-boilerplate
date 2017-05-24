import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, Text, View, } from 'react-native';
import {
  Container,
  Content,
  Grid,
  Row,
  H1,
  Picker,
  Input,
  Item,
  Button,
} from 'native-base';

import { Metrics, AppStyles, } from '../../theme';
const PickerItem = Picker.Item;

const SignUpForm = ({
  countryCode,
  lastname,
  firstname,
  confirmPassword,
  password,
  phoneNumber,
  handleOnPress,
  navigation,
}) => (
  <Container style={StyleSheet.flatten(AppStyles.containerBg)}>
    <Content style={AppStyles.mt25}>
      <Grid style={styles.formWrapper}>
        <Row style={AppStyles.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Inscription</H1>
        </Row>

        <Row style={AppStyles.centerX}>
          <Text style={StyleSheet.flatten(AppStyles.subtitle)}>Presque fini...</Text>
        </Row>

        <View style={AppStyles.mt10}>
          <Item style={StyleSheet.flatten(AppStyles.mb10)}>
            <Input placeholder="Nom" value={lastname} />
          </Item>

          <Item style={StyleSheet.flatten(AppStyles.mb10)}>
            <Input placeholder="Prénom" value={firstname} />
          </Item>

          <Item style={StyleSheet.flatten(AppStyles.mb10)}>
            <Picker
                mode="dialog"
                selectedValue={countryCode}
                style={{width: 76}}
            >
              <PickerItem
                  label="+227"
                  value="227"
              />
              <PickerItem
                  label="+228"
                  value="228"
              />
              <PickerItem
                  label="+229"
                  value="229"
              />
            </Picker>
            <Input placeholder="Téléphone" value={phoneNumber} />
          </Item>

          <Item>
            <Input placeholder="mot de passe" secureTextEntry />
          </Item>

          <Item>
            <Input placeholder="confirmation" secureTextEntry />
          </Item>
        </View>

        <Button block style={StyleSheet.flatten(AppStyles.button)}>
          <Text style={AppStyles.buttonText}>Continuer</Text>
        </Button>

      </Grid>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  formWrapper: {
    ...AppStyles.whiteContainer,
    marginTop: Metrics.m25,
  },
});

SignUpForm.propTypes = {
  confirmPassword: Proptypes.string,
  countryCode: Proptypes.string,
  firstname: Proptypes.string,
  handleOnPress: Proptypes.func,
  lastname: Proptypes.string,
  navigation: Proptypes.func,
  password: Proptypes.string,
  phoneNumber: Proptypes.string,
};

SignUpForm.defaultProps = {
  countryCode: '229',
  firstname: '',
  lastname: '',
  confirmPassword: '',
  password: '',
  phoneNumber: '',
  navigation: null,
  handleOnPress: null,
};

export default SignUpForm;
