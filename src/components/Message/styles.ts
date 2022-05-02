import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36
  },

  message: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },

  username: {
    fontSize: 15,
    marginLeft: 16,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR
  },
});