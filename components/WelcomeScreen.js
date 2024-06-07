import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      style={styles.container}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("../img/littleLemonLogo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={styles.headerText}>Your local Mediterranean bistro</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>View Menu</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Subscribe")}
        >
          <Text style={styles.buttonText}>Subscribe to Newsletter</Text>
        </Pressable>
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
    fontWeight: "400",
    lineHeight: 35,
    color: "#495E57",
  },
  button: {
    backgroundColor: "#495E57",
    padding: 20,
    borderRadius: 15,
    margin: 20,
    width: "50%",
    alignSelf: "center",
    width: "70%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
