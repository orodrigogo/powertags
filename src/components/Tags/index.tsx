import { View, Text, Alert } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';
import * as Clipboard from 'expo-clipboard';

import { ButtonIcon } from '../ButtonIcon';
import { Tag } from '../Tag';

import { styles } from './styles';

type Props = {
  tags: string[];
  setTags: (tags: React.SetStateAction<string[]>) => void;
}

export function Tags({ tags, setTags }: Props) {

  function handleCopyToClipboard() {
    const tagsFormatted = tags.toString().replaceAll(",", " ");

    Clipboard
      .setStringAsync(tagsFormatted)
      .then(() => Alert.alert('Copiado!'))
      .catch(() => Alert.alert('Não foi possível copiar!'));
  }

  function handleRemove(tag: string) {
    Alert.alert(
      'Remover Tag',
      `Remover a tag "${tag}"?`,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => setTags((prevState) => prevState.filter((item) => item !== tag))
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {tags.length} tags
        </Text>

        <ButtonIcon
          iconName="content-copy"
          onPress={handleCopyToClipboard}
        />
      </View>

      <Animated.View
        style={styles.content}
        layout={Layout}
      >
        {
          tags.map((tag) => (
            <Tag
              key={tag}
              title={tag}
              onPress={() => handleRemove(tag)}
            />
          ))
        }
      </Animated.View>
    </View>
  );
}