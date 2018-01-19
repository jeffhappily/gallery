import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navigator from './app/navigation/Navigator';
import configureStore from './app/store';

const store = configureStore();

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
