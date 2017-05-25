import { StackNavigator } from 'react-navigation';

import {
  SignIn,
  SignUpForm,
  SignUpValidation,
} from '../lib/screens';

export default StackNavigator({
  SignIn: { screen: SignIn },
  SignUpForm: { screen: SignUpForm },
  SignUpValidation: { screen: SignUpValidation },
});
