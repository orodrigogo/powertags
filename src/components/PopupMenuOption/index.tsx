import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

type Props = TouchableOpacityProps & {
  current: number;
  total: number;
  title: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export function PopupMenuOption({ current, total, title, iconName, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        current < (total - 1) && styles.divisor
      ]}
      {...rest}
    >
      <MaterialIcons
        name={iconName}
        size={20}
        color={THEME.COLORS.GRAY_900}
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}