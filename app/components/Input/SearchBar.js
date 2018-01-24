import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({ onClick, placeholder }) => (
  <TouchableWithoutFeedback onPress={onClick}>
    <View
      style={styles.searchbar}
      onClick={onClick}>
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

export default SearchBar
