import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  Pressable,
} from "react-native";

const Header = ({ navigation }) => {
  return (
    <>
      <StatusBar />
      <Pressable onPress={() => navigation.navigate("Home")}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: "https://res.cloudinary.com/dfcnmxndf/image/upload/v1707155357/Caste%20Bebidas/xme6decqhdsbponshkag.png",
            }}
          />
          <Text style={styles.text}>Caste Bebidas</Text>
        </View>
      </Pressable>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginVertical: 40,
    resizeMode: "contain",
  },
  text: {
    fontFamily: "Yellowtail",
    fontSize: 40,
  },
});
