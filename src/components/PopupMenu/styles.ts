import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  popup: {
    minWidth: 150,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 12,

    position: 'absolute',
    top: 140,
    right: 32,
  },
  title: {
    color: THEME.COLORS.PRIMARY,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.SIZE.SM,

    textAlign: "center",
    marginBottom: 16
  }
});