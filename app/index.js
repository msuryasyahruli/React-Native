import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link style={styles.btn} href="/auth/login">Login</Link>
        <Link style={styles.btn} href="/auth/register">Register</Link>
        <Link style={styles.btn} href="/home">home</Link>
        <Link style={styles.btn} href="/profile">profile</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  btn:{
    width: 300,
    height: 30,
    backgroundColor:"#EFC81A",
    margin: 10,
    textAlign: "center",
    borderRadius: 20,
    padding: 5
  }
});
