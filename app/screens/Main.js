import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { PictureList } from '../components/Card'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Featured</Text>
        <PictureList />
        <PictureList />
        <PictureList />
        <PictureList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    color: Colors.mainBlack
  },
  pictureList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
