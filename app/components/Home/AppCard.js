import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Col } from 'native-base';

/* App Imports */
import { gray, yellow } from '../../theme/Colors';
import { Metrics } from '../../theme';

const AppCard = ({ card }) =>
  (<TouchableOpacity>
    <Col>
      <View style={StyleSheet.flatten(styles.cardItem)}>
        <Text style={styles.cardItemAccountName}>
          {card.accountName}
        </Text>
        <Text style={styles.cardItemNumber}>
          ({card.phoneNumber})
        </Text>
        <Text style={styles.cardItemAmount}>
          {card.amount}
          <Text style={styles.cardItemCurrency}> {card.currency}</Text>
        </Text>
      </View>
    </Col>
  </TouchableOpacity>);

AppCard.propTypes = { card: PropTypes.object.isRequired };

const styles = StyleSheet.create({
  cardItem: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: gray.g5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: gray.g5,
    height: (Metrics.width - 10) / 2,
    width: (Metrics.width - 10) / 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardItemAccountName: { color: yellow.y7 },
  cardItemNumber: {
    color: gray.g9,
    fontSize: 11
  },
  cardItemCurrency: {
    color: gray.g9,
    fontSize: 8.5
  },
  cardItemAmount: {
    color: gray.g9,
    fontSize: 30
  }
});

export default AppCard;
