import { useState } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '../../theme';
import { styles } from './styles';

type Props = PressableProps & {
  size?: 'primary_size' | 'secondary_size';
  iconName: keyof typeof MaterialIcons.glyphMap;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

export function ButtonIcon({
  size = "primary_size",
  iconName,
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
      {...rest}
    >
      <MaterialIcons
        name={iconName}
        size={size === 'primary_size' ? 24 : 32}
        color={THEME.COLORS.GRAY_300}
      />
    </Pressable>
  );
}