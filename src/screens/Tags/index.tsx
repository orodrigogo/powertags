import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea";

import { styles } from "./styles";

export function Tags() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="React Native" />

      <View style={styles.content}>
        <TextArea
          placeholder="Sobre qual assunto você deseja gerar tags?"
        />
      </View>

    </SafeAreaView>
  );
}