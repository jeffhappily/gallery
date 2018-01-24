import React from 'react';
import { TouchableOpacity, ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const FilterList = ({ filters, onFilterPress, title, activeFilter }) => (
  <View>
    <Text style={[styles.title, styles.small]}>{title}</Text>
    <ScrollView
  		horizontal={true}
  		showsHorizontalScrollIndicator={false}>
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onFilterPress(filter)}>
          <View style={[styles.filterList, filter === activeFilter ? styles.activeFilterList : {}]}>
            <Text style={[styles.filterText, filter === activeFilter ? styles.activeFilterText : {}]}>{filter}</Text>
          </View>
        </TouchableOpacity>
      ))}
  	</ScrollView>
  </View>
);

FilterList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterPress: PropTypes.func,
  title: PropTypes.string,
  activeFilter: PropTypes.string
};

export default FilterList;
