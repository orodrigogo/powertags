import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_500
  },
  content: {
    padding: 32,
    gap: 16,

    backgroundColor: THEME.COLORS.GRAY_600,
  },
  options: {
    flexDirection: 'row',
    gap: 7
  }
});