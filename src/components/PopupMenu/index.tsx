import { useState } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Modal } from '../Modal';
import { ButtonIcon } from "../ButtonIcon";
import { PopupMenuOption } from '../PopupMenuOption';

import { styles } from './styles';

type PopupMenuOptionProps = {
  title: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  action: () => void;
}

type Props = {
  options: PopupMenuOptionProps[];
}

export function PopupMenu({ options }: Props) {
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
        onClose={() => setVisible(false)}
      >
        <View style={styles.popup}>
          <Text style={styles.title}>
            Opções
          </Text>

          {
            options.map((option, index) => (
              <PopupMenuOption
                current={index}
                total={options.length}
                title={option.title}
                iconName={option.iconName}
                onPress={option.action}
              />
            ))
          }
        </View>
      </Modal>
    </>
  );
}