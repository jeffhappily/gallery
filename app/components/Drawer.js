import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { LoginButton } from 'react-native-fbsdk';
import PropTypes from 'prop-types';
import { logOutUser } from '../actions/auth';
import Avatar from './Avatar';
import Colors from '../constants/Colors';


const Drawer = ({ currentUser, dispatch }) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Avatar source={currentUser.picture} />
      <Text style={styles.title}>{currentUser.name}</Text>
      <View>
        <LoginButton
          readPermissions={["email","public_profile"]}
          onLogoutFinished={() => {
            dispatch(logOutUser());
          }}/>
      </View>

    </SafeAreaView>
  </ScrollView>
);

Drawer.propTypes = {
  currentUser: PropTypes.object,
  dispatch: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: Colors.darkGrey
  }
});

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Drawer);
