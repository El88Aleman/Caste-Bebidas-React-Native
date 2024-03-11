import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ProductByCategory = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: item.thumbnail }}
        resizeMode="cover"
      />
      <View style={styles.containerText}>
        <Text style={[styles.text, { color: "white" }]}>{item.title}</Text>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() =>
            navigation.navigate("ProductDetail", { productId: item.id })
          }
        >
          <Text style={{ fontSize: 16, fontFamily: "Roboto" }}>
            VER DETALLE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AB0000",
    width: "90%",
    height: 150,
    marginHorizontal: "5%",
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: "Poppins",
    width: "100%",
    textAlign: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  containerButton: {
    padding: 10,
    backgroundColor: "#F9C400",
    borderRadius: 5,
    margin: 10,
    alignSelf: "center",
  },
});
