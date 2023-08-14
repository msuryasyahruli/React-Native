import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "native-base";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EEC302" translucent={false} />
      <View style={styles.profileImg}>
        <View style={styles.profile}>
          <Image style={{ padding: 20 }} source={require("./profImg/user.png")} />
        </View>
        <Text
          style={{ padding: 20, fontWeight: 700, color: "white", fontSize: 18 }}
        >
          Name
        </Text>
      </View>
      <View style={styles.tes}>
        <Link href="/editProfile">
          <View style={styles.menu}>
            <Image style={{ margin: 10 }} source={require("./profImg/user.png")} />
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#000000B2", margin: 10 }}>Edit Profile</Text>
          </View>
        </Link>
        <Link href="">
          <View style={styles.menu}>
            <Image style={{ margin: 10 }} source={require("./profImg/award.png")} />
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#000000B2", margin: 10 }}>My Recipe</Text>
          </View>
        </Link>
        <Link href="">
          <View style={styles.menu}>
            <Image style={{ margin: 10 }} source={require("./profImg/saved.png")} />
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#000000B2", margin: 10 }}>Saved Recipe</Text>
          </View>
        </Link>
        <Link href="">
          <View style={styles.menu}>
            <Image style={{ margin: 12 }} source={require("./profImg/liked.png")} />
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#000000B2", margin: 10 }}>Liked Recipe</Text>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profileImg: {
    backgroundColor: "#EEC302",
    height: 320,
    width: 393,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  tes: {
    backgroundColor: "white",
    width: 380,
    height: 600,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -50,
    elevation: 3,
    shadowColor: 'black',
  },
  menu: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  }
});
