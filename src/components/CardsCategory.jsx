import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import ShadowPrimary from "./wrappers/ShadowPrimary";

const CardsCategory = ({ item, navigation }) => {
  return (
    <Pressable
      style={{ backgroundColor: "white" }}
      onPress={() =>
        navigation.navigate("ProductsByCategory", { categorySelected: item })
      }
    >
      <ScrollView>
        <ShadowPrimary>
          <Text style={[styles.categories, { color: "white" }]}>{item}</Text>
        </ShadowPrimary>
      </ScrollView>
    </Pressable>
  );
};

export default CardsCategory;

const styles = StyleSheet.create({
  categories: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#AB0000",
    fontFamily: "Roboto",
  },
});
