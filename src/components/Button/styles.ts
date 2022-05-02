import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 41,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    textTransform: 'uppercase'
  },

  icon:{
    marginRight: 12
  }
});