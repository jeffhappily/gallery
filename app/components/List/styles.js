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
  verticalPictureCard: {
    borderColor: Colors.kindOfGrey,
    borderWidth: 1,
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
  small: {
    fontSize: 20
  },
  fieldText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white
  },
  filterList: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.quiteGrey,
    margin: 5
  },
  activeFilterList: {
    backgroundColor: Colors.quiteGrey
  },
  activeFilterText: {
    color: Colors.white
  }
});

export default styles;
