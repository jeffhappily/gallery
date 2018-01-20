import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  rowInput: {
    flexDirection: "row",
    alignItems: 'center',
  },
  searchbar: {
    padding: 8,
    backgroundColor: Colors.white,
    borderRadius: 4
  },
  searchIcon: {
    padding: 10,
    fontSize: 14,
    color: Colors.quiteGrey
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.quiteGrey
  },
})

export default styles
