import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Row, Grid, Col } from 'native-base';

import Metrics from '../../theme/Metrics';
import { gray, yellow, accent, colors } from '../../theme/Colors';
import { AppHomeHeader, AppServiceBubble, AppCard } from '../../lib/components';

const Home = ({ cards, navigation }) =>
  (<Container>
    <Content>
      <Grid>
        <AppHomeHeader />

        <Row style={styles.listServices}>
          <AppServiceBubble
              bgColor={accent.a3}
              handleOnPress={() => navigation.navigate('Express')}
              iconName="ios-basket-outline"
              title="Express"
          />

          <AppServiceBubble
              bgColor={accent.a4}
              handleOnPress={() => navigation.navigate('Go')}
              iconName="ios-cash-outline"
              title="Go"
          />

          <AppServiceBubble
              bgColor={accent.a2}
              handleOnPress={() => navigation.navigate('Transfer')}
              iconName="ios-swap-outline"
              title="Transfer"
          />
        </Row>

        <View style={styles.cardList}>
          <Row style={styles.cardListHeader}>
            <Col size={8} style={{ paddingLeft: 25 }}>
              <Text style={styles.cardListHeaderText}>
                MES COMPTES
              </Text>
            </Col>
            <TouchableOpacity size={4}>
              <Text style={styles.cardListHeaderLink}>Ajouter</Text>
            </TouchableOpacity>
          </Row>

          {cards.length >= 1
            ? <View>
                <Row>
                  <AppCard card={cards[0]} />
                  {cards[1] && <AppCard card={cards[1]} />}
                </Row>

                {cards[2] &&
                  <Row>
                    <AppCard card={cards[2]} />
                    {cards[3] && <AppCard card={cards[3]} />}
                  </Row>}
              </View>
            : <View style={styles.info}>
                <Text style={styles.infoText}>
                  Vous n'avez ajouté aucun compte de nos partenaires pour le
                  moment. Cliquer sur "Ajouter" pour ajouter un compte.
                </Text>
              </View>}

        </View>
      </Grid>

    </Content>
  </Container>);

Home.propTypes = {
  cards: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};
Home.defaultProps = {
  cards: [
    {
      accountName: 'Moov',
      phoneNumber: '+229 95 00 47 73',
      amount: '500 000',
      currency: 'FCFA'
    }
  ]
};

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
    marginVertical: 25
  },
  cardListHeader: {
    borderBottomColor: gray.g5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10
  },
  cardListHeaderText: {
    textAlign: 'center',
    color: gray.g9
  },
  cardListHeaderLink: {
    color: yellow.y7,
    marginRight: 10
  },
  info: { padding: 10 },
  infoText: { textAlign: 'center', color: gray.g7 }
});

export default Home;
