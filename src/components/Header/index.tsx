import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={THEME.COLORS.GRAY_300}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}