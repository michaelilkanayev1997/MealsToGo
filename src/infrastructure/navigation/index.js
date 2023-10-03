import { Text } from "react-native";
import { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalLoading } from "../../components/animations/globalLoading";

export const Navigation = () => {
  const { isAuthenticated, isFirstLoading } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isFirstLoading ? (
        <GlobalLoading />
      ) : isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
