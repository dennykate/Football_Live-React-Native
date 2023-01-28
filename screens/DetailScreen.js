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
import { fetchGoogleDrive } from "../utils/fetchData";
import { StatusBar } from "expo-status-bar";

import Logo from "../assets/images/logo.jpg";
import { useFonts } from "expo-font";
import { WebView } from "react-native-webview";
import Stats from "../components/Stats";
import { interstitial, rewardInterstitial } from "../utils/requestAds";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

const DetailScreen = ({ navigation, route }) => {
  const { league, homeTeam, awayTeam, source, result, date } = route.params;

  const videoRef = useRef();
  const [loading, setLoading] = useState(false);
  const [keyForAutoPlay, setKeyForAutoPlay] = useState(false);
  const [type, setType] = useState("highlight");
  const [video, setVideo] = useState(undefined);

  useEffect(() => {
    setType("highlight");
  }, []);

  useEffect(() => {
    // rewardInterstitial("ca-app-pub-3940256099942544/5224354917");
  }, []);

  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = async () => {
    let data;

    setLoading(false);
    setKeyForAutoPlay(false);
    setVideo(undefined);

    if (type == "highlight") {
      setVideo(source.highlight);
    } else if (type == "1st") {
      setVideo(source.firstHalf);
    } else if (type == "2nd") {
      setVideo(source.secondHalf);
    }
  };

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
            uri: video,
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
            <Text style={styles.resultText}>{result}</Text>
            <Text style={styles.matchDate}>{date}</Text>
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

        <View style={styles.goalScorerMainContainer}>
          <View
            style={[styles.goalScorerContainer, { alignItems: "flex-start" }]}
          >
            {homeTeam.goals.length > 0 &&
              homeTeam.goals.map((data, index) => (
                <View style={styles.goalScorer} key={index}>
                  <Image
                    source={{
                      uri: data.image,
                    }}
                    style={styles.goalScorerImage}
                  />
                  <Text style={{ fontSize: 12 }}>{data.name}</Text>
                </View>
              ))}
          </View>

          <View style={styles.goalScorerContainer}>
            {awayTeam.goals.length > 0 &&
              awayTeam.goals.map((data, index) => (
                <View style={styles.goalScorer} key={index}>
                  <Image
                    source={{
                      uri: data.image,
                    }}
                    style={styles.goalScorerImage}
                  />
                  <Text style={{ fontSize: 12 }}>{data.name}</Text>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.selectContainer}>
          <TouchableOpacity
            style={
              type == "highlight" ? styles.activeSelectBtn : styles.selectBtn
            }
            activeOpacity={0.9}
            onPress={() => {
              setType("highlight");
            }}
          >
            <Text style={styles.selectBtnText}>Highlight</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={type == "1st" ? styles.activeSelectBtn : styles.selectBtn}
            activeOpacity={0.9}
            onPress={() => {
              setType("1st");
            }}
          >
            <Text style={styles.selectBtnText}>1st Half</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={type == "2nd" ? styles.activeSelectBtn : styles.selectBtn}
            activeOpacity={0.9}
            onPress={() => {
              setType("2nd");
            }}
          >
            <Text style={styles.selectBtnText}>2nd Half</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.fullScreen}
          activeOpacity={0.9}
          onPress={() => {
            if (video !== undefined) {
              navigation.navigate("FullScreen", { source: video });
            } else {
              ToastAndroid.show("Please Wait!", ToastAndroid.SHORT);
            }
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

        <Stats homeTeam={homeTeam} awayTeam={awayTeam} />

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

export default DetailScreen;

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
  goalScorerMainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    transform: [{ translateY: -10 }],
  },
  goalScorerContainer: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 5,
    alignItems: "flex-start",
  },
  goalScorer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  goalScorerImage: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },
  vs: {
    width: "30%",
    height: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: { fontWeight: "bold", fontSize: 20, letterSpacing: 10 },
  matchDate: { fontSize: 13, marginTop: 10, fontWeight: "300" },
  selectContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 30,
  },
  selectBtn: {
    width: "25%",
    height: 40,
    borderColor: "#ED213A",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeSelectBtn: {
    width: "25%",
    height: 40,
    borderColor: "#ED213A",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ED213A",
  },
  selectBtnText: {
    fontWeight: "bold",
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
