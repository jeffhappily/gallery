import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Colors from '../constants/Colors';

export default class PictureShow extends Component {
  render() {
    let image = this.props.navigation.state.params.image;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: image.covers.original }}
          style={styles.image} />
        <Text style={styles.title}>{image.name}</Text>
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
  },
  image: {
    // alignSelf: 'stretch',
    height: 200,
    // borderRadius: 4,
    // margin: 8,
    // flex: 1,
    // borderWidth: 0.5,
    // borderColor: Colors.grey,
  }
});
