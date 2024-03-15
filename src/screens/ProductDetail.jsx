import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import CounterProductDetail from "../components/CounterProductDetail";
import { useGetProductQuery } from "../app/services/shop";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const { data: product, isLoading } = useGetProductQuery(productId);

  if (isLoading)
    return (
      <View>
        <Text>cargando...</Text>
      </View>
    );
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{ uri: product?.images ? product.images[0] : null }}
        />
        <View style={styles.containerText}>
          <Text style={[styles.text, { color: "white" }]}>{product.title}</Text>
          <Text style={[styles.text, { color: "white" }]}>
            {product?.description}
          </Text>
          <Text style={[styles.text, { color: "white" }]}>
            ${product?.price}
          </Text>
          <CounterProductDetail initialValue={1} product={product} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  container: {
    backgroundColor: "#AB0000",
    width: 250,
    marginHorizontal: "18%",
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  containerText: {
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%", // Asegura que el texto ocupe todo el ancho
    alignItems: "center", // Centra horizontalmente
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins",
    color: "white",
    textAlign: "center", // Centra el texto horizontalmente
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 5,
    marginBottom: 10, // Espacio entre la imagen y el texto
  },
});
