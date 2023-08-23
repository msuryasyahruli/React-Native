import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Button, NativeBaseProvider } from "native-base";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem("token");
        if (userToken) {
          navigation.navigate("home"); 
        }
      } catch (error) {
        console.error("Error checking user token:", error);
      }
    };
    checkToken();
  }, [navigation]);

  const login = async () => {
    const data = {
      users_email: email,
      users_confirmpassword: confirmpassword,
    };
    axios
      .post("https://wild-tan-dog-kilt.cyclic.app/users/login", data)
      .then((res) => {
        // console.log(data);
        if (res.status === 201) {
          navigation.navigate("home");
          AsyncStorage.setItem("token", res.data.data.token_user);
          AsyncStorage.setItem("users_id", res.data.data.users_id);
        } else if (res.data.message === "Email Wrong") {
          alert("Email Wrong");
        } else if (res.data.message === "Password Wrong") {
          alert("Password Wrong");
        }
        setEmail("");
        setConfirmPassword("");
      });
  };

  return (
    <NativeBaseProvider>
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
              placeholder="examplexxx@gmail.com"
              width={255}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={styles.auth}>
            <View>
              <Image
                style={styles.authImg}
                source={require("./logImg/lock.png")}
              />
            </View>
            <TextInput
              placeholder="Password"
              width={255}
              secureTextEntry={true}
              value={confirmpassword}
              onChangeText={(value) => setConfirmPassword(value)}
            />
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
        <Button
          width={320}
          height={50}
          borderRadius={10}
          backgroundColor={"#EFC81A"}
          margin={5}
          onPress={login}
        >
          LOG IN
        </Button>
        {/* <Link style={styles.logBtn} href="/home">
          <Text style={{ fontWeight: 900 }}>LOG IN</Text>
        </Link> */}
        <Text style={{ color: "#999999" }}>
          Don’t have an account?{" "}
          <TouchableOpacity>
            <Text
              style={{ color: "#EFC81A" }}
              onPress={() => navigation.navigate("register")}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          {/* <Link href="/auth/register">
            Sign Up
          </Link> */}
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
    margin: 15,
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
