import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  title: {
    flex: 1,
    color: THEME.COLORS.GRAY_900,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.SIZE.SM,
    marginLeft: 7
  },
  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_200
  }
});