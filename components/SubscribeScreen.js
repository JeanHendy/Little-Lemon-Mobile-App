import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    setIsValidEmail(validateEmail(email));
  }, [email]);

  const handleSubscribe = () => {
    if (isValidEmail) {
      Alert.alert("Thanks for subscribing, stay tuned!");
      setEmail(""); // Reset email input after successful subscription
    } else {
      Alert.alert("Please enter a valid email address.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          style={styles.littleLemonLogo}
          source={require("../img/little-lemon-logo-grey.png")}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.description}>
            Subscribe to our newsletter for our latest delicious recipes !
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Type your email"
            value={email}
            onChangeText={setEmail}
            editable={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubscribe}
            disabled={!isValidEmail}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#495E57",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  littleLemonLogo:{
    marginTop: 20,
    width: 200,
    height: 200,
    alignSelf: "center",
    
  }
});

export default SubscribeScreen;
