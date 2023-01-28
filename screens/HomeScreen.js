import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import SliderImage from "../components/SliderImage";
import DonateButton from "../components/DonateButton";
import LiveItemCard from "../components/LiveItemCard";
import { livesData } from "../utils/dummy";

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "NotoSansMyanmar-Bold": require("../assets/fonts/NotoSansMyanmar-Bold.ttf"),
    "DancingScript-Regular": require("../assets/fonts/DancingScript-Regular.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Light": require("../assets/fonts/Ubuntu-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#232526" />
      <Header main name={"Live Matches"} />
      <ScrollView>
        <SliderImage />

        <Text style={styles.liveMatches}>Live Matches</Text>

        {livesData.map((data, index) => (
          <LiveItemCard navigation={navigation} key={index} data={data} />
        ))}
      </ScrollView>

      <DonateButton />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    position: "relative",
  },
  liveMatches: {
    margin: 20,
    paddingBottom: 5,
    borderBottomColor: "#ED213A",
    borderBottomWidth: 2,
    width: 130,
    fontSize: 20,
    fontFamily: "Ubuntu-Bold",
  },
});
