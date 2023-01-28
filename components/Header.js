import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Logo from "../assets/images/logo.jpg";

const Header = ({ main, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {main && <Image source={Logo} style={styles.logo} />}
        <Text style={styles.logoText}>
          <Text style={{ color: "#ED213A", fontSize: 25 }}>
            {name.slice(0, 1)}
          </Text>
          {name.slice(1, name.length)}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232526",
    paddingTop: 20,
  },
  headerContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#232526",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logoText: {
    fontSize: 17,
    fontFamily: "Roboto-Bold",
    letterSpacing: 0.3,
  },
});
