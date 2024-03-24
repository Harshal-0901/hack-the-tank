import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ModalScreen from "./components/Modal/Modal";

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import OrderPlacingScreen from "./screens/OrderPlacingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import CommunityScreen from "./screens/CommunityScreen";
import ConnectScreen from "./screens/ConnectScreen";
import RestrictedBudget from "./screens/RestrictedBudget";
import PriceModal from "./components/Modal/PriceModal";

import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Provider store={store}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <AntDesign name="home" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <MaterialIcons name="people" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="Connect"
          component={ConnectScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <MaterialIcons name="contact-page" size={24} color="black" />
              );
            },
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PriceModal"
            component={PriceModal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTab"
            component={MyTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RestrictedBudget"
            component={RestrictedBudget}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="OrderPlacing"
            component={OrderPlacingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
