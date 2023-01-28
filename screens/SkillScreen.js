import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";
import { AdMobBanner } from "expo-ads-admob";

import { skillsData } from "../utils/dummy";
import ItemCard from "../components/ItemCard";
import Header from "../components/Header";
import DonateButton from "../components/DonateButton";

const SkillScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#232526" />
      <Header name={"Skills Clips"} />

      <ScrollView style={styles.cardContainer}>
        {skillsData.reverse().map((data, index) => {
          return (
            <View key={index}>
              <ItemCard navigation={navigation} data={data} skills />

              {!!(index % 2) && (
                <AdMobBanner
                  bannerSize="banner"
                  adUnitID={"ca-app-pub-3940256099942544/6300978111"}
                  servePersonalizedAds
                  style={{ alignSelf: "center", marginBottom: 5 }}
                />
              )}
            </View>
          );
        })}
      </ScrollView>

      <DonateButton />
    </View>
  );
};

export default SkillScreen;

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
