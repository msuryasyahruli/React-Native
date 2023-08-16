import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Button, NativeBaseProvider, StatusBar, TextArea } from 'native-base'
import { Link } from 'expo-router'

const index = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#F5F5F5" translucent={false} />
        <Text style={styles.subtitle}>Add Your Recipe</Text>
        <View style={styles.icon}>
          <View>
            <Image
              style={styles.iconImg}
              source={require("./UPimg/book-open.png")}
            />
          </View>
          <TextInput placeholder="Title" width={270} />
        </View>
        <View style={styles.desc}>
          <TextArea borderRadius={15} h={40} placeholder="Description" width={350} />
        </View>
        <View style={styles.icon}>
          <View>
            <Image
              style={styles.iconImg}
              source={require("./UPimg/video.png")}
            />
          </View>
          <TextInput placeholder="Add Video" width={270} />
        </View>
        <View style={styles.icon}>
          <View>
            <Image
              style={styles.iconImg}
              source={require("./UPimg/poto.png")}
            />
          </View>
          <TextInput placeholder="Add Photo" width={270} />
        </View>
        <Button width={350} height={50} borderRadius={10} backgroundColor={"#EFC81A"} margin={10}>Upload</Button>
      </View>
      <View style={{ flexDirection: "row", position: "relative", height: 60, backgroundColor: "white", alignItems: "center", justifyContent: "center", elevation: 10, shadowColor: 'black' }}>
        <Link href="/home">
          <View padding={10} width={100} alignItems={"center"}>
            <Image source={require("./navImg/home.png")} />
          </View>
        </Link>
        <Link href="/upload">
          <View padding={10} width={100} alignItems={"center"}>
            <Image source={require("./navImg/plus-square.png")} />
          </View>
        </Link>
        <Link href="/profile">
          <View padding={10} width={100} alignItems={"center"}>
            <Image source={require("./navImg/user.png")} />
          </View>
        </Link>
      </View>
    </NativeBaseProvider>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 500,
    color: "#EFC81A",
    padding: 20
  },
  desc:{
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 10,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 350,
    height: 60,
    borderRadius: 15,
    margin: 10,
  },
  iconImg: {
    margin: 12,
    width: 25,
    height: 25
  },
})