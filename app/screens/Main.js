import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchFeaturedImages } from '../actions/images';
import Colors from '../constants/Colors';
import { PictureList } from '../components/List';
import Menu from '../components/Menu';

class Main extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   headerStyle: {
  //     elevation: 0,
  //     backgroundColor: 'transparent',
  //   },
  //   headerLeft: (
  //     <Menu onPress={() => navigation.navigate('DrawerOpen')} />
  //   ),
  // });

  componentWillMount() {
    this.props.fetchImages()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Featured</Text>
        <ScrollView>
          <PictureList
            images={this.props.images.featured}
            onPicturePress={image => this.props.navigation.navigate('PictureShow', {image})} />
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
    color: Colors.darkGrey
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
