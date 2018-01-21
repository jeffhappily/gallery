import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { validateUser, logOutUser } from '../actions/auth';

class LogIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GalleryApp</Text>
        <View>
          <LoginButton
            readPermissions={["email","public_profile"]}
            onLoginFinished={
              function(error, result) {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  this.props.dispatch(validateUser());
                }
              }.bind(this)
            }
            onLogoutFinished={function () {
              this.props.dispatch(logOutUser())
            }.bind(this)}/>
        </View>
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

export default connect(null)(LogIn);
