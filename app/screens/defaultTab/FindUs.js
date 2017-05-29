import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import {
  Container,
  Content,
  Grid,
  Row,
  Header,
  Body,
} from 'native-base';

import AppStyles, { bg, colors, block, inline, align, margin } from '../../theme/AppStyles';
import { AppStatusBar, AppItem, } from '../../lib/components';

const FindUs = () => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />
    <Header style={bg.gray10} >
      <Body style={align.centerX}>
        <Text style={[colors.white, {fontWeight: 'bold', fontSize: 17}]}>Nous trouver</Text>
      </Body>
    </Header>

    <Content style={margin.mt25}>
      <Grid style={block.whiteContainer}>
        <Row style={AppStyles.separator}><Text style={inline.textBold}>Bénin</Text></Row>
        <Row style={AppStyles.separator}><Text style={inline.textBold}>Cotonou</Text></Row>

        <AppItem body={{ text: 'Fidjrossè', }} rowStyle={[AppStyles.item, margin.mh5]} />
        <AppItem body={{ text: 'Godomey', }} rowStyle={[AppStyles.lastItem, margin.mh5]} />
      </Grid>
    </Content>
  </Container>
);

export default FindUs;
