import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Button, FlatList, NativeBaseProvider, StatusBar } from "native-base";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteRecipeActions } from "../config/redux/actions/recipeAction";
import UpdateRecipe from "../../components/updateRecipe";
import FeatherIcon from "react-native-vector-icons/Feather";

const Myrecipe = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // const [userLogin, setUserLogin] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataUser = await AsyncStorage.getItem("users_id");
    await axios
      .get(`http://192.168.22.142:7474/recipes/users/${dataUser}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (recipes_id) => {
    dispatch(deleteRecipeActions(recipes_id));
    getData();
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" translucent={false} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 25,
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 10,
                width: 370,
                justifyContent: "center"
              }}
            >
              <View>
                <Image
                  style={{ margin: 0, width: 80, height: 80, borderRadius: 15 }}
                  source={{ uri: item.recipes_photo }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginBottom: 5,
                    width: 150,
                  }}
                >
                  {item.recipes_title}
                </Text>
                <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                  In Veg Pizza
                </Text>
                <Text>Spicy</Text>
              </View>
              <UpdateRecipe
                recipes_title={item.recipes_title}
                recipes_id={item.recipes_id}
                recipes_video={item.recipes_video}
                recipes_photo={item.recipes_photo}
                recipes_ingredients={item.recipes_ingredients}
                getData={getData}
              />
              <Button
                style={{
                  width: 50,
                  height: 40,
                  backgroundColor: "#D71313",
                }}
                onPress={() => {
                  Alert.alert(
                    "Delete",
                    "Are you sure you want to delete ?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "Ok",
                        onPress: () => {
                          handleDelete(item.recipes_id);
                        },
                        style: "cancel",
                      },
                    ],
                    {
                      cancelable: true,
                    }
                  );
                }}
                ml={3}
              ><FeatherIcon name="trash" size={20} color={"white"} /></Button>
            </View>
          )}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default Myrecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  backbtn: {
    width: 50,
    height: 50,
    backgroundColor: "#F8F8FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
