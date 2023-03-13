import { Text } from 'react-native';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';

import { styles } from './styles';

type Props = {
  message: string;
}

export function Toast({ message }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInUp.duration(700)}
      exiting={SlideOutUp.duration(700)}
    >
      <Text style={styles.text}>
        {message}
      </Text>
    </Animated.View>
  );
}