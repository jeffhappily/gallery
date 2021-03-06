import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchFeaturedImages, fetchFields } from '../actions/images';
import { PictureList, FieldList } from '../components/List';

class Main extends Component {
  componentWillMount() {
    this.props.dispatch(fetchFeaturedImages());
    this.props.dispatch(fetchFields());
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <PictureList
          title="Featured"
          images={this.props.images.featured}
          onPicturePress={image => this.props.navigation.navigate('PictureShow', { image })} />
        <FieldList
          title="Fields"
          fields={this.props.images.fields}
          onFieldPress={field => this.props.navigation.navigate('PictureIndex', { field })} />
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
});

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(Main);
