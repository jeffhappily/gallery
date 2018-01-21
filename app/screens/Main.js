import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchFeaturedImages } from '../actions/images';
import Colors from '../constants/Colors';
import { PictureList } from '../components/List';

class Main extends Component {
  componentWillMount() {
    this.props.fetchImages()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <PictureList
          title="Featured"
          images={this.props.images.featured}
          onPicturePress={image => this.props.navigation.navigate('PictureShow', {image})} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  pictureList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => {
    dispatch(fetchFeaturedImages())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
