import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '../../theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  size?: 'primary_size' | 'secondary_size';
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ size = "primary_size", iconName, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, styles[size]]}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialIcons
        name={iconName}
        size={size === 'primary_size' ? 24 : 32}
        color={THEME.COLORS.GRAY_300}
      />
    </TouchableOpacity>
  );
}