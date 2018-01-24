import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Colors from '../../constants/Colors';

const Close = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon size={25} name="close" color={Colors.darkGrey} />
    </TouchableOpacity>
  </View>
);

Close.propTypes = {
  onPress: PropTypes.func,
};



export default Close;
