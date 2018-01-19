import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './app/screens/Main';
import configureStore from './app/store';

const store = configureStore();

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
