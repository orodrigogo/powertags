import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";

type Props = {
  title: string;
  children: ReactNode;
}

export function Header({ title, children }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={THEME.COLORS.GRAY_300}
        />
      </TouchableOpacity>

      <Text
        style={styles.title}
        numberOfLines={2}
      >
        {title}
      </Text>

      {children}
    </View>
  );
}