import AppStyles from '../theme/AppStyles';
import { StackNavigator } from 'react-navigation';

import {
  SignIn,
  SignUpForm,
  SignUpValidation,
  ForgotPassword,
} from '../lib/screens';

export default StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({ header: false, }),
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: () => ({
      ...AppStyles.header,
      headerTitle: 'Inscription',
      tabBarVisible: false,
    }),
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: () => ({
      ...AppStyles.header,
      headerTitle: 'Mot de passe oublié',
      tabBarVisible: false,
    }),
  },
  SignUpValidation: {
    screen: SignUpValidation,
    navigationOptions: () => ({
      ...AppStyles.header,
      headerLeft: null,
      tabBarVisible: false,
      headerTitle: 'Confirmation',
    }),
  },
});
