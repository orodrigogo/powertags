import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

type Props = TouchableOpacityProps & {
  title: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export function PopupMenuOption({ title, iconName }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
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