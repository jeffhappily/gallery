import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Search = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon size={28} name="search" />
    </TouchableOpacity>
  </View>
);

Search.propTypes = {
  onPress: PropTypes.func,
};



export default Search;
