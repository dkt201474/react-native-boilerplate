import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

/* Navigator imports */
import Root from './Root';
import { backHandle } from '../lib';

/*
    - The root navigator aware of redux is created
    - It passes navigation prop that contains dispatch (func) and nav (obj)
    - Now every child component have navigation prop and
    - can trigger action that return a new nav object (Ex. change screen)
*/

class AppWithNavigationState extends PureComponent {
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', () =>
      backHandle(this.props.nav, this.props.dispatch, NavigationActions)
    );
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () =>
      backHandle(this.props.nav, this.props.dispatch, NavigationActions)
    );
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
