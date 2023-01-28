import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AdMobBanner } from "expo-ads-admob";

import Header from "../components/Header";
import { leagueTitleData } from "../utils/dummy";
import TableStanding from "../components/TableStanding";
import ChampionLeagueTableStanding from "../components/ChampionLeagueTable";

const TableScreen = () => {
  const [league, setLeague] = useState("Premier League");
  const [link, setLink] = useState(
    "https://onefootball.com/en/competition/premier-league-9/table"
  );

  useEffect(() => {
    setLeague("Premier League");
  }, []);

  return (
    <View style={styles.container}>
      <Header name={"Table Standing"} />

      <ScrollView>
        <View style={styles.leagueTitleContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {leagueTitleData.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={styles.leagueTitle}
                onPress={() => {
                  setLeague(data.name);
                  setLink(data.link);
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={
                    league == data.name
                      ? styles.activeLeagueTitleText
                      : styles.leagueTitleText
                  }
                >
                  {data.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <AdMobBanner
          bannerSize="banner"
          adUnitID={"ca-app-pub-3940256099942544/6300978111"}
          servePersonalizedAds
          style={{ alignSelf: "center", marginVertical: 10 }}
        />

        <Text style={styles.standing}>{league} Table</Text>

        {league == "Champion League" ? (
          <ChampionLeagueTableStanding link={link} />
        ) : (
          <TableStanding link={link} />
        )}
      </ScrollView>
    </View>
  );
};

export default TableScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  leagueTitleContainer: {
    marginTop: 25,
  },
  leagueTitle: {
    marginHorizontal: 30,
  },
  leagueTitleText: {
    fontWeight: "bold",
    paddingBottom: 10,
    fontSize: 15,
  },
  activeLeagueTitleText: {
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomColor: "#ED213A",
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    color: "#ED213A",
    fontSize: 15,
  },
  standing: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    marginTop: 30,
    fontWeight: "600",
    textAlign: "center",
  },
});
