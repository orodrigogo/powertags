import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '../../theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ iconName, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialIcons
        name={iconName}
        size={24}
        color={THEME.COLORS.GRAY_300}
      />
    </TouchableOpacity>
  );
}