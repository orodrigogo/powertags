import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 42,
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: THEME.COLORS.GRAY_400
  }
});