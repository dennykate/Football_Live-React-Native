import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import { rewardInterstitial } from "../utils/requestAds";

const DonateButton = () => {
  return (
    <TouchableOpacity
      style={styles.donateBtn}
      activeOpacity={0.5}
      onPress={() => {
        rewardInterstitial("ca-app-pub-3940256099942544/5224354917");
      }}
    >
      <Ionicons name="fast-food" size={22} color="black" />
    </TouchableOpacity>
  );
};

export default DonateButton;

const styles = StyleSheet.create({
  donateBtn: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 46,
    height: 46,
    backgroundColor: "#ED213A",
    borderRadius: 23,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
