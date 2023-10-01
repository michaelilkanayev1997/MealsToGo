import { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { I18nManager } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhg1XWl7mUOSu4NNWNrWRXvg_CAZecw5Q",
  authDomain: "mealstogo-d4df6.firebaseapp.com",
  projectId: "mealstogo-d4df6",
  storageBucket: "mealstogo-d4df6.appspot.com",
  messagingSenderId: "643444931887",
  appId: "1:643444931887:web:51f14ba37154675b7835da",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Force LTR text direction
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
