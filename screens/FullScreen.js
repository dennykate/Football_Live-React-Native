import { BackHandler, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import WebView from "react-native-webview";
import Lottie from "lottie-react-native";

const FullScreen = ({ route }) => {
  const { source } = route.params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }, []);

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff00");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  // back press
  const defaultSetUp = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    NavigationBar.setVisibilityAsync("visible");
    NavigationBar.setBackgroundColorAsync("#000");
    NavigationBar.setPositionAsync("relative");
  };
  BackHandler.addEventListener("hardwareBackPress", defaultSetUp);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <WebView
        source={{
          uri: source,
        }}
        style={styles.video}
        onNavigationStateChange={(status) => {
          setLoading(status.loading);
        }}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <Lottie
            source={require("../assets/animations/loading-circle.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      )}
    </View>
  );
};

export default FullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    zIndex: 10,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000c0",
  },
  lottie: {
    width: 100,
  },
});
