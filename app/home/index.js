import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { ScrollView, NativeBaseProvider } from "native-base";
import axios from "axios";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();
const home = () => {
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
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#f5f5f5" translucent={false} />
      <ScrollView>
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
          {/* <View style={{ marginTop: 20, marginBottom: 20 }}>
            <View style={{ width: 350 }}>
              <Text style={styles.title}>Popular for You</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.ctgr}>
                <Image source={require("./homeImg/soup.png")} />
                <Text style={{ textAlign: "center" }}>Soup</Text>
              </View>
              <View style={styles.ctgr}>
                <Image source={require("./homeImg/chiken.png")} />
                <Text style={{ textAlign: "center" }}>Chiken</Text>
              </View>
              <View style={styles.ctgr}>
                <Image source={require("./homeImg/seafood.png")} />
                <Text style={{ textAlign: "center" }}>Seafood</Text>
              </View>
              <View style={styles.ctgr}>
                <Image source={require("./homeImg/dessert.png")} />
                <Text style={{ textAlign: "center" }}>Dessert</Text>
              </View>
            </View>
          </View> */}
          <View>
            <View style={{ width: 350 }}>
              <Text style={styles.title}>New Recipes</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recipes.map((recipes) => (
              <View style={{ marginLeft: 20, marginRight: 5 }}>
                <Image
                  style={{ marginTop: 10, marginBottom: 20, width: 130, height: 160, borderRadius: 16 }}
                  source={{ uri: recipes.recipes_photo }}
                />
                <Text style={{ position: "absolute", bottom: 20, padding: 10, fontSize: 16, fontWeight: 700, color: "white" }}>{recipes.recipes_title}</Text>
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
              <Link href="/home/more" style={{ color: "#6D61F2" }}>
                More info
              </Link>
            </View>
            <View>
              {recipes.map((recipes) => (
                <Link href={`/detail/${recipes.recipes_id}`} style={{ marginTop: 10, marginBottom: 5, }}>
                  <View
                    style={{
                      backgroundColor: "white",
                      width: 350,
                      borderRadius: 15,
                      flexDirection: "row",
                      elevation: 2,
                      shadowColor: 'black',
                    }}
                  >
                    <View>
                      <Image
                        style={{ margin: 10, width: 70, height: 70, borderRadius: 8 }}
                        source={{ uri: recipes.recipes_photo }}
                      />
                    </View>
                    <View style={{ marginTop: 10, width: 250 }}>
                      <Text
                        style={{ fontSize: 16, fontWeight: 500, marginBottom: 3 }}
                      >
                        {recipes.recipes_title}
                      </Text>
                      <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                        spicy, salted
                      </Text>
                      <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                    </View>
                  </View>
                </Link>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", position: "relative", height: 60, backgroundColor: "white", alignItems: "center", justifyContent: "center", elevation: 10, shadowColor: 'black' }}>
        <Link href="/home">
          <View padding={10} width={100} alignItems={"center"}>
            <Image source={require("./navImg/home.png")} />
          </View>
        </Link>
        <Link href="/upload">
          <View padding={10} width={100} alignItems={"center"}>
            <Image source={require("./navImg/plus-square.png")} />
          </View>
        </Link>
        <Link href="/profile">
          <View padding={10} width={100} alignItems={"center"}>
            <Image source={require("./navImg/user.png")} />
          </View>
        </Link>
      </View>
    </NativeBaseProvider>
  );
};

export default home;

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
    height: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  ctgr: {
    marginTop: 20,
  },
});
