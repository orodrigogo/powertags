import { View, Text } from 'react-native';

import { ButtonIcon } from '../ButtonIcon';
import { Tag } from '../Tag';

import { styles } from './styles';

export function Tags() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          1 tags
        </Text>

        <ButtonIcon
          iconName="content-copy"
        />
      </View>

      <View style={styles.content}>
        <Tag title="mobile" />
        <Tag title="mobile" />
        <Tag title="mobile" />
        <Tag title="mobile" />
        <Tag title="mobile" />
      </View>
    </View>
  );
}