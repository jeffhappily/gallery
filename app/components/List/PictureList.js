import React from 'react';
import { Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import styles from './styles';
import FitImage from '../FitImage';
import { selectImage } from '../../helpers/images';

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
            source={{ uri: selectImage(image.covers) }} />
        </TouchableOpacity>
      ))}
  	</ScrollView>
  </View>
);

PictureList.Vertical = ({ images, onPicturePress, title }) => (
  <View>
    {images.map((image, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => onPicturePress(image)}>
        <FitImage
          style={styles.verticalPictureCard}
          source={selectImage(image.covers)} />
      </TouchableOpacity>
    ))}
	</View>
)

export default PictureList;
