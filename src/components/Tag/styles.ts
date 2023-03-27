import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_600,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 5,
  },
  title: {
    color: THEME.COLORS.GRAY_300,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.SIZE.SM,
  }
});