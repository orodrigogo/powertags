import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: THEME.COLORS.OVERLAY,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: THEME.COLORS.GRAY_900,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.SIZE.XL,

    textAlign: "center",
    marginBottom: 16
  },
  content: {
    margin: 32,
    padding: 32,
    backgroundColor: THEME.COLORS.GRAY_200,
    borderRadius: 12,
    gap: 12,
  }
});