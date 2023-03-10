import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 128,
    borderRadius: 7,
    padding: 16,

    backgroundColor: THEME.COLORS.GRAY_500,
  },
  input: {
    flex: 1,
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.SIZE.MD,

    textAlignVertical: 'top',
  },
  clear: {
    height: 22,
    width: 22,
    borderRadius: 11,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 10,
    right: 10,

    backgroundColor: THEME.COLORS.GRAY_400,
  },
  disabled: {
    opacity: 0.5
  }
});