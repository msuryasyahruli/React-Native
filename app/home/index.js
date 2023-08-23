import {
  RefreshControl,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, NativeBaseProvider } from "native-base";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://wild-tan-dog-kilt.cyclic.app/recipes`)
      .then((res) => {
        setRecipes(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goToDetail = (recipes_id) => {
    navigation.navigate("detail", { recipes_id });
  };

  const fetchData = async () => {
    setIsRefreshing(true);
    await axios.get(`https://wild-tan-dog-kilt.cyclic.app/recipes`);
    setIsRefreshing(false);
  };

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#f5f5f5" translucent={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />
        }
      >
        <View style={{ alignItems: "center", backgroundColor: "#f5f5f5" }}>
          <View style={styles.search}>
            <View>
              <Image
                style={styles.searchImg}
                source={require("./homeImg/search.png")}
              />
            </View>
            <TextInput placeholder="Search Pasta, Bread, etc" width={280} />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <View style={{ width: 350 }}>
              <Text style={styles.title}>New Recipes</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recipes.map((recipes) => (
              <View style={{ marginLeft: 20, marginRight: 5 }}>
                <Image
                  style={{
                    marginTop: 10,
                    marginBottom: 20,
                    width: 130,
                    height: 160,
                    borderRadius: 16,
                  }}
                  source={{ uri: recipes.recipes_photo }}
                />
                <Text
                  style={{
                    position: "absolute",
                    bottom: 20,
                    padding: 10,
                    fontSize: 16,
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {recipes.recipes_title}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                width: 350,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>Popular Recipes</Text>
              <TouchableOpacity>
                <Text
                  style={{ color: "#6D61F2" }}
                  onPress={() => navigation.navigate("more")}
                >
                  More info
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {recipes.map((recipes) => (
                <TouchableOpacity
                  onPress={() => goToDetail(recipes.recipes_id)}
                >
                  <View style={{ marginTop: 10, marginBottom: 5 }}>
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 350,
                        borderRadius: 15,
                        flexDirection: "row",
                        elevation: 2,
                        shadowColor: "black",
                      }}
                    >
                      <View>
                        <Image
                          style={{
                            margin: 10,
                            width: 70,
                            height: 70,
                            borderRadius: 8,
                          }}
                          source={{ uri: recipes.recipes_photo }}
                        />
                      </View>
                      <View style={{ marginTop: 10, width: 250 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            marginBottom: 3,
                          }}
                        >
                          {recipes.recipes_title}
                        </Text>
                        <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                          spicy, salted
                        </Text>
                        <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    width: 350,
    height: 50,
    borderRadius: 15,
    margin: 10,
  },
  searchImg: {
    margin: 20,
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  ctgr: {
    marginTop: 20,
  },
});
