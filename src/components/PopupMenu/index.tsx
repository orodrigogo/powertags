import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { View, Modal, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const BlurViewAnimated = Animated.createAnimatedComponent(BlurView);

import { ButtonIcon } from "../ButtonIcon";
import { PopupMenuOption } from '../PopupMenuOption';

import { styles } from './styles';

export function PopupMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ButtonIcon
        iconName="more-vert"
        onPress={() => setVisible(true)}
      />

      <Modal
        transparent
        visible={visible}
      >
        <BlurViewAnimated
          style={styles.overlay}
          intensity={4}
          onTouchEnd={() => setVisible(false)}
          entering={FadeIn}
        >
          <View style={styles.popup}>
            <Text style={styles.title}>
              Opções
            </Text>

            <PopupMenuOption
              title="Renomear"
              iconName="edit"
              onPress={() => console.log('teste')}
            />
          </View>
        </BlurViewAnimated>
      </Modal>
    </>
  );
}