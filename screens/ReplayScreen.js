import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";

import { replayData } from "../utils/dummy";
import { AdMobBanner } from "expo-ads-admob";
import DonateButton from "../components/DonateButton";

const ReplayScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#232526" />
      <Header name={"Replays and Highlights"} />

      <ScrollView style={styles.cardContainer}>
        {replayData.reverse().map((data, index) => (
          <View key={index}>
            <ItemCard navigation={navigation} data={data} />
            {!!(index % 2) && (
              <AdMobBanner
                bannerSize="banner"
                adUnitID={"ca-app-pub-3940256099942544/6300978111"}
                servePersonalizedAds
                style={{ alignSelf: "center", marginBottom: 5 }}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <DonateButton />
    </View>
  );
};

export default ReplayScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    position: "relative",
  },
  cardContainer: {
    width: "100%",
  },
});
