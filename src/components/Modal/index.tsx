import { ReactNode } from 'react';
import { BlurView } from 'expo-blur';
import { Modal as ReactNativeModal, ModalProps } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const BlurViewAnimated = Animated.createAnimatedComponent(BlurView);

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose, ...rest }: Props) {
  return (
    <ReactNativeModal
      transparent
      {...rest}
    >
      <BlurViewAnimated
        style={styles.overlay}
        intensity={4}
        onTouchEnd={onClose}
        entering={FadeIn}
      >
        {children}
      </BlurViewAnimated>
    </ReactNativeModal>
  );
}