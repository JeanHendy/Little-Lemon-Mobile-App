import { StyleSheet, Text, View } from "react-native";

const LittleLemonWelcome = () => {
    return (
        <View style={styles.Welcome}>
            <Text>
                Welcome to Little Lemon
            </Text>
        </View>
    );
};

export default LittleLemonWelcome;

const styles = StyleSheet.create({
    Welcome:{
        marginTop:40,
        marginLeft:40,
    }
})