import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {
  Container,
  Content,
  Row,
  Col,
  Icon,
  Header,
  Body,
} from 'native-base';
import { bg, colors, block, margin, padding, } from '../../theme/AppStyles';
import { Colors } from '../../theme';

// Tableau a fournir a Accordion
const data = [
  {
    title: 'ENANLYPAY BUSINESS',
    content: `EnanlyPay Transfer est un service pour envoyer ou recevoir de l’argent au plan national ou international et ceci sur tous les réseaux télécoms partenaires à EnanlyPay.\n\nCeci est possible grâce à l’accord d’interopérabilité conclu avec nos potentiels partenaires. Ainsi, grâce à EnanlyPay, il n'aura plus de problème de transaction lié à la différenciation des systèmes de paiement mobile.\n\nAussi nos utilisateurs ont la possibilité de transférer de l’argent entre leurs comptes personnels (Moov vers MTN vers Orange etc…).`
  },
  {
    title: 'ENANLYPAY CASH',
    content: `EnanlyPay Cash est un service qui permet aux utilisateurs de payer leurs factures de livraison, d’énergie, d’eau, d’abonnement ou tout autre service et achat réalisé avec une entreprise connectée à EnanlyPay.\n\nIl donne la possibilité d’effectuer des paiements pré-autorisé. Ceci à l’aide de leur appareil cellulaire ou mobile depuis leur maison ou lieu de travail sans devoir se déplacer.`
  },
  {
    title: 'ENANLYPAY E-PAY',
    content: `Enanly e-Pay est un produit qui permet aux clients EnanlyPay d’utiliser les méthodes de paiement stockées dans leur compte EnanlyPay pour payer des biens et services sur les boutiques en ligne de marchands participants.\n\nAvec EnanlyPay, le processus de commande complet est géré par le vendeur. Les vendeurs qui désirent utiliser Enanly e-Pay devront mettre en oeuvre les API d’EnanlyPay pour vérifier le mode de paiement de l’acheteur, saisir les fonds et fermer l’ordre.\n\nEnanlyPay peut être intégré par le commerçant lui-même ou à l’aide d’un développeur.`
  },
  {
    title: 'ENANLYPAY EXPRESS',
    content: `EnanlyPay Express est un service qui lutte contre les files d’attente dans les supermarchés et centres commerciales « Zéro file d’attente».\n\nGrâce à EnanlyPay Express, les utilisateurs pourront éviter les longues files d’attente sur les lieux de services des entreprises qui ont souscrit à EnanlyPay Express.\n\nEn effet, pour les entreprises, EnanlyPay Express est constitué d’une base de données commerciale, d’un producteur d’identifiant pour l’étiquetage des articles ou services commercialisés par l’entreprise et d’un système de sécurité pour la protection des transactions.\n\nIn fine, EnanlyPay Express crée une flexibilité dans la comptabilité des entreprises adhérentes et fait gagner du temps à leurs clients.`
  },
  {
    title: 'ENANLYPAY SIMPLE',
    content: `Pensé pour les petites et moyennes entreprises EnanlyPay Simple est le produit qui va permettre aux PME de consulter, traiter et gérer leurs transactions journalières, mensuelles et annuelles.\n\nGrâce à EnanlyPay Simple, les marchands pourront réclamer de l’argent à leurs clients en entrant leurs ID et le montant; ceci en toute quiétude. `
  },
  {
    title: 'ENANLYPAY TRANSFER',
    content: `EnanlyPay Transfer est un service pour envoyer ou recevoir de l’argent au plan national ou international et ceci sur tous les réseaux télécoms partenaires à EnanlyPay. {"\n\n"}Ceci est possible grâce à l’accord d’interopérabilité conclu avec nos potentiels partenaires. Ainsi, grâce à EnanlyPay, il n'aura plus de problème de transaction lié à la différenciation des systèmes de paiement mobile. {"\n\n"}Aussi nos utilisateurs ont la possibilité de transférer de l’argent entre leurs comptes personnels (Moov vers MTN vers Orange etc…).`
  },
];

const styles = StyleSheet.create({
  header: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.gray5,
    ...padding.ph10,
    ...padding.pv15,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontWeight: 'bold',
    ...colors.gray10,
  },
  content: {
    ...padding.ph20,
    ...padding.pb20,
    ...padding.pt10,
  },
  active: { ...bg.white, },
  inactive: { ...bg.white, },
  icon: {
    fontSize: 25,
    alignSelf: 'flex-end',
  },
});

const Services = () => {
  // Components methods
  const _renderHeader = (section, i, isActive) => {
    if (isActive) {
      return (
        <Row style={[styles.header, isActive ? styles.active : styles.inactive]} >
          <Col size={90} >
            <Text style={styles.headerText}>{section.title}</Text>
          </Col>
          <Col size={10}>
            <Icon name="ios-arrow-down" style={StyleSheet.flatten(styles.icon)} />
          </Col>
        </Row>
      );
    }

    return (
        <Row style={[styles.header, isActive ? styles.active : styles.inactive]} >
          <Col size={90} >
            <Text style={styles.headerText}>{section.title}</Text>
          </Col>
          <Col size={10}>
            <Icon name="ios-arrow-forward" style={StyleSheet.flatten(styles.icon)} />
          </Col>
        </Row>
    );
  };

  const _renderContent = (section, i, isActive) => (
    <View style={[styles.content, isActive ? styles.active : styles.inactive]} >
      <Text>{section.content}</Text>
    </View>
  );

  return (
    <Container style={block.containerBg}>
      <StatusBar barStyle="dark-content" />

      <Header style={bg.gray10} >
        <Body>
          <Text style={[colors.white, {fontWeight: 'bold', fontSize: 17}]}>Nos Services</Text>
        </Body>
      </Header>

      <Content style={margin.mt25}>
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
