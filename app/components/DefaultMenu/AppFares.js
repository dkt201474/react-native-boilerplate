import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import {
  List,
  ListItem,
  Separator as NBSeparator,
  Body,
  Right
} from 'native-base';

/* App imports */
import { gray, yellow } from '../../theme/Colors';

/* Custom components */
const Item = ({ bodyText, rightText, ...rest }) =>
  (<ListItem {...rest}>
    <Body>
      <Text style={{ color: gray.g8 }}>{bodyText}</Text>
    </Body>
    <Right>
      <Text style={{ color: yellow.y7 }}>{rightText}</Text>
    </Right>
  </ListItem>);

Item.propTypes = {
  bodyText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired
};

const Separator = ({ title }) =>
  (<NBSeparator style={{ backgroundColor: 'transparent' }}>
    <Text style={{ fontWeight: 'bold', color: gray.g9 }}>
      {title}
    </Text>
  </NBSeparator>);

Separator.propTypes = { title: PropTypes.string.isRequired };

/* Main components */
const AppUserTerms = (
  <View style={{ paddingBottom: 20 }}>
    <Separator title="Bénin" />
    <Separator title="Transfert national" />

    <List style={{ paddingLeft: 5 }}>
      <Item bodyText="Entre ses comptes personnels" rightText="0 F" />

      <Separator title="Entre abonnés EnanlyPay" />

      <Item bodyText="Entre ses comptes personnels" rightText="0 F" />
      <Item bodyText="5 F - 5 000 F" rightText="100 F" />
      <Item bodyText="5 001 F - 15 000 F" rightText="250 F" />
      <Item bodyText="15 001 F - 25 000 F" rightText="350 F" />
      <Item bodyText="25 001 F - 50 000 F" rightText="600 F" />
      <Item bodyText="50 001 F - 75 000 F" rightText="600 F" />
      <Item bodyText="75 001 F - 100 000 F" rightText="1 000 F" />
      <Item bodyText="100 001 F - 200 000 F" rightText="1 000 F" />
      <Item bodyText="200 001 F - 250 000 F" rightText="1 500 F" />
      <Item bodyText="250 001 F - 300 000 F" rightText="1 500 F" />
      <Item bodyText="300 001 F - 400 000 F" rightText="2 000 F" />
      <Item bodyText="400 001 F - 500 000 F" rightText="2 000 F" />
      <Item bodyText="500 001 F - 1 000 000 F" rightText="2 500 F" />
      <Item
          bodyText="1 000 001 F - 2 000 000 F"
          last
          rightText="2 500 F"
          style={{ borderBottomWidth: 0 }}
      />

    </List>
  </View>
);

export default AppUserTerms;
