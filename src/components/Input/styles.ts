import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    borderRadius: 7,
    padding: 16,

    backgroundColor: THEME.COLORS.GRAY_500,

    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.SIZE.MD
  }
});