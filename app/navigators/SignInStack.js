import { header } from '../theme/AppStyles';
import { StackNavigator } from 'react-navigation';

/* App imports */
import {
  SignIn,
  SignUp,
  SignUpValidation,
  ResetPassword
} from '../lib/screens';

/* Nav imports */
import HomeTab from './HomeTab';

export default StackNavigator({
  HomeTab: {
    screen: HomeTab,
    navigationOptions: () => ({ header: false })
  },
  SignIn: {
    screen: SignIn,
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
