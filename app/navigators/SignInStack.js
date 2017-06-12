import { header } from '../theme/AppStyles';
import { StackNavigator } from 'react-navigation';

import {
  SignIn,
  SignUp,
  SignUpValidation,
  Home,
  Help,
  ResetPassword
} from '../lib/screens';

export default StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({ header: false })
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({ header: false })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      ...header,
      headerTitle: 'Inscription',
      tabBarVisible: false
    })
  },
  Help: {
    screen: Help,
    navigationOptions: () => ({
      ...header,
      headerTitle: 'Aide',
      tabBarVisible: false
    })
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: () => ({
      ...header,
      headerTitle: 'Mot de passe oublié',
      tabBarVisible: false
    })
  },
  SignUpValidation: {
    screen: SignUpValidation,
    navigationOptions: () => ({
      ...header,
      headerLeft: null,
      tabBarVisible: false,
      headerTitle: 'Confirmation'
    })
  }
});
