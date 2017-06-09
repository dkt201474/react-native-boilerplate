import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Row } from 'native-base';
import { connect } from 'react-redux';

/* App imports */
import {
  AppHeader,
  AppInfoModal,
  AppPrivatePolicy
} from '../../lib/components';
import { container } from '../../theme/AppStyles';
import { gray, colors } from '../../theme/Colors';

/* actions  */
import { ux } from '../../reducers/actions';

const TITLE = {
  about: 'À propos de EnanlyPay',
  privatePolicy: 'Politique de confidentialité'
};

const CONTENT = {
  about:
    'EnanlyPay est un produit commercial de la société Enanlygroup qui fournit un moyen pour traiter et gérer les transactions en ligne. En cours de développement et d’essai, la première version du système de paiement EnanlyPay sera lancée officiellement en 2017. \n\nEnanlyPay est un système de paiement réfléchi pour l’Afrique qui utilise la base de consommateurs de ses partenaires potentiels que sont: MTN, Etisalat, Orange, Millicom, BhartiAirtel, STC, Zainet, Ooredoo, Vodafon.\n\nEnanlyPay a plusieurs produits pour plusieurs cibles: les consommateurs, les PME, Grandes Entreprises et le e-commerce. Il est disponible sur portable, Tablette et Ordinateur respectivement en version androïd, iOS et Windows'
};

const DefaultMenu = ({
  openAbout,
  openHelp,
  openFares,
  openUserContract,
  openPrivatePolicy,
  closeModal,
  visibleModal
}) =>
  (<Container style={container.default}>
    <AppHeader title="Menu" />

    <Content style={StyleSheet.flatten(styles.menuWrapper)}>
      <TouchableOpacity onPress={openAbout}>
        <Row style={styles.item}><Text>À propos</Text></Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={openHelp}>
        <Row style={styles.item}><Text>Aide</Text></Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <Row style={styles.item}><Text>Condition d&apos;utilisation</Text></Row>
      </TouchableOpacity>

      <TouchableOpacity onPress={openPrivatePolicy}>
        <Row style={styles.item}><Text>Politique de confidentialité</Text></Row>
      </TouchableOpacity>

      <TouchableOpacity>
        <Row style={styles.item}><Text>Tarif</Text></Row>
      </TouchableOpacity>
    </Content>

    <AppInfoModal
        closeModal={closeModal}
        content={CONTENT.about}
        title={TITLE.about}
        visibleModal={visibleModal === 'about'}
    />

    <AppInfoModal
        closeModal={closeModal}
        content={AppPrivatePolicy}
        title="Politique de confidentialité"
        visibleModal={visibleModal === 'privatePolicy'}
    />

  </Container>);

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: gray.g5
  },
  menuWrapper: {
    backgroundColor: colors.white,
    padding: 0,
    marginHorizontal: 10,
    marginVertical: 10
  }
});

DefaultMenu.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openAbout: PropTypes.func.isRequired,
  visibleModal: PropTypes.any.isRequired
};

export default connect(
  (state) => ({ visibleModal: state.ux.visibleModal }),
  (dispatch) => ({
    closeModal: () => dispatch(ux.closeModal()),
    openAbout: () => dispatch(ux.openAbout('about')),
    openPrivatePolicy: () => dispatch(ux.openPrivatePolicy('privatePolicy')),
    openHelp: () => dispatch(ux.openHelp('help'))
  })
)(DefaultMenu);
