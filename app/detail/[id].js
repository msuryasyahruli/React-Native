import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  TextArea,
} from "native-base";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const route = useRoute();
  const { recipes_id } = route.params;
  const [activeTab, setActiveTab] = useState("Ingredients");
  const [recipes, setRecipes] = useState([]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    axios
      .get(`http://192.168.22.142:7474/recipes/${recipes_id}`)
      .then((res) => {
        setRecipes(res.data.data[0]);
        // console.log(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipes_id]);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.22.142:7474/comments`)
      .then((res) => {
        setComments(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <View style={{ width: "100%", height: 300 }}>
            <Image
              style={{ width: "100%", height: "110%" }}
              source={{ uri: recipes.recipes_photo }}
            />
            <View
              style={{
                position: "absolute",
                left: 20,
                bottom: 30,
                width: "75%",
              }}
            >
              <Text style={{ color: "white", fontSize: 34, fontWeight: 700 }}>
                {recipes.recipes_title}
              </Text>
              <Text
                style={{
                  color: "#B0B0B0",
                  fontSize: 14,
                  fontWeight: 400,
                  marginTop: 5,
                }}
              >
                By Chef Ronald Humson
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                right: 20,
                bottom: 30,
                width: "25%",
                flexDirection: "row-reverse",
              }}
            >
              <Image
                style={{ margin: 5 }}
                source={require("./detail.img/liked.png")}
              />
              <Image
                style={{ margin: 5 }}
                source={require("./detail.img/saved.png")}
              />
            </View>
          </View>
          <View style={styles.recipe}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "Ingredients" && styles.activeTab,
                ]}
                onPress={() => handleTabChange("Ingredients")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "Ingredients" && styles.activeTabText,
                  ]}
                >
                  Ingredients
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "StepVideo" && styles.activeTab,
                ]}
                onPress={() => handleTabChange("StepVideo")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "StepVideo" && styles.activeTabText,
                  ]}
                >
                  Video Step
                </Text>
              </TouchableOpacity>
            </View>
            {activeTab === "Ingredients" && (
              <View style={styles.tabContent}>
                <View style={styles.Ingredients}>
                  <Text style={{ padding: 20, fontSize: 14 }}>
                    {recipes.recipes_ingredients}
                  </Text>
                </View>
              </View>
            )}
            <View>
              {activeTab === "StepVideo" && (
                <View style={styles.tabContent}>
                  <View style={styles.StepVideo}>
                    <Image
                      style={{ margin: 10 }}
                      source={require("./detail.img/video.png")}
                    />
                    <Text style={{ margin: 10, fontSize: 14, width: 270 }}>
                      {recipes.recipes_video}
                    </Text>
                  </View>
                  <View style={styles.cmd}>
                    <TextArea
                      borderRadius={15}
                      h={40}
                      placeholder="Comment :"
                    />
                  </View>
                  <Button
                    width={365}
                    height={50}
                    borderRadius={15}
                    backgroundColor={"#EFC81A"}
                    margin={5}
                  >
                    Upload
                  </Button>
                  <View style={{ width: 350 }}>
                    <Text>Comment :</Text>
                    {comments.map((comments) => (
                      <Text marginBottom={10}>{comments.comment_text}</Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  recipe: {
    backgroundColor: "white",
    width: "100%",
    height: 600,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 5,
  },
  tabsContainer: {
    flexDirection: "row",
    width: "65%",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  activeTab: {
    borderBottomColor: "#EEC302",
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    color: "#666666",
    fontWeight: "bold",
  },
  activeTabText: {
    fontSize: 16,
    color: "#EEC302",
    fontWeight: "bold",
  },
  tabContent: {
    alignItems: "center",
    paddingTop: 20,
  },
  Ingredients: {
    width: 365,
    height: "auto",
    backgroundColor: "#FAF7ED",
    borderRadius: 15,
  },
  StepVideo: {
    backgroundColor: "#FAF7ED",
    width: 365,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 15,
  },
  cmd: {
    width: "100%",
    backgroundColor: "#FAF7ED",
    width: 365,
    borderRadius: 15,
    marginTop: 20,
  },
});
