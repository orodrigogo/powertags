import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { initialWindowMetrics } from 'react-native-safe-area-context';

console.log(initialWindowMetrics)
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: (initialWindowMetrics?.insets.top || 0) + 44,
    backgroundColor: THEME.COLORS.PRIMARY,
    padding: 16,
    borderRadius: 4,
  },
  text: {
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONTS.SIZE.SM,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    textAlign: 'center',
  }
});