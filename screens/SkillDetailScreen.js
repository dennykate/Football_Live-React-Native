import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import Lottie from "lottie-react-native";
import { AdMobBanner } from "expo-ads-admob";

import Logo from "../assets/images/logo.jpg";
import { rewardInterstitial } from "../utils/requestAds";

const SkillDetailScreen = ({ navigation, route }) => {
  const { source, title } = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // rewardInterstitial("ca-app-pub-3940256099942544/5224354917");
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ED123A" />
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: source }}
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

      <ScrollView style={{ borderTopColor: "#ED213A", borderTopWidth: 2 }}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={"ca-app-pub-3940256099942544/6300978111"}
          servePersonalizedAds
          style={styles.bannerAds}
        />

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.fullScreen}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("FullScreen", { source });
          }}
        >
          <Image source={Logo} style={styles.appLogo} />
          <Text style={styles.fullScreenText}>Full Screen</Text>
        </TouchableOpacity>

        <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID={"ca-app-pub-3940256099942544/6300978111"}
          servePersonalizedAds
          style={{ alignSelf: "center", marginBottom: 40 }}
        />
      </ScrollView>
    </View>
  );
};

export default SkillDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  videoContainer: {
    width: "100%",
    height: 220,
    position: "relative",
    marginTop: 2,
  },
  video: {
    width: "100%",
    height: 220,
    marginTop: 30,
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
  bannerAds: {
    marginTop: 20,
    alignSelf: "center",
  },
  title: {
    color: "white",
    marginHorizontal: 10,
    marginTop: 20,
    letterSpacing: 0.5,
    lineHeight: 20,
    fontWeight: "900",
  },
  fullScreen: {
    width: 170,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ED123A",
    marginVertical: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  appLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fullScreenText: {
    fontWeight: "900",
    marginLeft: 12,
    fontSize: 16,
  },
});
