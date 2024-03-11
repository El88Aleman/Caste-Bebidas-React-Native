import { FlatList } from "react-native";
import categories from "../utils/data/category.json";
import CardsCategory from "./CardsCategory";

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
