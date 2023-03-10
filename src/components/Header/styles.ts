import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    padding: 32,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: THEME.COLORS.GRAY_500
  },
  title: {
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.BOLD,
    fontSize: THEME.FONTS.SIZE.MD,
    color: THEME.COLORS.GRAY_200,

    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  }
});