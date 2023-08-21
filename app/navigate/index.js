import * as React from "react";

const Stack = createStackNavigator()
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../auth/login";
import Register from "../auth/register";
import Home from "../home";
import Detail from "../detail/[id]";
import More from "../home/more";
import Upload from "../upload";
import Profile from "../profile";
import Edit from "../profile/edit";
import Myrecipe from "../profile/myrecipe";
import Saved from "../profile/saved";
import Liked from "../profile/liked";

export default function Navigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="more"
        component={More}
        options={{
          tabBarShowLabel: false,
          title: 'Popular Menu',
          headerTintColor: '#EEC302',
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="upload"
        component={Upload}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="editProf"
        component={Edit}
        options={{
          tabBarShowLabel: false,
          title: 'Edit Profile',
          headerTintColor: '#EEC302',
        }}
      />
      <Stack.Screen
        name="myrecipe"
        component={Myrecipe}
        options={{
          tabBarShowLabel: false,
          title: 'My Recipe',
          headerTintColor: '#EEC302',
        }}
      />
      <Stack.Screen
        name="saved"
        component={Saved}
        options={{
          tabBarShowLabel: false,
          title: 'Saved Recipe',
          headerTintColor: '#EEC302',
        }}
      />
      <Stack.Screen
        name="liked"
        component={Liked}
        options={{
          tabBarShowLabel: false,
          title: 'Liked Recipe',
          headerTintColor: '#EEC302',
        }}
      />
    </Stack.Navigator>
  );
}
