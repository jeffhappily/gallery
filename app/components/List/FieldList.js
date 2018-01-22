import React from 'react';
import { Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import styles from './styles';

const randomColorGenerator = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const FieldList = ({ fields, onFieldPress, title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <ScrollView
  		horizontal={true}
  		showsHorizontalScrollIndicator={false}>
      {fields.map((field, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onFieldPress(field)}>
          <View style={[{backgroundColor: randomColorGenerator()}, styles.fieldCard]}>
            <Text style={styles.fieldText}>{field}</Text>
          </View>
        </TouchableOpacity>
      ))}
  	</ScrollView>
  </View>
);

export default FieldList;
