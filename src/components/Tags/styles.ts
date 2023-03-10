import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GRAY_500,

    paddingBottom: 100
  },
  header: {
    paddingHorizontal: 32,
    paddingVertical: 16,

    borderBottomColor: THEME.COLORS.GRAY_400,
    borderBottomWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: THEME.COLORS.GRAY_300,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.SIZE.MD,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 32,
    gap: 12,
  }
});