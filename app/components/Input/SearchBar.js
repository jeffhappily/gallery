import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({ onClick, placeholder }) => (
  <TouchableWithoutFeedback onPress={onClick}>
    <View
      style={[styles.searchbar, styles.rowInput]}
      onClick={onClick}>
      <Icon style={styles.searchIcon} name="search" />
      <Text style={styles.input}>
        {placeholder}
      </Text>
    </View>
  </TouchableWithoutFeedback>
)

SearchBar.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string
}
export default SearchBar;
