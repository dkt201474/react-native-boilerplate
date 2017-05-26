import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import {
  Container,
  Content,
  List,
} from 'native-base';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';


import AppStyles, { padding, margin, colors, block } from '../../theme/AppStyles';
import { AppStatusBar, AppItem, } from '../../lib/components';

const ContactUs = ({ activeSection, collapsed }) => (
  <Container style={StyleSheet.flatten(block.containerBg)}>
    <AppStatusBar />

    <Content style={margin.mt25}>

      {/* <List style={StyleSheet.flatten(padding.pb20)}>
        <TouchableOpacity>
          <AppItem
              body={{
                text: 'ENANLYPAY BUSINESS',
                textStyle: colors.gray10,
              }}
              right={{
                iconName: 'ios-arrow-forward',
                iconStyle: colors.gray10,
              }}
              rowStyle={AppStyles.arrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppItem
              body={{
                text: 'ENANLYPAY CASH',
                textStyle: colors.gray10,
              }}
              right={{
                iconName: 'ios-arrow-forward',
                iconStyle: colors.gray10,
              }}
              rowStyle={AppStyles.arrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppItem
              body={{
                text: 'ENANLYPAY E-PAY',
                textStyle: colors.gray10,
              }}
              right={{
                iconName: 'ios-arrow-forward',
                iconStyle: colors.gray10,
              }}
              rowStyle={AppStyles.arrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppItem
              body={{
                text: 'ENANLYPAY EXPRESS',
                textStyle: colors.gray10,
              }}
              right={{
                iconName: 'ios-arrow-forward',
                iconStyle: colors.gray10,
              }}
              rowStyle={AppStyles.arrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppItem
              body={{
                text: 'ENANLYPAY SIMPLE',
                textStyle: colors.gray10,
              }}
              right={{
                iconName: 'ios-arrow-forward',
                iconStyle: colors.gray10,
              }}
              rowStyle={AppStyles.arrowItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppItem
              body={{
                text: 'ENANLYPAY TRANSFER',
                textStyle: colors.gray10,
              }}
              right={{
                iconName: 'ios-arrow-forward',
                iconStyle: colors.gray10,
              }}
              rowStyle={AppStyles.arrowItem}
          />
        </TouchableOpacity>
      </List> */}
    </Content>
  </Container>
);

export default ContactUs;
