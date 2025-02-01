import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ubuntu_500Medium } from "@expo-google-fonts/ubuntu";
import { useEffect } from "react";


SplashScreen.preventAutoHideAsync();

export default function Index() {

  const [loaded, error] = useFonts({
    Ubuntu_500Medium
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: 'Ubuntu_500Medium' }}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
