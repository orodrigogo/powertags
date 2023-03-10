import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

import { styles } from "./styles";

export function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="React Native" />

      <View style={styles.content}>
        <TextArea
          placeholder="Sobre qual assunto você deseja gerar tags?"
        />

        <Button title="Gerar novas tags" />
      </View>

      <Tags />
    </SafeAreaView>
  );
}