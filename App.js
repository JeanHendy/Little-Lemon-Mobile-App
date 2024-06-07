import React from "react";
import { View, StyleSheet } from "react-native";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import SubscribeScreen from "./components/SubscribeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size }) => {
          let iconName;
          if (route.name === "Welcome") {
            iconName = "home";
          } else if (route.name === "Login") {
            iconName = "enter";
          } else if (route.name === "Menu") {
            iconName = "menu";
          }
          else if (route.name === "Feedback") {
            iconName = "chatbox";
          }
          return <Ionicons name={iconName} size={size} />;
        },
      })}
      initialRouteName="Login"
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Menu" component={MenuItems} />
      <Tab.Screen name="Feedback" component={FeedbackForm} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Subscribe" component={SubscribeScreen} />
        </Stack.Navigator>
      </View>
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
