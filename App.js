import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm.js";
import LoginScreen from "./components/LoginScreen.js";
import WelcomeScreen from "./components/WelcomeScreen.js";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
      >
        <Stack.Screen
          options={{ title: "Home" }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen name="Menu" component={MenuItems} />
        <Stack.Screen name="Feedback" component={FeedbackForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
