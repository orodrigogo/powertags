import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, NotoSans_400Regular, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';

export default function App() {
  const [fontsLoaded] = useFonts({ NotoSans_400Regular, NotoSans_700Bold });

  if (!fontsLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
