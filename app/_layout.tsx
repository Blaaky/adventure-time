import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Twój Profil",
            title: "TWÓJ PROFIL",
          }}
        />
        <Drawer.Screen
          name="search"
          options={{
            drawerLabel: "Szukaj",
            title: "SZUKAJ",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Ustawienia",
            title: "USTAWIENIA",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
