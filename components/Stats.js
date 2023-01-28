import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Stats = ({ homeTeam, awayTeam }) => {
  const { stats: homeTeamStats } = homeTeam;
  const { stats: awayTeamStats } = awayTeam;

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsTitle}>Total Stats</Text>
      <View style={styles.statsClubContainer}>
        <View style={styles.statsClub}>
          <Text style={{ fontFamily: "Roboto-Bold" }}>{homeTeam.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>{"( HOME )"}</Text>
        </View>
        <View style={styles.statsClub}>
          <Text style={{ fontFamily: "Roboto-Bold" }}>{awayTeam.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>{"( AWAY )"}</Text>
        </View>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.ballPosition}>{homeTeamStats.position}</Text>
        <Text style={{ fontWeight: "400" }}>Ball Position</Text>
        <Text style={styles.ballPosition}>{awayTeamStats.position}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.shots}</Text>
        <Text style={{ fontWeight: "400" }}>Shots</Text>
        <Text style={styles.otherStats}>{awayTeamStats.shots}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.onTarget}</Text>
        <Text style={{ fontWeight: "400" }}>On Target</Text>
        <Text style={styles.otherStats}>{awayTeamStats.onTarget}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.corners}</Text>
        <Text style={{ fontWeight: "400" }}>Corners</Text>
        <Text style={styles.otherStats}>{awayTeamStats.corners}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.offsides}</Text>
        <Text style={{ fontWeight: "400" }}>Offsides</Text>
        <Text style={styles.otherStats}>{awayTeamStats.offsides}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.fouls}</Text>
        <Text style={{ fontWeight: "400" }}>Fouls</Text>
        <Text style={styles.otherStats}>{awayTeamStats.fouls}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.yellowCards}</Text>
        <Text style={{ fontWeight: "400" }}>Yellow Cards</Text>
        <Text style={styles.otherStats}>{awayTeamStats.yellowCards}</Text>
      </View>
      <View style={styles.statsDetailContainer}>
        <Text style={styles.otherStats}>{homeTeamStats.redCards}</Text>
        <Text style={{ fontWeight: "400" }}>Red Cards</Text>
        <Text style={styles.otherStats}>{awayTeamStats.redCards}</Text>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  statsContainer: {
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  statsTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  statsClubContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  statsClub: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  statsDetailContainer: {
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
    borderBottomColor: "grey",
    borderWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: "2%",
  },
  ballPosition: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: "#ED213A",
    fontWeight: "900",
  },
  otherStats: {
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
});
