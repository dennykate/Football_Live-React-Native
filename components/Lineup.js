import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import HomeTeamShirt from "../assets/images/homeTeamShirt.png";
import AwayTeamShirt from "../assets/images/awayTeamShirt.png";
import { fetchLineup } from "../utils/fetchData";

const Lineup = ({ lineupSource }) => {
  const [homeTeam, setHomeTeam] = useState([]);
  const [awayTeam, setAwayTeam] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { homeTeamLineup, awayTeamLineup } = await fetchLineup(lineupSource);

    setHomeTeam(homeTeamLineup);
    setAwayTeam(awayTeamLineup);
  };

  return (
    <View style={styles.container}>
      <View style={styles.clubContainer}>
        <View style={styles.club}>
          <Text style={{ fontFamily: "Roboto-Bold" }}>Brighton</Text>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>{"( HOME )"}</Text>
        </View>
        <View style={styles.club}>
          <Text style={{ fontFamily: "Roboto-Bold" }}>Chelsea</Text>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>{"( AWAY )"}</Text>
        </View>
      </View>

      <View style={styles.lineupContainer}>
        <View style={styles.lineupPlayers}>
          {homeTeam.length > 0 &&
            homeTeam.map((player, index) => (
              <View key={index} style={styles.playerContainer}>
                <View style={styles.playerNumberContainer}>
                  <Image source={HomeTeamShirt} style={styles.shirt} />
                  <View style={styles.playerNumber}>
                    <Text style={{ fontWeight: "bold", fontSize: 11 }}>
                      {player.number}
                    </Text>
                  </View>
                </View>
                <Text style={styles.playerName}>{player.name}</Text>
              </View>
            ))}
        </View>

        <View style={[styles.lineupPlayers, { paddingLeft: 20 }]}>
          {awayTeam.length > 0 &&
            awayTeam.map((player, index) => (
              <View key={index} style={styles.playerContainer}>
                <View style={styles.playerNumberContainer}>
                  <Image source={AwayTeamShirt} style={styles.shirt} />
                  <View style={styles.playerNumber}>
                    <Text style={{ fontWeight: "bold", fontSize: 11 }}>
                      {player.number}
                    </Text>
                  </View>
                </View>
                <Text style={styles.playerName}>{player.name}</Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default Lineup;

const styles = StyleSheet.create({
  container: { width: "100%", marginVertical: 20 },
  clubContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  club: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  lineupContainer: {
    width: "95%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  lineupPlayers: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  playerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  playerNumberContainer: {
    width: 30,
    height: 30,
    position: "relative",
  },
  shirt: {
    width: "100%",
    height: "100%",
  },
  playerNumber: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  playerName: {
    marginLeft: 5,
    fontFamily: "Ubuntu-Medium",
  },
});
