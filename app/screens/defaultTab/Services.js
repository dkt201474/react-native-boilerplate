import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';

import { container } from '../../theme/AppStyles';
import { AppHeader } from '../../lib/components';
import { gray, colors } from '../../theme/Colors';

// Tableau a fournir a Accordion
const data = [
  {
    title: 'ENANLYPAY EXPRESS',
    content:
      'EnanlyPay Express est un service qui lutte contre les files d’attente dans les supermarchés et centres commerciales « Zéro file d’attente».\n\nGrâce à EnanlyPay Express, les utilisateurs pourront éviter les longues files d’attente sur les lieux de services des entreprises qui ont souscrit à EnanlyPay Express.\n\nEn effet, pour les entreprises, EnanlyPay Express est constitué d’une base de données commerciale, d’un producteur d’identifiant pour l’étiquetage des articles ou services commercialisés par l’entreprise et d’un système de sécurité pour la protection des transactions.\n\nIn fine, EnanlyPay Express crée une flexibilité dans la comptabilité des entreprises adhérentes et fait gagner du temps à leurs clients.'
  },
  {
    title: 'ENANLYPAY GO',
    content:
      'EnanlyPay Go est un service qui permet aux utilisateurs de payer leurs factures de livraison, d’énergie, d’eau, d’abonnement ou tout autre service et achat réalisé avec une entreprise connectée à EnanlyPay.\n\nIl donne la possibilité d’effectuer des paiements pré-autorisé. Ceci à l’aide de leur appareil cellulaire ou mobile depuis leur maison ou lieu de travail sans devoir se déplacer.'
  },
  {
    title: 'ENANLYPAY TRANSFER',
    content:
      'EnanlyPay Transfer est un service pour envoyer ou recevoir de l’argent au plan national ou international et ceci sur tous les réseaux télécoms partenaires à EnanlyPay. \n\nCeci est possible grâce à l’accord d’interopérabilité conclu avec nos potentiels partenaires. Ainsi, grâce à EnanlyPay, il n\'aura plus de problème de transaction lié à la différenciation des systèmes de paiement mobile. \n\nAussi nos utilisateurs ont la possibilité de transférer de l’argent entre leurs comptes personnels (Moov vers MTN vers Orange etc…).'
  }
];

const styles = StyleSheet.create({
  header: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: gray.g5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row'
  },
  headerText: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: gray.g8
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10
  },
  active: { backgroundColor: colors.white },
  inactive: { backgroundColor: colors.white }
});

const Services = () => {
  // Components methods
  const _renderHeader = (section, i, isActive) => {
    if (isActive) {
      return (
        <View
            style={[styles.header, isActive ? styles.active : styles.inactive]}
        >
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
      );
    }

    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  const _renderContent = (section, i, isActive) =>
    (<View style={[styles.content, isActive ? styles.active : styles.inactive]}>
      <Text style={{ color: gray.g9 }}>{section.content}</Text>
    </View>);

  return (
    <Container style={container.default}>
      <AppHeader title="Services" />

      <Content style={{ marginTop: 25 }}>
        <Accordion
            renderContent={_renderContent}
            renderHeader={_renderHeader}
            sections={data}
        />
      </Content>
    </Container>
  );
};

export default Services;
