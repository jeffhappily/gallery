import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { PictureList } from '../components/Card';
import { API_ENDPOINT } from '../config/api';
import Config from 'react-native-config';

export default class Main extends Component {
  constructor(props){
  	super(props);
    this.state = {
      images: []
    }
  }

  componentWillMount() {
    let self = this;

    fetch(`${API_ENDPOINT}/projects?api_key=${Config.BEHANCE_API_KEY}`, {})
      .then(response => {
        self.setState({images: JSON.parse(response._bodyInit).projects.slice(0, 8)})
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Featured</Text>
        <ScrollView>
          {this.state.images.map((image, index) => (
            <PictureList src={image.covers.original} key={index} />
          ))}
        </ScrollView>
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
