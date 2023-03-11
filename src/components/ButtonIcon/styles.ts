import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: THEME.COLORS.GRAY_400
  },
  primary_size: {
    height: 42,
    width: 42,
  },
  secondary_size: {
    height: 64,
    width: 64,
  }
});