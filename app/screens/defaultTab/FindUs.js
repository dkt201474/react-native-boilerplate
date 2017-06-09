import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Row, Container, Content } from 'native-base';

import { container } from '../../theme/AppStyles';
import { gray } from '../../theme/Colors';
import { AppHeader } from '../../lib/components';

const FindUs = () =>
  (<Container style={container.default}>
    <AppHeader title="Nous trouver" />

    <Content style={container.whiteBox}>
      <Row style={styles.separator}>
        <Text style={styles.separatorText}>Bénin</Text>
      </Row>

      <Row style={{ marginBottom: 10 }}>
        <Text style={styles.separatorText}>Cotonou</Text>
      </Row>

      <Row style={styles.item}>
        <Text style={styles.itemText}>Fidjrossè</Text>
      </Row>
      <Row style={styles.item}>
        <Text style={styles.itemText}>Zongo II</Text>
      </Row>
      <Row style={styles.itemLast}>
        <Text style={styles.itemText}>Quartier Jack</Text>
      </Row>

    </Content>

  </Container>);

const styles = StyleSheet.create({
  separator: { marginBottom: 10 },
  separatorText: {
    fontWeight: 'bold',
    color: gray.g9
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: gray.g5,
    paddingVertical: 10,
    marginHorizontal: 15
  },
  itemLast: {
    paddingVertical: 10,
    marginHorizontal: 15
  },
  itemText: { color: gray.g8 }
});

export default FindUs;
