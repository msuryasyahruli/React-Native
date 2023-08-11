import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hello}>
        <Text style={styles.started}>Let’s Get Started !</Text>
        <Text style={styles.log}>
          Create new account to access all feautures
        </Text>
      </View>
      <View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./regImg/user.png")}
            />
          </View>
          <TextInput placeholder="Name" />
        </View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./regImg/mail.png")}
            />
          </View>
          <TextInput placeholder="E-Mail" />
        </View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./regImg/phone.png")}
            />
          </View>
          <TextInput placeholder="Phone Number" />
        </View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./regImg/lock.png")}
            />
          </View>
          <TextInput placeholder="Create New Password" />
        </View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./regImg/unlock.png")}
            />
          </View>
          <TextInput placeholder="New Password" />
        </View>
      </View>
      <Link style={styles.regBtn} href="/auth/login">
        <Text style={{ fontWeight: 900 }}>CREATE</Text>
      </Link>
      <Text style={{ color: "#999999" }}>
        Already have account?{" "}
        <Link style={{ color: "#EFC81A" }} href="/auth/login">
          Log in Here
        </Link>
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  hello: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  started: {
    color: "#EFC81A",
    fontWeight: 500,
    fontSize: 24,
  },
  log: {
    color: "#C4C4C4",
    fontWeight: 500,
    fontSize: 12,
  },
  auth: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 319,
    height: 60,
    borderRadius: 10,
    margin: 10,
  },
  authImg: {
    margin: 20,
  },
  regBtn: {
    backgroundColor: "#EFC81A",
    width: 319,
    height: 60,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
    padding: 20,
  },
});
