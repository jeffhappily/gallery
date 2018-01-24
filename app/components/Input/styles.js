import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  searchbar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.quiteGrey,
    elevation: 1
    // alignSelf: 'stretch'
  },
  input: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.grey
  },
})

export default styles;
