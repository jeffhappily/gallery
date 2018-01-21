import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { validateUser } from '../actions/auth';


const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'LogIn'})
  ]
});

class Splash extends Component {
  componentDidMount() {
    this.props.dispatch(validateUser());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GalleryApp</Text>
        <ActivityIndicator animating={true} size={30} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  }
});

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Splash);
