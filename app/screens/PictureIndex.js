import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchImages } from '../actions/images';
import Colors from '../constants/Colors';
import { PictureList } from '../components/List';

class PictureIndex extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      elevation: 0,
      backgroundColor: 'transparent',
    },
  });

  constructor(props){
  	super(props);

    this.arrangedImages = this.arrangedImages.bind(this);
  }

  componentWillMount() {
    let field = this.props.navigation.state.params.field;

    if (!this.props.images[field]) {
      this.props.dispatch(fetchImages(field));
    }
  }

  // Split images into two sides
  arrangedImages() {
    let field = this.props.navigation.state.params.field;
    let images = this.props.images[field] || [];

    let half = Math.ceil(images.length / 2);

    return [images.slice(0,half), images.slice(half)];
  }

  render() {
    let field = this.props.navigation.state.params.field;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{field}</Text>
        <View style={styles.pictureList}>
          <View style={styles.column}>
            <PictureList.Vertical
              images={this.arrangedImages()[0]}
              onPicturePress={image => this.props.navigation.navigate('PictureShow', {image})} />
          </View>
          <View style={styles.column}>
            <PictureList.Vertical
              images={this.arrangedImages()[1]}
              onPicturePress={image => this.props.navigation.navigate('PictureShow', {image})} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pictureList: {
    flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  column: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    color: Colors.darkGrey
  }
});

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(PictureIndex);
