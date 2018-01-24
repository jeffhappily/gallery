import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({ source }) => (
  <Image
    source={{ uri: source }}
    style={styles.avatar}
    />
);

Avatar.propTypes = {
  source: PropTypes.string
};

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
    margin: 15
  },
  smallavatar: {
  	height: 75,
  	width: 75,
  	borderRadius: 45
  }
});


export default Avatar;
