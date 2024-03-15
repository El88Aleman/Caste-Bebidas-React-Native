import { FlatList } from "react-native";
import CardsCategory from "./CardsCategory";
import { useGetCategoriesQuery } from "../app/services/shop";

const { data: categories } = useGetCategoriesQuery();

const Categories = ({ navigation }) => {
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
