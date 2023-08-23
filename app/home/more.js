import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeBaseProvider, ScrollView, StatusBar } from "native-base";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const More = () => {
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
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', alignItems: "center", paddingBottom: 20 }}>
            {recipes.map((recipes) => (
              <View
                style={{
                  borderRadius: 25,
                  flexDirection: "row",
                  marginTop: 0,
                  marginBottom: 10,
                  width: 360,
                }}
              >
                <View>
                  <Image
                    style={{ margin: 5, width: 80, height: 80, borderRadius: 15 }}
                    source={{ uri: recipes.recipes_photo }}
                  />
                </View>
                <View style={{ margin: 5,  width: 180 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, marginBottom: 7 }}
                  >
                    {recipes.recipes_title}
                  </Text>
                  <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                    In Veg Pizza
                  </Text>
                  <Text>Spicy</Text>
                </View>
                <View style={{ flexDirection: 'row', right: 0, position: "absolute" }}>
                  <Image style={{ margin: 5 }} source={require("./homepopular/unsaved.png")} />
                  <Image style={{ margin: 5 }} source={require("./homepopular/unliked.png")} />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default More;

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
    borderRadius: 15
  },
});
