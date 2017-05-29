import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
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

/* App imports */
import { Metrics, } from '../../theme';
import AppStyles, { margin, inline, block, align } from '../../theme/AppStyles';
import { AppStatusBar } from '../../lib/components';

/* imports config */
const PickerItem = Picker.Item;

const SignUpForm = ({
  countryCode,
  email,
  phoneNumber,
  handleOnPress,
  handlePickerOnPress,
}) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content style={margin.mt25}>
      <Grid style={styles.formWrapper}>
        <Row style={align.centerX}>
          <H1 style={StyleSheet.flatten(styles.titleText)}>Inscription</H1>
        </Row>

        <Row style={align.centerX}>
          <Text style={[inline.subtitle, {textAlign: 'center'}]}>
            Nous avons besoin de votre numéro de téléphone pour des raisons de
            sécurité. Nous allons vous envoyer un code de confirmation par SMS.
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

          <Item style={StyleSheet.flatten(margin.mb10)}>
            <Picker
                mode="dialog"
                onValueChange={handlePickerOnPress}
                selectedValue="229"
                style={{width: 76}}
            >
              {countryCode.map((code) => (
                <PickerItem key={code} label={'+' + code} value={code} />
              ))}
            </Picker>
            {
              phoneNumber ?
              <Input placeholder="téléphone" value={phoneNumber} />
              :
              <Input placeholder="téléphone" />
            }
          </Item>

          <Item>
            <Input placeholder="mot de passe" secureTextEntry />
          </Item>
        </View>

        <Button block onPress={handleOnPress} style={StyleSheet.flatten(AppStyles.button)} >
          <Text style={AppStyles.buttonText}>Continuer</Text>
        </Button>

      </Grid>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  formWrapper: {
    ...block.whiteContainer,
    marginTop: Metrics.m25,
  },
});

SignUpForm.propTypes = {
  countryCode: Proptypes.array,
  email: Proptypes.string,
  handleOnPress: Proptypes.func,
  handlePickerOnPress: Proptypes.func,
  phoneNumber: Proptypes.string,
};

SignUpForm.defaultProps = {
  countryCode: ['228', '229'],
  email: '',
  handlePickerOnPress: null,
  handleOnPress: null,
  phoneNumber: '',
};

export default SignUpForm;
