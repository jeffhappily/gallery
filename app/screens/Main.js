import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchFeaturedImages } from '../actions/images';
import Colors from '../constants/Colors';
import { PictureList } from '../components/Card';

class Main extends Component {
  componentWillMount() {
    this.props.fetchImages()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Featured</Text>
        <ScrollView>
          {this.props.images.featured.map((image, index) => (
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

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => {
    dispatch(fetchFeaturedImages())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
