import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, Pressable, PressableProps } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';

type Props = PressableProps & {
  isLoading?: boolean;
  size?: 'primary_size' | 'secondary_size';
  iconName: keyof typeof MaterialIcons.glyphMap;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

export function ButtonIcon({
  iconName,
  size = "primary_size",
  isLoading = false,
  onPressIn = () => { },
  onPressOut = () => { },
  ...rest
}: Props) {
  const [isActive, setIsActive] = useState(false);

  function handleOnPressIn() {
    setIsActive(true);
    onPressIn();
  }

  function handleOnPressOut() {
    setIsActive(false);
    onPressOut();
  }

  return (
    <Pressable
      style={[
        styles.container,
        styles[size],
        isActive ? styles.active : styles.inative
      ]}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading
          ?
          <ActivityIndicator
            color={THEME.COLORS.GRAY_200}
            size="small"
          />
          :
          <MaterialIcons
            name={iconName}
            size={size === 'primary_size' ? 24 : 32}
            color={THEME.COLORS.GRAY_300}
          />
      }
    </Pressable>
  );
}