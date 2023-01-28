import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ItemCard = ({ navigation, data, skills }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (skills) {
            navigation.navigate("SkillDetailScreen", data);
            return;
          }
          navigation.navigate("DetailScreen", data);
        }}
      >
        <Image
          source={{
            uri: data.poster,
          }}
          style={styles.image}
        />

        {skills ? (
          <Text style={styles.skillsTitle}>
            {data.title.length > 40
              ? data.title.slice(0, 40) + "..."
              : data.title}
          </Text>
        ) : (
          <Text style={styles.leagueTitle}>{data.league}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 250,
    alignSelf: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 220,
  },
  leagueTitle: {
    textAlign: "center",
    fontWeight: "200",
    fontSize: 13,
  },
  skillsTitle: {
    margin: 5,
    fontSize: 15,
    fontFamily: "Roboto-Bold",
  },
});
