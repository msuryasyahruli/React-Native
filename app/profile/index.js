import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, HStack, NativeBaseProvider, StatusBar } from "native-base";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Profile = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      getData();
    }
  }, []);

  const getData = async () => {
    const userId = await AsyncStorage.getItem("users_id");
    await axios
      .get(`https://wild-tan-dog-kilt.cyclic.app/users/profile/${userId}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#EEC302" />
        <View style={styles.profile}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <View style={styles.profileImg}>
                  <Image
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 50,
                    }}
                    source={require("./profImg/user.png")}
                  />
                </View>
                <HStack alignSelf="center">
                  <Text mt={1} style={{ color: "#FFFFFF", fontSize: 22 }}>
                    {" "}
                    {item.users_name}
                  </Text>
                </HStack>
              </View>
            )}
          />
        </View>
        <View style={styles.allmenu}>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("editProf")}>
              <View style={styles.menu}>
                <Image
                  style={{ margin: 10 }}
                  source={require("./profImg/user.png")}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#000000B2",
                    margin: 10,
                  }}
                >
                  Edit Profile
                </Text>
              </View>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("myrecipe")}>
              <View style={styles.menu}>
                <Image
                  style={{ margin: 10 }}
                  source={require("./profImg/award.png")}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#000000B2",
                    margin: 10,
                  }}
                >
                  My Recipe
                </Text>
              </View>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("saved")}>
              <View style={styles.menu}>
                <Image
                  style={{ margin: 10 }}
                  source={require("./profImg/saved.png")}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#000000B2",
                    margin: 10,
                  }}
                >
                  Saved Recipe
                </Text>
              </View>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("liked")}>
              <View style={styles.menu}>
                <Image
                  style={{ margin: 12 }}
                  source={require("./profImg/liked.png")}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#000000B2",
                    margin: 10,
                  }}
                >
                  Liked Recipe
                </Text>
              </View>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu}>
              <Image
                style={{ margin: 12, width: 20, height: 20 }}
                source={require("./profImg/logout.png")}
              />
              <Text
                onPress={() => {
                  Alert.alert(
                    "Logout",
                    "Are you sure you want to log out ?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "Ok",
                        onPress: () => {
                          AsyncStorage.clear();
                          navigation.navigate("login");
                        },
                        style: "cancel",
                      },
                    ],
                    {
                      cancelable: true,
                    }
                  );
                }}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#000000B2",
                  margin: 10,
                }}
              >
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    backgroundColor: "#EEC302",
    height: 320,
    width: 393,
    paddingTop: 50,
    alignItems: "center",
  },
  profileImg: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  allmenu: {
    backgroundColor: "#fff",
    width: 380,
    height: 600,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -50,
    elevation: 3,
    shadowColor: "black",
  },
  menu: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
