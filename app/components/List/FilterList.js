import React from 'react';
import { Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
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

export default FilterList;
