import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { LoginButton } from 'react-native-fbsdk';
import { validateUser, logOutUser } from '../actions/auth';
import Avatar from './Avatar';
import Colors from '../constants/Colors';


const Drawer = ({ currentUser, dispatch, ...props }) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Avatar source={currentUser.picture} />
      <Text style={styles.title}>{currentUser.name}</Text>
      <View>
        <DrawerItems {...props} />
        <LoginButton
          readPermissions={["email","public_profile"]}
          onLogoutFinished={() => {
            dispatch(logOutUser());
          }}/>
      </View>

    </SafeAreaView>
  </ScrollView>
);

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
