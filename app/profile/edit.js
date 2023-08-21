import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "native-base";

const Edit = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" translucent={false} />
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

export default Edit;

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
