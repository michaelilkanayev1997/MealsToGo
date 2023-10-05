import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 24,
      },
    }}
  >
    <Stack.Screen
      name="Main"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
