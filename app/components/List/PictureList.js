import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const PictureList = ({ images, onPicturePress }) => (
  <View>
    {images.map((image, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => onPicturePress(image)}>
        <Image
          style={styles.pictureCard}
          source={{ uri: image.covers.original }} />
      </TouchableOpacity>
    ))}
  </View>
)

export default PictureList;
