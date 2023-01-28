import axios from "axios";
import * as cheerio from "cheerio";

export const fetchGoogleDrive = async (url) => {
  try {
    const result = await axios.get(url);
    const $ = cheerio.load(result.data);
    const link = $("#downloadForm").attr("action");

    return link;
  } catch (error) {
    return undefined;
  }
};

export const fetchMediafire = async (url) => {
  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  const link = $(".popsok").attr("href");

  return link;
};

export const fetchLeagueTable = async (league) => {
  const url = league;

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let table = [];

  $(".standings__row--link", result.data).each((index, element) => {
    const name = $(element).children("a").attr("aria-label");
    const role = index + 1;
    const logo = $(element)
      .children("a")
      .children(".standings__team")
      .children(".standings__team-logo")
      .children(".entity-logo")
      .children("div")
      .children("picture")
      .children("source")
      .attr("srcset");
    const totalStats = $(element)
      .children("a")
      .children(".standings__cell--numeric")
      .text()
      .split(" ");
    const played = totalStats[3];
    const won = totalStats[5];
    const draw = totalStats[7];
    const lose = totalStats[9];
    const goalDifferent = totalStats[11];
    const points = totalStats[12];

    table.push({
      logo,
      name,
      role,
      played,
      won,
      draw,
      lose,
      goalDifferent,
      points,
    });
  });

  return table;
};

export const fetchLineup = async (url) => {
  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let homeTeamLineup = [];
  let awayTeamLineup = [];

  $(".LineupFormations-player", result.data).each((index, element) => {
    const nameAndNumber = $(element)
      .children(".LineupFormations-player-text")
      .children("span")
      .text();
    const name = nameAndNumber.split(". ")[1];
    const number = nameAndNumber.split(".")[0];

    if (index <= 10) {
      homeTeamLineup.push({ name, number });
    } else {
      awayTeamLineup.push({ name, number });
    }
  });

  return { homeTeamLineup, awayTeamLineup };
};

export const fetchChampionLeagueTable = async (league) => {
  const url = league;

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let table = [
    { name: "Group A", table: [] },
    { name: "Group B", table: [] },
    { name: "Group C", table: [] },
    { name: "Group D", table: [] },
    { name: "Group E", table: [] },
    { name: "Group F", table: [] },
    { name: "Group G", table: [] },
    { name: "Group H", table: [] },
  ];

  $(".standings__row--link", result.data).each((index, element) => {
    const name = $(element).children("a").attr("aria-label");
    const role = index + 1;
    const logo = $(element)
      .children("a")
      .children(".standings__team")
      .children(".standings__team-logo")
      .children(".entity-logo")
      .children("div")
      .children("picture")
      .children("source")
      .attr("srcset");
    const totalStats = $(element)
      .children("a")
      .children(".standings__cell--numeric")
      .text()
      .split(" ");
    const played = totalStats[3];
    const won = totalStats[5];
    const draw = totalStats[7];
    const lose = totalStats[9];
    const goalDifferent = totalStats[11];
    const points = totalStats[12];

    if (index < 4) {
      table[0].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 8) {
      table[1].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 12) {
      table[2].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 16) {
      table[3].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 20) {
      table[4].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 24) {
      table[5].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 28) {
      table[6].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    } else if (index < 32) {
      table[7].table.push({
        logo,
        name,
        role,
        played,
        won,
        draw,
        lose,
        goalDifferent,
        points,
      });
    }
  });

  return table;
};
