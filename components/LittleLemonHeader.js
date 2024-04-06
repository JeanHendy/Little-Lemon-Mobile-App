import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style = {styles.header}>
        <Text style={styles.text}>
            <Text style={styles.bold}>Little Lemon</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create( {
    header: {
        flex:0.15,
        backgroundColor: "#F4CE14",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        padding:60,
        fontSize: 30,
        color: 'black',
    },
    bold: {
        fontWeight: 'bold',
    }
})