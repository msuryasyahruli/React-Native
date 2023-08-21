import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, NativeBaseProvider, StatusBar } from "native-base";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const register = () => {
    const data = {
      users_name: name,
      users_email: email,
      users_phone: phone,
      users_password: password,
      users_confirmpassword: confirmPassword,
    };
    console.log(data);
    axios.post("http://192.168.22.142:7474/users/register", data)
    .then((res) => {
      console.log(res.data);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      if (res.data.statusCode === 201) {
        navigation.navigate("login");
      }
    });
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#F5F5F5" />
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
            <TextInput placeholder="Name" width={255}
              value={name}
              onChangeText={(value) => setName(value)} />
          </View>
          <View style={styles.auth}>
            <View>
              <Image
                style={styles.authImg}
                source={require("./regImg/mail.png")}
              />
            </View>
            <TextInput placeholder="E-Mail" width={255}
              value={email}
              onChangeText={(value) => setEmail(value)} />
          </View>
          <View style={styles.auth}>
            <View>
              <Image
                style={styles.authImg}
                source={require("./regImg/phone.png")}
              />
            </View>
            <TextInput placeholder="Phone Number" width={255}
              value={phone}
              onChangeText={(value) => setPhone(value)} />
          </View>
          <View style={styles.auth}>
            <View>
              <Image
                style={styles.authImg}
                source={require("./regImg/lock.png")}
              />
            </View>
            <TextInput placeholder="Create New Password" width={255} secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)} />
          </View>
          <View style={styles.auth}>
            <View>
              <Image
                style={styles.authImg}
                source={require("./regImg/unlock.png")}
              />
            </View>
            <TextInput placeholder="New Password" width={255} secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)} />
          </View>
        </View>
        <Button width={320} height={50} borderRadius={10} backgroundColor={"#EFC81A"} margin={5} onPress={register}>CREATE</Button>
        <Text style={{ color: "#999999" }}>
          Already have account?{" "}
          <TouchableOpacity>
            <Text style={{ color: "#EFC81A" }} onPress={() => navigation.navigate("login")}>Log in Here</Text>
          </TouchableOpacity>
          {/* <Link href="/auth/login">
            Log in Here
          </Link> */}
        </Text>
      </View>
    </NativeBaseProvider>
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
    margin: 15,
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
