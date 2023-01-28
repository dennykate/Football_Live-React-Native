import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LogBox } from "react-native";

import { Video } from "expo-av";
import Lottie from "lottie-react-native";
import { AdMobBanner } from "expo-ads-admob";
import { StatusBar } from "expo-status-bar";

import Logo from "../assets/images/logo.jpg";
import { useFonts } from "expo-font";
import { WebView } from "react-native-webview";
import { interstitial, rewardInterstitial } from "../utils/requestAds";
import Lineup from "../components/Lineup";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

const LiveDetailScreen = ({ navigation, route }) => {
  const {
    league,
    homeTeam,
    awayTeam,
    source,
    date,
    time,
    stadium,
    lineupSource,
  } = route.params;

  const videoRef = useRef();
  const [loading, setLoading] = useState(false);
  const [keyForAutoPlay, setKeyForAutoPlay] = useState(false);

  useEffect(() => {
    // rewardInterstitial("ca-app-pub-3940256099942544/5224354917");
  }, []);

  const [loaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "NotoSansMyanmar-Bold": require("../assets/fonts/NotoSansMyanmar-Bold.ttf"),
    "DancingScript-Regular": require("../assets/fonts/DancingScript-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ED123A" />
      <View style={styles.videoContainer}>
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

      <ScrollView style={{ borderTopColor: "#ED213A", borderTopWidth: 2 }}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={"ca-app-pub-3940256099942544/6300978111"}
          servePersonalizedAds
          style={styles.bannerAds}
        />

        <Text style={styles.leagueTitle}>{league}</Text>

        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <View style={styles.clubContainer}>
              <Image
                source={{
                  uri: homeTeam.logo,
                }}
                style={styles.logo}
              />
              <Text style={{ marginTop: 5, fontFamily: "Roboto-Bold" }}>
                {homeTeam.name}
              </Text>
            </View>
          </View>

          <View style={styles.vs}>
            <Text style={styles.matchDate}>{date}</Text>
            <Text style={styles.matchDate}>{time}</Text>
            <Text style={styles.matchDate}>{stadium}</Text>
          </View>

          <View style={styles.resultCard}>
            <View style={styles.clubContainer}>
              <Image
                source={{
                  uri: awayTeam.logo,
                }}
                style={styles.logo}
              />
              <Text style={{ marginTop: 5, fontFamily: "Roboto-Bold" }}>
                {awayTeam.name}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.fullScreen}
          activeOpacity={0.9}
          onPress={() => {}}
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

        <Lineup lineupSource={lineupSource} />

        <AdMobBanner
          bannerSize="banner"
          adUnitID={"ca-app-pub-3940256099942544/6300978111"}
          servePersonalizedAds
          style={styles.bannerAds}
        />

        <View style={{ marginTop: 10 }}></View>
      </ScrollView>
    </View>
  );
};

export default LiveDetailScreen;

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
    marginTop: 40,
    alignSelf: "center",
  },
  leagueTitle: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "400",
    fontSize: 15,
  },
  resultContainer: {
    width: "100%",
    minHeight: 130,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  resultCard: {
    width: "35%",
    minHeight: 130,
  },
  clubContainer: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    width: 40,
    height: 40,
  },
  vs: {
    width: "30%",
    height: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  matchDate: {
    fontSize: 13,
    marginTop: 10,
    fontWeight: "300",
    letterSpacing: 0.6,
  },

  fullScreen: {
    width: 170,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ED123A",
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
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
