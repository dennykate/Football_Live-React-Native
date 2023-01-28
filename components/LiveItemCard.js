import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const LiveItemCard = ({ navigation, data }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate("LiveDetailScreen", data);
        }}
      >
        <Image
          source={{
            uri: data.poster,
          }}
          style={styles.image}
        />

        <View style={styles.dateContainer}>
          <View style={styles.matchData}>
            <Ionicons name="calendar" size={15} color="grey" />
            <Text style={styles.matchDataText}>{data.date}</Text>
          </View>
          <View style={styles.matchData}>
            <Ionicons name="alarm" size={15} color="grey" />
            <Text style={styles.matchDataText}>{data.time}</Text>
          </View>
          <View style={styles.matchData}>
            <Ionicons name="planet" size={15} color="grey" />
            <Text style={styles.matchDataText}>{data.stadium}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LiveItemCard;

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
  dateContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 5,
    marginTop: 1,
  },
  matchData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  matchDataText: {
    fontFamily: "Ubuntu-Light",
    color: "grey",
    fontSize: 13,
    marginLeft: 2,
  },
});
