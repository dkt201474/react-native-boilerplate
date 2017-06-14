import React from 'react';
import { Icon } from 'native-base';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Home, Express, Transfer, HomeMenu, Go } from '../lib/screens';

/* App imports */
import { yellow, gray, colors } from '../theme/Colors';

const HomeTab = TabNavigator(
  {
    Express: {
      screen: Express,
      navigationOptions: {
        header: false,
        tabBarLabel: 'Express',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-basket' : 'ios-basket-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    Transfer: {
      screen: Transfer,
      path: '/appservicemodal',
      navigationOptions: {
        header: false,
        tabBarLabel: 'Transfer',
        tabBarIcon: ({ focused, tintColor }) =>
          <Icon name={focused ? 'ios-swap' : 'ios-swap-outline'} />
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: false,
        tabBarLabel: 'Acceuil',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-home' : 'ios-home-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    Go: {
      screen: Go,
      path: '/cards',
      navigationOptions: {
        header: false,
        tabBarLabel: 'Go',
        tabBarIcon: ({ focused, tintColor }) =>
          (<Icon
              name={focused ? 'ios-cash' : 'ios-cash-outline'}
              style={{ color: tintColor }}
          />)
      }
    },
    HomeMenu: {
      screen: HomeMenu,
      path: '/more',
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
    tabBarVisible: false,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: yellow.y7,
      activeBackgroundColor: gray.g4,
      inactiveTintColor: gray.gray8,
      inactiveBackgroundColor: colors.white
    }
  }
);

export default StackNavigator({
  HomeNavigator: {
    screen: HomeTab,
    navigationOptions: () => ({
      header: false,
      tabBarVisible: false
    })
  }
});
