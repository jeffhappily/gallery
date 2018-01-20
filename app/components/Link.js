import React from 'react';
import { Linking, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const handleClick = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      alert("Don't know how to open URI: " + url);
    }
  });
};

const Link = ({ url, style, children }) => (
  <TouchableOpacity onPress={() => handleClick(url)}>
    <Text style={[style, styles.link]}>{children}</Text>
  </TouchableOpacity>
)

Link.propTypes = {
  url: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  link: {
    color: Colors.kindaMint
  }
});

export default Link;
