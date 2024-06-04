import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
} from "react-native";

const WelcomeScreen = () => {
  const colorScheme = useColorScheme();
  console.log("Current color scheme:", colorScheme); // Debugging line to check color scheme

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#F8F8FF" : "#333333" },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("../img/littleLemonLogo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={styles.headerText}>
          Your local Mediterranean bistro
        </Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  headerWrapper: {
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  subContainer: {
    flex: 0.7,
    padding: 20,
  },
  regularText: {
    fontSize: 18,
    textAlign: "center",
    margin: 20,
    fontWeight: "200",
    lineHeight: 35,
  },
});

export default WelcomeScreen;
