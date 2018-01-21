import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { logInUser } from '../actions/auth'

class LogIn extends Component {
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      let user = {
        name: result.name,
        picture: result.picture.data.url
      }
      this.props.logInUser(user)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GalleryApp</Text>
        <View>
          <LoginButton
            readPermissions={["email","public_profile"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      const infoRequest = new GraphRequest(
                        '/me?fields=name,picture',
                        null,
                        this._responseInfoCallback
                      );
                      // Start the graph request.
                      new GraphRequestManager().addRequest(infoRequest).start();
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
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

const mapDispatchToProps = dispatch => ({
  logInUser: user => {
    dispatch(logInUser(user))
  }
});

export default connect(null, mapDispatchToProps)(LogIn);
