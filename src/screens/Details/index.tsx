import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { PopupMenu } from "../../components/PopupMenu";

import { styles } from "./styles";

const { CHAT_GPD_API_KEY } = process.env;

export function Details() {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');

  function handleFetchTags() {
    setIsLoading(true);
    const prompt = `
      Generate keywords in Portuguese for a post about ${description.trim()}.       
      Replace the spaces in each word with the character "_".
      Return each item separated by a comma, in lowercase, and without a line break.
    `;

    fetch("https://api.openai.com/v1/engines/text-davinci-003-playground/completions", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHAT_GPD_API_KEY}`
      },
      body: JSON.stringify({
        prompt,
        temperature: 0.22,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    })
      .then(response => response.json())
      .then((data) => saveTags(data.choices[0].text))
      .catch(() => Alert.alert('Erro', 'Não foi possível buscar as tags.'))
      .finally(() => setIsLoading(false));
  }

  function saveTags(data: string) {
    const tagsFormatted = data
      .trim()
      .split(',')
      .map((tag) => `#${tag}`);

    setTags(tagsFormatted);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tags">
        <PopupMenu />
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TextArea
            placeholder="Sobre qual assunto você deseja gerar tags?"
            onChangeText={setDescription}
            value={description}
            onClear={() => setDescription("")}
            autoFocus={true}
            editable={!isLoading}
          />

          <Button
            title="Gerar tags"
            onPress={handleFetchTags}
            isLoading={isLoading}
          />
        </View>

        <Tags
          tags={tags}
          setTags={setTags}
        />
      </ScrollView>
    </SafeAreaView >
  );
}