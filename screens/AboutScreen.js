import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";

import Logo from "../assets/images/logo.jpg";
import Facebook from "../assets/images/facebook-logo.png";
import Messenger from "../assets/images/messenger-logo.png";
import Telegram from "../assets/images/telegram-logo.png";
import Youtube from "../assets/images/youtube-logo.png";
import { socialsData } from "../utils/dummy";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#232526" />
      <Header name={"About"} />

      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.socialContainer}>
          <SocialIcon icon={Facebook} source={socialsData.facebook} />

          <SocialIcon icon={Messenger} source={socialsData.messenger} />

          <SocialIcon icon={Telegram} source={socialsData.telegram} />

          <SocialIcon icon={Youtube} source={socialsData.youtube} />
        </View>

        <Lottie
          source={require("../assets/animations/donate.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  logoContainer: {
    width: "100%",
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  socialContainer: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  lottie: { width: 250, alignSelf: "center", backgroundColor: "transparent" },
});

const SocialIcon = ({ icon, source }) => (
  <TouchableOpacity
    onPress={() => {
      Linking.openURL(source);
    }}
    activeOpacity={0.9}
  >
    <Image source={icon} style={styles.socialIcon} />
  </TouchableOpacity>
);
