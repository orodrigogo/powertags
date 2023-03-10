import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { HoldItem } from 'react-native-hold-menu';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

import { styles } from './styles';

type Props = {
  title: string;
}
export function Tag({ title }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn}
      exiting={FadeOut}
      layout={Layout}
    >
      <HoldItem
        items={
          [
            {
              text: title,
              isTitle: true
            },
            {
              text: 'Apagar tag',
              isDestructive: true,
              onPress: () => { },
              icon: 'trash'
            },
          ]
        }
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </HoldItem>
    </Animated.View>
  );
}