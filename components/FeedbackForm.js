import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100} 
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={"First Name"}
          clearButtonMode="always"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={"Last Name"}
          clearButtonMode="always"
        />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder={"Phone Number"}
          keyboardType={"phone-pad"}
          clearButtonMode="always"
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
          placeholder={"Please leave feedback"}
          multiline={true}
          maxLength={250}
          clearButtonMode="always"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    justifyContent: "center",
    paddingVertical: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
  },
  messageInput: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
    fontWeight: "600",
  },
});

export default FeedbackForm;
