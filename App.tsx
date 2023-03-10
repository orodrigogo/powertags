import { StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';
import { HoldMenuProvider } from "react-native-hold-menu";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";

import { Details } from "./src/screens/Details";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    NotoSans_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <HoldMenuProvider theme="dark" iconComponent={Feather}>
          <Details />
        </HoldMenuProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}