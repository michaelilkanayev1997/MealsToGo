import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const RestaurantStack = createStackNavigator();

const RestaurantDetail = () => (
  <SafeArea>
    <Text>Restaurant Detail</Text>
  </SafeArea>
);

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsHome"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
