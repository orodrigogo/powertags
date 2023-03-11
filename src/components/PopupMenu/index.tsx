import { useState } from 'react';
import { View, Modal, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

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
        <SafeAreaView
          style={{ flex: 1 }}
          onTouchStart={() => setVisible(false)}
        >
          <View style={styles.popup}>
            <Text style={styles.title}>
              Opções
            </Text>

            <PopupMenuOption
              title="Renomear"
              iconName="edit"
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}