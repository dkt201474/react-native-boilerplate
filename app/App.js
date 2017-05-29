import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import AppWithNavigationState from './navigators';

/*
* -> functions for loading caching
*/
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Expo.Asset.fromModule(image).downloadAsync();
  })
}

class App extends Component {
  /* The app store is created */

  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render () {
    const store = createStore(rootReducer);

    if (!this.state.appIsReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/logo.png')
    ]);

    await Promise.all([
      ...imageAssets,
    ]);
    this.setState({appIsReady: true});
  }
}

export default App;
