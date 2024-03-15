import { FlatList } from "react-native";
import CardsCategory from "./CardsCategory";
import { useGetCategoriesQuery } from "../app/services/shop";

const Categories = ({ navigation }) => {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CardsCategory item={item} navigation={navigation} />
      )}
    />
  );
};

export default Categories;
