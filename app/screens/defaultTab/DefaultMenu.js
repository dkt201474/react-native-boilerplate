import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content, Row, } from 'native-base';

/* App imports */
import { AppHeader } from '../../lib/components';
import AppStyles, { block, margin, } from '../../theme/AppStyles';

const DefaultMenu = () => (
  <Container style={block.containerBg}>
    <StatusBar barStyle="dark-content" />

    <AppHeader title="Menu" />

    <Content style={margin.mt25}>
      <View style={AppStyles.menuItemWrapper}>
      <TouchableOpacity>
          <Row style={AppStyles.menuItem}>
            <Text>Politique de confidentialité</Text>
          </Row>
      </TouchableOpacity>
      <TouchableOpacity>
          <Row style={AppStyles.menuItemLast}>
            <Text>Politique de confidentialité</Text>
          </Row>
      </TouchableOpacity>
    </View>
    </Content>
  </Container>
);


export default DefaultMenu;
