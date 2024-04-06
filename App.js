import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList} from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader.js";
import LittleLemonFooter from "./components/LittleLemonFooter.js";
import MenuItems from "./components/MenuItems.js";
export default function App() { 
  return (
    // <View style={styles.container}>
    //   <LittleLemonHeader /> 
    //   <LittleLemonFooter />
    // </View>
    <>
    <View style= {styles.container}>
      <LittleLemonHeader />
      <MenuItems />
      {/* <LittleLemonFooter /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
