import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

import { styles } from "./styles";

export function Details() {
  const [description, setDescription] = useState('');

  function handleGenerateNewTags() {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="React Native" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TextArea
            placeholder="Sobre qual assunto você deseja gerar tags?"
            onChangeText={setDescription}
            value={description}
            onClear={() => setDescription('')}
            autoFocus={true}
          />

          <Button
            title="Gerar novas tags"
            onPress={handleGenerateNewTags}
          />
        </View>

        <Tags />
      </ScrollView>
    </SafeAreaView>
  );
}