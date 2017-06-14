import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

/* Navigator imports */
import Root from './Root';

/*
    - The root navigator aware of redux is created
    - It passes navigation prop that contains dispatch (func) and nav (obj)
    - Now every child component have navigation prop and
    - can trigger action that return a new nav object (Ex. change screen)
*/

class AppWithNavigationState extends PureComponent {
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', () =>
      this.backHandle(this.props.nav)
    );
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () =>
      this.backHandle(this.props.nav)
    );
  }

  getCurrentScreen (nav) {
    if (!nav) {
      return null;
    }
    const route = nav.routes[nav.index];

    if (route.routes) {
      return this.getCurrentScreen(route);
    }

    return route.routeName;
  }

  backHandle (nav) {
    const currentScreen = this.getCurrentScreen(nav);

    switch (currentScreen) {
    case 'SignUp':
      this.props.dispatch(NavigationActions.back());

      return true;

    default:
      return true;
    }
  }

  render () {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({ dispatch, state: nav });

    return <Root navigation={navigation} />;
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

/* Binding to the store */
const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(AppWithNavigationState);
