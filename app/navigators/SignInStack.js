import { Colors, AppStyles, } from '../theme';
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
      headerTitle: 'Inscription',
      headerTintColor: Colors.white,
      headerStyle: AppStyles.bgGray10,
    }),
  },
  SignUpValidation: {
    screen: SignUpValidation,
    navigationOptions: () => ({
      headerTitle: 'Confirmation',
      headerTintColor: Colors.white,
      headerStyle: AppStyles.bgGray10,
      headerLeft: null,
    }),
  },
});
