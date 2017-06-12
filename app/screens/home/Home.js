import React from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Row, Grid, Col } from 'native-base';

import Metrics from '../../theme/Metrics';
import { gray, yellow, accent, colors } from '../../theme/Colors';
import { AppHomeHeader, AppServiceBubble } from '../../lib/components';

const Home = () =>
  (<Container>
    <Content>
      <Grid>
        <AppHomeHeader />

        <Row style={styles.listServices}>
          <AppServiceBubble
              bgColor={accent.a3}
              handleOnPress={null}
              iconName="ios-basket-outline"
              title="Express"
          />

          <AppServiceBubble
              bgColor={accent.a4}
              handleOnPress={null}
              iconName="ios-cash-outline"
              title="Go"
          />

          <AppServiceBubble
              bgColor={accent.a2}
              handleOnPress={null}
              iconName="ios-swap-outline"
              title="Transfer"
          />
        </Row>

        <View style={styles.cardList}>
          <Row style={styles.cardListHeader}>
            <Col size={8}>
              <Text style={styles.cardListHeaderText}>
                MES COMPTES
              </Text>
            </Col>
            <TouchableOpacity size={4}>
              <Text style={styles.cardListHeaderLink}>Ajouter</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <Col style={styles.card}>
              <Text>hi</Text>
            </Col>
          </Row>
        </View>
      </Grid>

    </Content>
  </Container>);

const styles = StyleSheet.create({
  listServices: {
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: -35
  },
  cardList: {
    width: Metrics.width * 0.96,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: 25
  },
  cardListHeader: {
    borderBottomColor: gray.g5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    marginBottom: 10
  },
  cardListHeaderText: {
    textAlign: 'center',
    color: gray.g9
  },
  cardListHeaderLink: {
    color: yellow.y7,
    marginRight: 10
  }
});

export default Home;
