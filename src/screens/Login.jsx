import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Input } from "@rneui/themed";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../app/services/auth";
import { loginSchema } from "../utils/validations/authSchema";
import { deleteSession, insertSession } from "../utils/db";
import ModalIncorrectLogin from "../components/modals/ModalIncorrectLogin";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin] = useLoginMutation();
  const { top } = useSafeAreaInsets();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [keyboardActive, setKeyboardActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardActive(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardActive(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      deleteSession();
      insertSession(data);
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
      setIsModalOpen(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ ...styles.container, top: top }}
        keyboardVerticalOffset={60}
      >
        {!keyboardActive && (
          <Image
            style={styles.img}
            source={{
              uri: "https://res.cloudinary.com/dfcnmxndf/image/upload/v1707155357/Caste%20Bebidas/xme6decqhdsbponshkag.png",
            }}
          />
        )}
        <View style={styles.containerLogin}>
          <Text style={styles.titulo}>INICIAR SESION</Text>
          <Input
            placeholder="Email"
            placeholderTextColor="white"
            inputStyle={{ color: "white" }}
            errorMessage={errorEmail}
            errorStyle={{ color: "black" }}
            onChangeText={(t) => setEmail(t)}
          />
          <Input
            placeholder="Contraseña"
            placeholderTextColor="white"
            inputStyle={{ color: "white" }}
            secureTextEntry={true}
            errorMessage={errorPassword}
            errorStyle={{ color: "black" }}
            onChangeText={(t) => setPassword(t)}
          />
          <View style={{ alignItems: "center", margin: 10 }}>
            <Button
              title="Ingresar"
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
            <Text style={{ color: "white", fontFamily: "Poppins", margin: 5 }}>
              Ingresar con
            </Text>
            <Pressable>
              <MaterialCommunityIcons name="gmail" size={50} color="white" />
            </Pressable>
            <Text style={{ color: "white", fontFamily: "Poppins", margin: 10 }}>
              No tenes una cuenta?
            </Text>
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
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
        {isModalOpen && (
          <ModalIncorrectLogin
            navigation={navigation}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogin: {
    backgroundColor: "#AB0000",
    width: "90%",
    borderRadius: 30,
    marginTop: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
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
    resizeMode: "contain",
  },
});
