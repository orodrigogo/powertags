import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 128,
    borderRadius: 7,
    padding: 16,

    textAlignVertical: 'top',

    backgroundColor: THEME.COLORS.GRAY_500,
    color: THEME.COLORS.GRAY_200,
  }
});