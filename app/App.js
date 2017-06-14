import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

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
  });
}

class App extends Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    /* The app store is created */
    const store = createStore(rootReducer, devToolsEnhancer());

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
      require('./assets/images/logo.png'),
      require('./assets/images/homeBg.jpg')
    ]);

    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }
}

export default App;
