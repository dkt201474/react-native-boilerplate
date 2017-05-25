import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import {
  Container,
  Content,
  Grid,
  Row,
} from 'native-base';

import { Colors, } from '../../theme';
import AppStyles, { block, inline, padding, margin } from '../../theme/AppStyles';
import { AppStatusBar, AppItem, } from '../../lib/components';

const FindUs = () => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content>
      <Grid style={block.whiteContainer}>
        <Row style={AppStyles.separator}><Text style={inline.textBold}>Bénin</Text></Row>
        <Row style={AppStyles.separator}><Text style={inline.textBold}>Cotonou</Text></Row>

        <AppItem body={{ text: 'Fidjrossè', }} rowStyle={[AppStyles.item, margin.mh5]} />
        <AppItem body={{ text: 'Godomey', }} rowStyle={[AppStyles.lastItem, margin.mh5]} />
      </Grid>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.yellow2,
    ...padding.pv10,
    ...padding.ph5,
    ...margin.m0,
  },
});

export default FindUs;
