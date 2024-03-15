import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useGetImageQuery, usePutImageMutation } from "../app/services/profile";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import { deleteSession } from "../utils/db";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [triggerImage] = usePutImageMutation();
  const localId = useSelector((state) => state.auth.localId);
  const { data, isSuccess } = useGetImageQuery(localId);
  const idToken = useSelector((state) => state.auth.idToken);

  useEffect(() => {
    if (isSuccess && data) setImage(data.image);
  }, [isSuccess, data]);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [6, 4],
        quality: 0.3,
        base64: true,
      });
      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };
  const confirmImage = () => {
    triggerImage({ image, localId });
    navigation.goBack();
  };

  const onLogout = () => {
    dispatch(clearUser());
    deleteSession();
  };
  return (
    <View style={styles.container}>
      <Image
        source={
          image ? { uri: image } : require("../../assets/imagenProfile.png")
        }
        style={styles.img}
        resizeMode="cover"
      />
      <Button
        title="Tomar Foto"
        type="outline"
        containerStyle={{
          backgroundColor: "#AB0000",
          width: 125,
          marginBottom: 10,
          borderRadius: 5,
        }}
        buttonStyle={{ borderColor: "#AB0000" }}
        titleStyle={{ color: "white", fontFamily: "Poppins" }}
        onPress={pickImage}
      />
      <Button
        title="Agregar imagen de galeria"
        type="outline"
        containerStyle={{
          backgroundColor: "#AB0000",
          width: 240,
          marginBottom: 10,
          borderRadius: 5,
        }}
        buttonStyle={{ borderColor: "#AB0000" }}
        titleStyle={{ color: "white", fontFamily: "Poppins" }}
        onPress={() => console.log("perfil")}
      />
      <Button
        title="Confirmar foto"
        type="outline"
        containerStyle={{
          backgroundColor: "#AB0000",
          width: 150,
          marginBottom: 10,
          borderRadius: 5,
        }}
        buttonStyle={{ borderColor: "#AB0000" }}
        titleStyle={{ color: "white", fontFamily: "Poppins" }}
        onPress={confirmImage}
      />
      <View>
        {idToken && (
          <Button
            title="Cerrar Session"
            type="outline"
            containerStyle={{
              backgroundColor: "#AB0000",
              width: 150,
              marginBottom: 10,
              borderRadius: 5,
            }}
            buttonStyle={{ borderColor: "#AB0000" }}
            titleStyle={{ color: "white", fontFamily: "Poppins" }}
            onPress={onLogout}
          />
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "white",
  },
  img: { width: 200, height: 200, margin: 20, borderRadius: 10 },
});
