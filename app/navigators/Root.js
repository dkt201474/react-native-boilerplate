import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'native-base';

/* App import */
import { yellow, gray, colors } from '../theme/Colors';

/* Navigator import */
import SignInStack from './SignInStack';

/* screens import */
import { FindUs, Services, DefaultMenu, ContactUs } from '../lib/screens';

export default TabNavigator(
  {
    FindUs: {
      screen: FindUs,
      navigationOptions: {
        header: false,
        tabBarLabel: 'Situation',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-pin' : 'ios-pin-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        header: false,
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-call' : 'ios-call-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    SignInStack: {
      screen: SignInStack,
      navigationOptions: {
        header: false,
        tabBarLabel: 'Connexion',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-lock' : 'ios-lock-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    Services: {
      screen: Services,
      navigationOptions: {
        tabBarLabel: 'Services',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-ionitron' : 'ios-ionitron-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    DefaultMenu: {
      screen: DefaultMenu,
      navigationOptions: {
        header: false,
        tabBarLabel: 'Menu',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-menu' : 'ios-menu-outline'}
              style={{ color: tintColor }}
          />)
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
    initialRouteName: 'SignInStack',
    tabBarOptions: {
      activeTintColor: yellow.y7,
      activeBackgroundColor: gray.g4,
      inactiveTintColor: gray.gray8,
      inactiveBackgroundColor: colors.white
    }
  }
);