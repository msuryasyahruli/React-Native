import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "native-base";

const Saved = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" translucent={false} />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          width: 350,
        }}
      >
        <View>
          <Image source={require("./MRimg/margherita.png")} />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>
            Margherita
          </Text>
          <Text style={{ color: "#B6B6B6", fontSize: 12 }}>In Veg Pizza</Text>
          <Text>Spicy</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          width: 350,
        }}
      >
        <View>
          <Image source={require("./MRimg/vegloaded.png")} />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>
            Veg Loaded
          </Text>
          <Text style={{ color: "#B6B6B6", fontSize: 12 }}>In Pizza Mania</Text>
          <Text>Spicy</Text>
        </View>
      </View>
    </View>
  );
};

export default Saved;

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
    margin: 10,
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
