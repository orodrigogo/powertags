import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}
export function Tag({ title, ...rest }: Props) {
  return (
    <TouchableOpacityAnimated
      style={styles.container}
      entering={FadeIn}
      exiting={FadeOut}
      layout={Layout}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacityAnimated>
  );
}