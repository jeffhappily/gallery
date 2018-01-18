import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './styles';

const PictureList = ({ src }) => (
  <Image
    style={styles.pictureCard}
    source={{ uri: src }} />
)

export default PictureList;
