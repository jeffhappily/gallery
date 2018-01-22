import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  pictureCard: {
    height: 200,
    width: 140,
    borderRadius: 4,
    margin: 8,
    flex: 1,
  },
  fieldCard: {
    height: 200,
    width: 140,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    color: Colors.darkGrey
  },
  fieldText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white
  }
});

export default styles;
