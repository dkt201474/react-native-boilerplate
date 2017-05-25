import { Colors, } from '../theme';
import { bg, } from '../theme/AppStyles';
import { StackNavigator } from 'react-navigation';

import {
  SignIn,
  SignUpForm,
  SignUpValidation,
  FindUs,
} from '../lib/screens';

export default StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({ header: false, }),
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: () => ({
      headerTitle: 'Inscription',
      headerTintColor: Colors.white,
      headerStyle: bg.gray10,
    }),
  },
  SignUpValidation: {
    screen: SignUpValidation,
    navigationOptions: () => ({
      headerTitle: 'Confirmation',
      headerTintColor: Colors.white,
      headerStyle: bg.gray10,
      headerLeft: null,
    }),
  },

  FindUs: {
    screen: FindUs,
    navigationOptions: () => ({
      headerTitle: 'Nous trouver',
      headerTintColor: Colors.white,
      headerStyle: bg.gray10,
    }),
  },
});
