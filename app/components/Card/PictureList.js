import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const PictureList = ({ src }) => (
  <TouchableOpacity>
    <Image
      style={styles.pictureCard}
      source={{ uri: src }} />
  </TouchableOpacity>
)

export default PictureList;
