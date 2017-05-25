import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import {
  Container,
  Content,
  Grid,
  Row,
} from 'native-base';

import AppStyles, { block, inline, margin } from '../../theme/AppStyles';
import { AppStatusBar, AppItem, } from '../../lib/components';

const ContactUs = () => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content style={margin.mt25}>
      <Grid style={block.whiteContainer}>
        <Row style={AppStyles.separator}><Text style={inline.textBold}>Bénin</Text></Row>
        <Row style={AppStyles.separator}><Text style={inline.textBold}>Cotonou</Text></Row>

        <AppItem body={{ text: '+229 94 93 23 88', }} rowStyle={[AppStyles.item, margin.mh5]} />
        <AppItem body={{ text: '+229 97 03 33 08', }} rowStyle={[AppStyles.lastItem, margin.mh5]} />
      </Grid>
    </Content>
  </Container>
);

export default ContactUs;
