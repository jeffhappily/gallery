import React from 'react';
import { Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import styles from './styles';

const PictureList = ({ images, onPicturePress, title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <ScrollView
  		horizontal={true}
  		showsHorizontalScrollIndicator={false}>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPicturePress(image)}>
          <Image
            style={styles.pictureCard}
            source={{ uri: image.covers.original }} />
        </TouchableOpacity>
      ))}
  	</ScrollView>
  </View>
);

export default PictureList;
