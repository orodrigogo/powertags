import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

import { styles } from "./styles";
import { useState } from "react";

export function Details() {
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title="React Native" />

      <View style={styles.content}>
        <TextArea
          placeholder="Sobre qual assunto você deseja gerar tags?"
          onChangeText={setDescription}
          value={description}
          onClear={() => setDescription('')}
        />

        <Button title="Gerar novas tags" />
      </View>

      <Tags />
    </SafeAreaView>
  );
}