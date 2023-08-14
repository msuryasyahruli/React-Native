import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "native-base";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" translucent={false} />
      <View style={styles.header}>
        <Link href="/profile">
          <View style={styles.backbtn}>
            <Image source={require("./EPimg/Vector.png")} />
          </View>
        </Link>
        <Text style={{ fontSize: 20, fontWeight: 700, color: "#EEC302", marginLeft: 80 }}>Edit Profile</Text>
      </View>
      <View style={{ width: 350, paddingTop: 15, paddingBottom: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Change Profile Picture</Text>
      </View>
      <View style={{ width: 350, backgroundColor: "#E7E7E7", height: 1 }}></View>
      <View style={{ width: 350, paddingTop: 15, paddingBottom: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Change Password</Text>
      </View>
      <View style={{ width: 350, backgroundColor: "#E7E7E7", height: 1 }}></View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  header: {
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    margin: 10
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
