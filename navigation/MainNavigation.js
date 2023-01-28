import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import ReplayScreen from "../screens/ReplayScreen";
import SkillScreen from "../screens/SkillScreen";
import AboutScreen from "../screens/AboutScreen";
import DetailScreen from "../screens/DetailScreen";
import FullScreen from "../screens/FullScreen";
import SkillDetailScreen from "../screens/SkillDetailScreen";
import TableScreen from "../screens/TableScreen";
import LiveDetailScreen from "../screens/LiveDetailScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{ headerShown: false, animationEnabled: false }}
      >
        <Stack.Screen name="MainScreen" component={BottomNavigation} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="FullScreen" component={FullScreen} />
        <Stack.Screen name="SkillDetailScreen" component={SkillDetailScreen} />
        <Stack.Screen name="LiveDetailScreen" component={LiveDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName == "HomeScreen") {
            iconName = focused ? "play-circle" : "play-circle-outline";
          } else if (routeName == "ReplayScreen") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (routeName == "SkillScreen") {
            iconName = focused ? "football" : "football-outline";
          } else if (routeName == "TableScreen") {
            iconName = focused ? "trophy" : "trophy-outline";
          } else if (routeName == "AboutScreen") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={23} color={color} />;
        },
        tabBarActiveTintColor: "#ED213A",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          padding: 10,
          height: 60,
          backgroundColor: "#232526",
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          display: "none",
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ReplayScreen"
        component={ReplayScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SkillScreen"
        component={SkillScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TableScreen"
        component={TableScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
