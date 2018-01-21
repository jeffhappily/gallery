import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigator from './app/navigation/Navigator';
import configureStore from './app/store';

const store = configureStore();

class App extends Component<{}> {
  render() {
    return (
      <Navigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })
        } />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
);
