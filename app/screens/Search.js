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
      borderBottomWidth: 0,
    },
    headerLeft: (
      <Close onPress={() => navigation.goBack()} />
    ),
  });

  constructor(props){
  	super(props);
  	this.state = {
      time: "All",
      sort: "Featured Date",
      query: ""
    };
  }

  handleSubmit() {
    let { time, sort, query } = this.state;

    const data = {
      q: query,
      time: time,
      sort: sort
    }
    this.props.navigation.navigate('PictureIndex', { query: data });
  }

  render() {
    let field = this.props.navigation.state.params ? this.props.navigation.state.params.field : "";

    return (
      <View>
        <View style={styles.top}>
          <TextInput
            placeholder="Search for images..."
            style={styles.textInput}
            onSubmitEditing={() => this.handleSubmit()}
            onChangeText={query => this.setState({ query })}
            underlineColorAndroid='rgba(0,0,0,0)'
            defaultValue={field} />
        </View>
        <View style={styles.filters}>
          <FilterList
            filters={["All", "Today", "Week", "Month"]}
            title="Time"
            activeFilter={this.state.time}
            onFilterPress={filter => this.setState({time: filter})} />
          <FilterList
            filters={["Featured Date", "Appreciations", "Views", "Comments", "Published Date"]}
            title="Sort By"
            activeFilter={this.state.sort}
            onFilterPress={filter => this.setState({sort: filter})} />
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
