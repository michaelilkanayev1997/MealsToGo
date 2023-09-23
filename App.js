import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
