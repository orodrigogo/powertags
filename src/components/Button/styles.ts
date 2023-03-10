import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    borderRadius: 7,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.COLORS.PRIMARY
  },
  title: {
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.SIZE.MD,
  },
  disabled: {
    opacity: 0.5
  }
});