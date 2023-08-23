import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  TextArea,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { createRecipeActions } from "../config/redux/actions/recipeAction";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Upload = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState(null);
  const [usersId, setUsersId] = useState("");
  useEffect(() => {
    handleGetToken();
  });
  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem("token");
    if (!dataToken) {
      navigation.navigate("home");
    }
    const dataUser = await AsyncStorage.getItem("users_id");
    setUserLogin(dataUser);
  };

  const createRecipe = () => {
    dispatch(createRecipeActions(title, ingredients, video, image, userLogin));
    setTitle("");
    setIngredients("");
    setVideo("");
    setImage("");
    setUsersId("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#F5F5F5" translucent={false} />
          <Text style={styles.subtitle}>Add Your Recipe</Text>
          <View style={styles.icon}>
            <View>
              <Image
                style={styles.iconImg}
                source={require("./UPimg/book-open.png")}
              />
            </View>
            <TextInput
              placeholder="Title"
              width={270}
              value={title}
              onChangeText={(value) => setTitle(value)}
            />
          </View>
          <View style={styles.desc}>
            <TextArea
              borderRadius={15}
              h={40}
              placeholder="Description"
              width={350}
              value={ingredients}
              onChangeText={(value) => setIngredients(value)}
            />
          </View>
          <View style={styles.icon}>
            <View>
              <Image
                style={styles.iconImg}
                source={require("./UPimg/video.png")}
              />
            </View>
            <TextInput
              placeholder="Add Video"
              width={270}
              value={video}
              onChangeText={(value) => setVideo(value)}
            />
          </View>
          <Button
            style={styles.icon}
            onPress={pickImage}
            width={320}
            mt={5}
            backgroundColor={"#F5F5F5"}
            borderColor={"#F5F5F5"}
            h={12}
          >
            <Text>Add Photo</Text>
          </Button>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 350, height: 250, borderRadius: 15 }}
            />
          )}
          <Button
            width={350}
            height={50}
            borderRadius={10}
            backgroundColor={"#EFC81A"}
            margin={10}
            onPress={createRecipe}
          >
            Upload
          </Button>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          height: 60,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          elevation: 10,
          shadowColor: "black",
        }}
      >
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("home")}>
            <View padding={10} width={100} alignItems={"center"}>
              <Image source={require("./navImg/home.png")} />
            </View>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("upload")}>
            <View padding={10} width={100} alignItems={"center"}>
              <Image source={require("./navImg/plus-square.png")} />
            </View>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("profile")}>
            <View padding={10} width={100} alignItems={"center"}>
              <Image source={require("./navImg/user.png")} />
            </View>
          </Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 500,
    color: "#EFC81A",
    padding: 20,
  },
  desc: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 10,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 350,
    height: 60,
    borderRadius: 15,
    margin: 10,
  },
  iconImg: {
    margin: 12,
    width: 25,
    height: 25,
  },
});
