import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import {
  SignIn,
  SignUpForm,
  SignUpValidation,
} from '../lib/screens';

export const AppNavigator = StackNavigator({
  SignIn: { screen: SignIn },
  SignUpForm: { screen: SignUpForm },
  SignUpValidation: { screen: SignUpValidation },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ nav: state.nav, });

export default connect(mapStateToProps)(AppWithNavigationState);
