import { View, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { ButtonIcon } from '../ButtonIcon';
import { Tag } from '../Tag';

import { styles } from './styles';

type Props = {
  tags: string[];
}

export function Tags({ tags }: Props) {

  async function handleCopyToClipboard() {
    const tagsFormatted = tags.toString().replaceAll(",", " ");

    await Clipboard.setStringAsync(tagsFormatted);
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

      <View style={styles.content}>
        {
          tags.map((title) => (
            <Tag
              key={title}
              title={title}
            />
          ))
        }
      </View>
    </View>
  );
}