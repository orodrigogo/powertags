import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },
  primary_size: {
    height: 42,
    width: 42,
  },
  secondary_size: {
    height: 64,
    width: 64,
  },
  active: {
    backgroundColor: THEME.COLORS.PRIMARY
  },
  inative: {
    backgroundColor: THEME.COLORS.GRAY_400
  }
});