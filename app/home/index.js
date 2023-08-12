import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ScrollView, NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const home = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#F5F5F5" />
          <Text style={{ marginTop: 30 }}>
            <View style={styles.auth}>
              <View>
                <Image
                  style={styles.authImg}
                  source={require("./homeImg/Vector.png")}
                />
              </View>
              <TextInput placeholder="Search Pasta, Bread, etc" />
            </View>
          </Text>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
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
          </View>
          <View>
            <View style={{ width: 350 }}>
              <Text style={styles.title}>New Recipes</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require("./homeImg/banana.png")} />
            <Image source={require("./homeImg/sandwich.png")} />
            <Image source={require("./homeImg/banana.png")} />
            <Image source={require("./homeImg/sandwich.png")} />
          </ScrollView>
          <View>
            <View
              style={{
                width: 350,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>Popular Recipes</Text>
              <Link href="" style={{ color: "#6D61F2" }}>
                More info
              </Link>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 25,
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require("./homeImg/salmon.png")}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}
                  >
                    Teriyaki Salmon
                  </Text>
                  <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                    spicy, salted
                  </Text>
                  <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 25,
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require("./homeImg/salmon.png")}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}
                  >
                    Teriyaki Salmon
                  </Text>
                  <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                    spicy, salted
                  </Text>
                  <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 25,
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require("./homeImg/salmon.png")}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}
                  >
                    Teriyaki Salmon
                  </Text>
                  <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                    spicy, salted
                  </Text>
                  <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 25,
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require("./homeImg/salmon.png")}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}
                  >
                    Teriyaki Salmon
                  </Text>
                  <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                    spicy, salted
                  </Text>
                  <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 25,
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Image
                    style={{ margin: 10 }}
                    source={require("./homeImg/salmon.png")}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}
                  >
                    Teriyaki Salmon
                  </Text>
                  <Text style={{ color: "#B6B6B6", fontSize: 12 }}>
                    spicy, salted
                  </Text>
                  <Text style={{ color: "#B6B6B6" }}>4.7</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  auth: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    width: 350,
    height: 60,
    borderRadius: 15,
    margin: 10,
  },
  authImg: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  ctgr: {
    marginTop: 20,
  },
});
