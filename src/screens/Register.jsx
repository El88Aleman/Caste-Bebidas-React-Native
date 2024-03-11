import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRegisterMutation } from "../app/services/auth";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { registerSchema } from "../utils/validations/authSchema";

const Register = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerRegister] = useRegisterMutation();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password });
      const { data } = await triggerRegister({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      setErrorEmail("");
      setErrorPassword("");
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={{ ...styles.container, top: top }}>
      <Image
        style={styles.img}
        source={{
          uri: "https://res.cloudinary.com/dfcnmxndf/image/upload/v1707155357/Caste%20Bebidas/xme6decqhdsbponshkag.png",
        }}
      />

      <View style={styles.containerRegister}>
        <Text style={styles.titulo}>REGISTRARSE</Text>
        <Input
          value={email}
          placeholder="Email"
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          errorMessage={errorEmail}
          errorStyle={{ color: "black" }}
          onChangeText={(t) => setEmail(t)}
        />
        <Input
          value={password}
          placeholder="Contraseña"
          placeholderTextColor="white"
          inputStyle={{ color: "white" }}
          secureTextEntry={true}
          errorMessage={errorPassword}
          errorStyle={{ color: "black" }}
          onChangeText={(t) => setPassword(t)}
        />
        <View style={{ alignItems: "center", margin: 10 }}>
          <View>
            <Button
              title="Registrarse"
              type="outline"
              containerStyle={{
                backgroundColor: "#F9C400",
                width: 150,
                marginBottom: 10,
              }}
              buttonStyle={{ borderColor: "#F9C400", border: 1 }}
              titleStyle={{ color: "black", fontFamily: "Poppins" }}
              onPress={onSubmit}
            />
          </View>
          <Text style={{ color: "white", fontFamily: "Poppins", margin: 5 }}>
            Registrarse con
          </Text>
          <Pressable>
            <MaterialCommunityIcons name="gmail" size={50} color="white" />
          </Pressable>
          <Text style={{ color: "white", fontFamily: "Poppins", margin: 5 }}>
            Ya tienes una cuenta?
          </Text>
          <Button
            title="Inicio de sesion"
            type="outline"
            containerStyle={{
              backgroundColor: "#F9C400",
              width: 150,
              marginBottom: 10,
            }}
            buttonStyle={{ borderColor: "#F9C400", border: 1 }}
            titleStyle={{ color: "black", fontFamily: "Poppins" }}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  containerRegister: {
    backgroundColor: "#AB0000",
    width: "90%",
    borderRadius: 30,
    marginTop: 40,
  },
  titulo: {
    fontFamily: "Poppins",
    fontSize: 30,
    margin: 20,
    textAlign: "center",
    color: "white",
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: "contain",
  },
});
