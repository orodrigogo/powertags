import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tags } from "../../components/Tags";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";

const { CHAT_GPD_API_KEY } = process.env;

export function Details() {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [collectionName, setCollectionName] = useState('Tags');
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);

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

  function handleNameCollectionEdit() {
    setIsModalFormVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={collectionName}>
        <ButtonIcon
          iconName="edit"
          onPress={() => setIsModalFormVisible(true)}
        />
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

          <View style={styles.options}>
            <Button
              title="Gerar tags"
              onPress={handleFetchTags}
              isLoading={isLoading}
            />

            <ButtonIcon
              iconName="mic"
              size="secondary_size"
            />
          </View>
        </View>

        <Tags
          tags={tags}
          setTags={setTags}
        />
      </ScrollView>

      <Modal
        visible={isModalFormVisible}
        onClose={() => setIsModalFormVisible(false)}
        title="Editar nome"
      >
        <>
          <Input
            placeholder="Nome da coleção"
            onChangeText={setCollectionName}
            value={collectionName}
          />

          <Button
            title="Salvar"
            onPress={handleNameCollectionEdit}
          />
        </>
      </Modal>
    </SafeAreaView >
  );
}