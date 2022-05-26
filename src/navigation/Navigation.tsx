import * as React from "react";
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Wallpaper from "../screens/Wallpaper";
import Home from "../screens/Accueil";

export type RouteParams = {
  Wallpaper: undefined;
  Home: undefined;
  Root: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();
const Tab = createBottomTabNavigator<RouteParams>();

function Root() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return (
            Platform.OS === 'ios' ?
            <Ionicons
              name={
                focused
                  ? 'ios-home'
                  : 'ios-home-outline'
              }
              size={size}
              color={color}
            /> :  <Ionicons
            name={
              focused
                ? 'md-home'
                : 'md-home-outline'
            }
            size={size}
            color={color}
          />
          );
        } /* else if (route.name === 'Settings') {
          return (
            Platform.OS === 'ios' ?  <Ionicons
            name={focused ? 'cog-sharp' : 'cog-outline'}
            size={size}
            color={color}
          /> :  <Ionicons
          name={focused ? 'cog-sharp' : 'cog-outline'}
          size={size}
          color={color}
        />
           
          );
        } */
     
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'tomato',
    })}>
      <Tab.Screen name="Home" component={Home} options={{}}/>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wallpaper">
          <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Wallpaper" component={Wallpaper} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
