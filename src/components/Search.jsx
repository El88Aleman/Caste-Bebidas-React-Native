import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Search = ({ handlerKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handlerInput = (t) => setInput(t);

  const search = () => {
    const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (expression.test(input)) {
      setError("Caracteres no validos");
      return;
    }
    setError("");
    handlerKeyword(input);
    Keyboard.dismiss();
  };

  const resetSearch = () => {
    handlerKeyword("");
    handlerInput("");
    setError("");
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Buscar"
          value={input}
          onChangeText={handlerInput}
          style={[styles.input, { backgroundColor: "black" }]}
        />
        <Pressable style={styles.icons} onPress={search}>
          <FontAwesome name="search" size={26} color="black" />
        </Pressable>
        <Pressable style={styles.icons} onPress={resetSearch}>
          <FontAwesome name="close" size={30} color="black" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  input: {
    color: "white",
    flex: 1,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    paddingHorizontal: 10,
  },
  icons: {
    margin: 7,
  },
});
