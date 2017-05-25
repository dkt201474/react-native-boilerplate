import AppStyles from '../theme/AppStyles';
import { StackNavigator } from 'react-navigation';

import {
  SignIn,
  SignUpForm,
  SignUpValidation,
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
