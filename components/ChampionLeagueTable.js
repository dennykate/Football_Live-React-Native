import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react-native";

import { fetchChampionLeagueTable, fetchLeagueTable } from "../utils/fetchData";

const ChampionLeagueTableStanding = ({ link }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    fetchData();
  }, [link]);

  const fetchData = async () => {
    const tableData = await fetchChampionLeagueTable(link);
    console.log(tableData);
    setData(tableData);
  };

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <>
          {data.map((teamData, index) => (
            <View key={index} style={{ marginBottom: 20 }}>
              <View style={styles.tableRowContainer} key={index}>
                <View style={[styles.clubName, { width: "52%" }]}>
                  <Text style={styles.ubuntu}>{teamData.name}</Text>
                </View>
                <View style={styles.matchStats}>
                  <Text style={styles.ubuntu}>PL</Text>
                </View>
                <View style={styles.matchStats}>
                  <Text style={styles.ubuntu}>W/D/L</Text>
                </View>
                <View style={styles.matchStats}>
                  <Text style={styles.ubuntu}>GD</Text>
                </View>
                <View style={styles.matchStats}>
                  <Text style={styles.ubuntu}>PTS</Text>
                </View>
              </View>

              {teamData.table.map((team, index) => (
                <View
                  style={
                    index % 2
                      ? styles.greyTableRowContainer
                      : styles.tableRowContainer
                  }
                  key={index}
                >
                  <View style={styles.row}>
                    <Text style={styles.ubuntu}>{team.role}</Text>
                  </View>
                  <View style={styles.logoContainer}>
                    <Image source={{ uri: team.logo }} style={styles.logo} />
                  </View>
                  <View style={styles.clubName}>
                    <Text style={styles.ubuntu}>{team.name}</Text>
                  </View>
                  <View style={styles.matchStats}>
                    <Text style={styles.ubuntu}>{team.played}</Text>
                  </View>
                  <View style={styles.matchStats}>
                    <Text style={styles.ubuntu}>
                      {team.won}/{team.draw}/{team.lose}
                    </Text>
                  </View>
                  <View style={styles.matchStats}>
                    <Text style={styles.ubuntu}>{team.goalDifferent}</Text>
                  </View>
                  <View style={styles.matchStats}>
                    <Text style={styles.ubuntu}>{team.points}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </>
      ) : (
        <View style={styles.lottieContainer}>
          <Lottie
            source={require("../assets/animations/loading-letter.json")}
            style={styles.lottie}
            autoPlay
            loop
          />
        </View>
      )}
    </View>
  );
};

export default ChampionLeagueTableStanding;

const styles = StyleSheet.create({
  container: {
    width: "98%",
    alignSelf: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
  tableRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  greyTableRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f77e",
    paddingVertical: 8,
  },
  row: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
  },
  clubName: {
    width: "32%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  matchStats: {
    width: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ubuntu: { fontFamily: "Ubuntu-Medium", fontSize: 13 },
  lottieContainer: {
    width: "100%",
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 250,
  },
});
