import { TextInput, TextInputProps } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={THEME.COLORS.GRAY_300}
      {...rest}
    />
  );
}