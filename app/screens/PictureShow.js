import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Link from '../components/Link';
import Colors from '../constants/Colors';


export default class PictureShow extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: Colors.white,
    headerStyle: {
      elevation: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      position: 'absolute',
      top: -2,
      left: 0,
      right: 0,
    },
  });

  componentWillMount() {
    // debugger
  }

  render() {
    let image = this.props.navigation.state.params.image;
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: image.covers.original }}
          style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{image.name}</Text>
          <Text style={styles.smallText}>by {image.owners[0].display_name}</Text>
        </View>
        <View style={[styles.stats, styles.details]}>
          <View style={styles.column}>
            <Text style={styles.paragraph}>{image.stats.views}</Text>
            <Text style={styles.smallText}>Views</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.paragraph}>{image.stats.appreciations}</Text>
            <Text style={styles.smallText}>Likes</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.paragraph}>{image.stats.comments}</Text>
            <Text style={styles.smallText}>Comments</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.paragraph}>Fields</Text>
            <Text style={styles.smallText}>{image.fields.join(", ")}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.paragraph}>Website</Text>
            <Link style={styles.smallText} url={image.url}>{image.url}</Link>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    padding: 15,
    paddingLeft: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.darkGrey
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGrey
  },
  smallText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.quiteGrey
  },
  stats: {
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.kindOfGrey
  },
  column: {
    flex: 1
  },
  image: {
    height: 250,
  },
  row: {
    marginBottom: 25
  }
});
