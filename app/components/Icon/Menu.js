import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Menu = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon size={25} name="bars" />
    </TouchableOpacity>
  </View>
);

Menu.propTypes = {
  onPress: PropTypes.func,
};



export default Menu;
