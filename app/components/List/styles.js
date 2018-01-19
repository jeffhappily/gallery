import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  pictureCard: {
    alignSelf: 'stretch',
    height: 150,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    borderWidth: 0.5,
    borderColor: Colors.grey,
  }
});

export default styles;
