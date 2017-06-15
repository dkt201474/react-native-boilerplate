import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

/* App imports */
import AppWithNavigationState from './navigators';
import store from './reducers/store';

/*
* -> functions for loading caching images
*/
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Expo.Asset.fromModule(image).downloadAsync();
  });
}

/*
    - Use state to display the loading screen before every caching data have be
      loaded. The adress to the screen to be load can be see at exp.json
*/
class App extends Component {
  state = { appIsReady: false };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
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
    const imageAssets = cacheImages(
      [
        // require('./assets/images/logo.png')
      ]
    );

    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }
}

export default App;
