import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, } from 'react-navigation';

/* Navigator imports */
import SignInStack from './SignInStack';

/*
    - The root navigator aware of redux is created
    - It passes navigation prop that contains dispatch (func) and nav (obj)
    - Now every child component have navigation prop and
    - can trigger action that return a new nav object (Ex. change screen)
*/
const AppWithNavigationState = ({ dispatch, nav }) => (
  <SignInStack navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

/* Binding to the store */
const mapStateToProps = (state) => ({ nav: state.nav, });

export default connect(mapStateToProps)(AppWithNavigationState);
