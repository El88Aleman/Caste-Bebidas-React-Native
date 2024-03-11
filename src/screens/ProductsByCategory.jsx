import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import products from "../utils/data/products.json";
import ProductByCategory from "../components/ProductByCategory";
import Search from "../components/Search";

const ProductsByCategory = ({ route, navigation }) => {
  const { categorySelected } = route.params;
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handlerKeyword = (k) => {
    setKeyword(k);
  };
  useEffect(() => {
    if (categorySelected)
      setProductsFiltered(
        products.filter((product) => product.category === categorySelected)
      );
    if (keyword)
      setProductsFiltered(
        productsFiltered.filter((product) => {
          const productTitleLower = product.title.toLowerCase();
          const keywordLower = keyword.toLowerCase();
          return productTitleLower.includes(keywordLower);
        })
      );
  }, [categorySelected, keyword]);
  return (
    <>
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductByCategory item={item} navigation={navigation} />
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: Dimensions.get("window").height * 0.1, // Ajusta el paddingBottom según la altura del TabNavigator
  },
});
