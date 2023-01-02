import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { PTMono_400Regular } from "@expo-google-fonts/pt-mono";
import { Rubik_300Light, Rubik_400Regular, Rubik_700Bold } from "@expo-google-fonts/rubik";

import StartScreen from "./app/screens/StartScreen";
import AddPinTunnelScreen from "./app/screens/AddPinTunnelScreen";
import MainMenuScreen from "./app/screens/MainMenuScreen";
import AddSensorScreen from "./app/screens/AddSensorScreen";
import ConnectSensorScreen from "./app/screens/ConnectSensorScreen";
import ViewSensorScreen from "./app/screens/ViewSensorScreen";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    PTMono_400Regular,
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={{ colors: { background: "#680f94" } }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, presentation: 'transparentModal' }} >
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="AddPinTunnel" component={AddPinTunnelScreen} />
        <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
        <Stack.Screen name="AddSensorScreen" component={AddSensorScreen} />
        <Stack.Screen name="ConnectSensorScreen" component={ConnectSensorScreen} />
        <Stack.Screen name="ViewSensorScreen" component={ViewSensorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
