import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import * as FileSystem from 'expo-file-system';

import { Tags } from "../../components/Tags";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";
import { Toast } from "../../components/Toast";

const CHAT_GPD_API_KEY = process.env.CHAT_GPD_API_KEY;
const GCP_SPEECH_TO_TEXT_KEY = process.env.GCP_SPEECH_TO_TEXT_KEY;

const RECORDING_OPTIONS = {
  android: {
    extension: '.m4a',
    outputFormat: Audio.AndroidOutputFormat.MPEG_4,
    audioEncoder: Audio.AndroidAudioEncoder.AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    extension: '.wav',
    audioQuality: Audio.IOSAudioQuality.HIGH,
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {

  }
};

export function Details() {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConvertingSpeechToText, setIsConvertingSpeechToText] = useState(false);
  const [description, setDescription] = useState('');
  const [collectionName, setCollectionName] = useState('Tags');
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [recording, setRecording] = useState<Audio.Recording | null>(null);

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

  async function handleRecordingStart() {
    const { granted } = await Audio.getPermissionsAsync();

    if (granted) {
      try {
        setToastMessage('Gravando...');

        const { recording } = await Audio.Recording.createAsync(RECORDING_OPTIONS);
        setRecording(recording);

      } catch (error) {
        console.log(error);
      }
    }
  }

  async function handleRecordingStop() {
    try {
      setToastMessage(null);

      await recording?.stopAndUnloadAsync();
      const recordingFileUri = recording?.getURI();

      if (recordingFileUri) {
        const base64File = await FileSystem.readAsStringAsync(recordingFileUri, { encoding: FileSystem?.EncodingType?.Base64 });
        await FileSystem.deleteAsync(recordingFileUri);

        setRecording(null);
        getTranscription(base64File);
      } else {
        Alert.alert("Audio", "Não foi possível obter a gravação.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getTranscription(base64File: string) {
    setIsConvertingSpeechToText(true);

    fetch(`https://speech.googleapis.com/v1/speech:recognize?key=${GCP_SPEECH_TO_TEXT_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        config: {
          languageCode: "pt-BR",
          encoding: "LINEAR16",
          sampleRateHertz: 41000,
        },
        audio: {
          content: base64File
        }
      })
    })
      .then(response => response.json())
      .then((data) => {
        setDescription(data.results[0].alternatives[0].transcript);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsConvertingSpeechToText(false))
  }

  useEffect(() => {
    Audio
      .requestPermissionsAsync()
      .then((granted) => {
        if (granted) {
          Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: InterruptionModeIOS.DoNotMix,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
            playThroughEarpieceAndroid: true,
          });
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {toastMessage && <Toast message={toastMessage} />}

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
              onPressIn={handleRecordingStart}
              onPressOut={handleRecordingStop}
              isLoading={isConvertingSpeechToText}
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