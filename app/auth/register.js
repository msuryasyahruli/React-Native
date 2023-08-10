import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>CREATE</Text>
      <Text>Already have account? </Text>
      <Link href="/auth/login">Log in Here</Link>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
