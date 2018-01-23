import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';
import { Close } from '../components/Icon';
import { FilterList } from '../components/List'

class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      elevation: 0,
      backgroundColor: 'transparent',
    },
    headerLeft: (
      <Close onPress={() => navigation.goBack()} />
    ),
  });

  constructor(props){
  	super(props);
  	this.state = {
      timeFilter: "All",
      sortFilter: "Featured Date"
    };
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <View>
        <View style={styles.top}>
          <TextInput
            placeholder="Search for images..."
            style={styles.textInput}
            onSubmitEditing={e => this.handleSubmit(e)}
            underlineColorAndroid='rgba(0,0,0,0)' />
        </View>
        <View style={styles.filters}>
          <FilterList
            filters={["All", "Today", "Week", "Month"]}
            title="Time"
            activeFilter={this.state.timeFilter}
            onFilterPress={filter => this.setState({timeFilter: filter})} />
          <FilterList
            filters={["Featured Date", "Appreciations", "Views", "Comments", "Published Date"]}
            title="Sort By"
            activeFilter={this.state.sortFilter}
            onFilterPress={filter => this.setState({sortFilter: filter})} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.quiteGrey,
    paddingBottom: 30
  },
  filters: {
    padding: 15
  }
});

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(Search);
