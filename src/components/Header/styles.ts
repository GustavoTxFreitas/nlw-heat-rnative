import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },

  logoutButton: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  logoutText: {
    fontSize: 15,
    marginRight: 20,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR
  }
});