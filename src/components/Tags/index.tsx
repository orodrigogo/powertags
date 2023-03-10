import { View, Text } from 'react-native';

import { ButtonIcon } from '../ButtonIcon';
import { Tag } from '../Tag';

import { styles } from './styles';

type Props = {
  tags: string[];
}

export function Tags({ tags }: Props) {
  console.log(tags);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {tags.length} tags
        </Text>

        <ButtonIcon
          iconName="content-copy"
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