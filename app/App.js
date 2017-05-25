import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import AppWithNavigationState from './navigators/SignInStack';

class App extends Component {

  render () {

    // The app store is creaeted
    const store = createStore(rootReducer);

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
