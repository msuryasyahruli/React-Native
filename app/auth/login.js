import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require("./logImg/profile.png")} />
      </View>
      <View style={styles.hello}>
        <Text style={styles.welcome}>Welcome !</Text>
        <Text style={styles.log}>Log in to your exiting account.</Text>
      </View>
      <View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./logImg/user.png")}
            />
          </View>
          <TextInput
            style={{ color: "#EFC81A" }}
            placeholder="examplexxx@gmail.com"
          />
        </View>
        <View style={styles.auth}>
          <View>
            <Image
              style={styles.authImg}
              source={require("./logImg/lock.png")}
            />
          </View>
          <TextInput placeholder="Password" />
        </View>
      </View>
      <View style={styles.forgotPass}>
        <Link
          style={{ fontSize: 12, fontWeight: 500, color: "#999999" }}
          href=""
        >
          Forgot Password ?
        </Link>
      </View>
      <Link style={styles.logBtn} href="/">
        <Text style={{ fontWeight: 900 }}>LOG IN</Text>
      </Link>
      <Text style={{ color: "#999999" }}>
        Don’t have an account?{" "}
        <Link style={{ color: "#EFC81A" }} href="/auth/register">
          Sign Up
        </Link>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    backgroundColor: "#C4C4C4",
    width: 180,
    height: 180,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    color: "#EFC81A",
    fontWeight: 500,
    fontSize: 18,
  },
  log: {
    color: "#C4C4C4",
    fontWeight: 500,
    fontSize: 12,
  },
  auth: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    width: 319,
    height: 60,
    borderRadius: 10,
    margin: 10,
  },
  authImg: {
    margin: 20,
  },
  forgotPass: {
    flexDirection: "row-reverse",
    width: 319,
  },
  logBtn: {
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
