import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { fetchImages } from '../actions/images';
import Colors from '../constants/Colors';
import { PictureList } from '../components/List';
import { SearchBar } from '../components/Input';

const width = Dimensions.get("window").width;

class PictureIndex extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      elevation: 0,
      backgroundColor: 'transparent',
      borderBottomWidth: 0
    },
    headerTitle: (
      <View style={{width: width - 80}}>
        <SearchBar placeholder={navigation.state.params.keyword} onClick={() => navigation.state.params.onSearchBarClick()} />
      </View>
    )
  });

  constructor(props){
  	super(props);

    this.arrangedImages = this.arrangedImages.bind(this);
    this.onSearchBarClick = this.onSearchBarClick.bind(this);
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const keyword = params.field || params.query.q;

    this.props.navigation.setParams({
      onSearchBarClick: this.onSearchBarClick,
      keyword
    })

    // to determine what fields to fetch from api
    let query;

    if (params.field) {
      if (!this.props.images[params.field]) {
        query = [params.field, `field=${params.field}`];
      }
    } else if (params.query) {
      query = ["query", Object.keys(params.query).map(function(key, index) {
        return key + "=" + params.query[key]
      }).join("&")];
    }
    if (query) {
      this.props.dispatch(fetchImages(...query));
    }
  }

  // Split images into two sides
  arrangedImages() {
    const { field } = this.props.navigation.state.params;
    const images = this.props.images[field || "query"] || [];

    const half = Math.ceil(images.length / 2);

    return [images.slice(0,half), images.slice(half)];
  }

  onSearchBarClick() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    if (params.field) {
      navigation.navigate('Search', {field: navigation.state.params.field});
    } else if (params.query) {
      navigation.goBack();
    }

  }

  render() {
    const field = this.props.navigation.state.params.field;

    return (
      <ScrollView style={styles.container}>
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
