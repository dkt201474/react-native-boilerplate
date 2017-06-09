import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Row, Container, Content } from 'native-base';

import { container } from '../../theme/AppStyles';
import { gray } from '../../theme/Colors';
import { AppHeader } from '../../lib/components';

const ContactUs = () =>
  (<Container style={container.default}>
    <AppHeader title="Nous contacter" />

    <Content style={container.whiteBox}>
      <Row style={styles.separator}>
        <Text style={styles.separatorText}>Bénin</Text>
      </Row>

      <Row style={{ marginBottom: 10 }}>
        <Text style={styles.separatorText}>Service Client</Text>
      </Row>

      <Row style={styles.item}>
        <Text style={styles.itemText}>+229 95 99 33 22</Text>
      </Row>
      <Row style={styles.item}>
        <Text style={styles.itemText}>+229 66 39 23 12</Text>
      </Row>

      <Row style={{ marginBottom: 10, marginTop: 15 }}>
        <Text style={styles.separatorText}>Service technique</Text>
      </Row>

      <Row style={styles.item}>
        <Text style={styles.itemText}>+229 97 39 23 12</Text>
      </Row>

      <Row style={styles.itemLast}>
        <Text style={styles.itemText}>+229 67 39 23 12</Text>
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

export default ContactUs;
