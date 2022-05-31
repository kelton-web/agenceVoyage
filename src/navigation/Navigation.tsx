import * as React from "react";
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Wallpaper from "../screens/Wallpaper";
import Home from "../screens/Accueil";
import Travel from "../screens/Travel";
import NosCircuits from "../screens/NosCircuits";
import Trek from "../screens/Trek";
import Contact from "../screens/Contact";
import AllDestinationVoyage from "../screens/AllDestinationVoyage";
import Presentation from '../screens/Presentation';
import Destination from "../components/compTravel/Destination"
import { string } from "yup";

export type RouteParams = {
  Wallpaper: undefined;
  Home: undefined;
  Root: undefined;
  Travel: undefined;
  Circuit: undefined;
  Trek: undefined;
  Contact: undefined;
  AllDestinationVoyage: {
    destination: string
  };
  Presentation: {
    destination: string
  };
  
};



const Stack = createNativeStackNavigator<RouteParams>();
const Tab = createBottomTabNavigator<RouteParams>();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function LogoTitle(){
  return (
    <Image
      style={{ width: 120, height: 80, resizeMode: 'contain', top: -6 }}
      source={require('../../assets/logo.png')}
    />
  );
}

function Root() {

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ navigation,route }) => ({
      
      headerStyle: {
        backgroundColor: '#2C2C2C',
      },tabBarStyle: { position: 'absolute' },
      tabBarBackground: () => (
        <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
      ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Wallpaper')}>
            <View style={{left: -10}}>{Platform.OS === 'ios' ? <Ionicons name="search-circle-outline" size={34} color="white"/> : <Ionicons name="search-circle-outline" size={34} color="white"/>}
            </View>
          </TouchableOpacity>
        ),headerTitle: (props) => <LogoTitle />,
      
      
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return (
            Platform.OS === 'ios' ?
            <Ionicons
              name={
                focused
                  ? 'ios-globe'
                  : 'ios-globe-outline'
              }
              size={size}
              color={color}
            /> :  <Ionicons
            name={
              focused
                ? 'md-globe'
                : 'md-globe-outline'
            }
            size={size}
            color={color}
          />
          );
        } else if (route.name === 'Travel') {
          return (
            Platform.OS === 'ios' ?  <Ionicons
            name={focused ? 'airplane' : 'airplane-outline'}
            size={size}
            color={color}
          /> :  <Ionicons
          name={focused ? 'airplane' : 'airplane-outline'}
          size={size}
          color={color}
        />
           
          );
        }
         else if (route.name === 'Circuit') {
          return (
            Platform.OS === 'ios' ?  <Ionicons
            name={focused ? 'infinite' : 'infinite-outline'}
            size={size}
            color={color}
          /> :  <Ionicons
          name={focused ? 'infinite' : 'infinite-outline'}
          size={size}
          color={color}
        />
           
          );
        }
         else if (route.name === 'Contact') {
          return (
            Platform.OS === 'ios' ?  <Ionicons
            name={focused ? 'call' : 'call-outline'}
            size={size}
            color={color}
          /> :  <Ionicons
          name={focused ? 'call' : 'call-outline'}
          size={size}
          color={color}
        />
           
          );
        }
         else if (route.name === 'Trek') {
          return (
            Platform.OS === 'ios' ?  <Ionicons
            name={focused ? 'shield-sharp' : 'shield-outline'}
            size={size}
            color={color}
          /> :  <Ionicons
          name={focused ? 'shield-sharp' : 'shield-outline'}
          size={size}
          color={color}
        />
           
          );
        }
     
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'tomato',
    })} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AllDestinationVoyage" component={AllDestinationVoyage} options={{
    tabBarButton: () => null,
  }}   />
      <Tab.Screen name="Presentation" component={Presentation} options={{
    tabBarButton: () => null,
  }}   />
      <Tab.Screen name="Travel" component={Travel}  />
      <Tab.Screen name="Circuit" component={NosCircuits}  />
      <Tab.Screen name="Trek" component={Trek}  />
      <Tab.Screen name="Contact" component={Contact}  />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
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
