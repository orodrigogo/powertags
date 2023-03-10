import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Tags() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="React Native" />

    </SafeAreaView>
  );
}