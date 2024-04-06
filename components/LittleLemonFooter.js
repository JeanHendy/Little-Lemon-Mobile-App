import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.footer}>
        <Text style= {styles.text}>
            © All rights reserved by Little Lemon, 2022
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#EE9972",
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
});