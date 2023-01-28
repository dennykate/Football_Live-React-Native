import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

import { sliderImageData } from "../utils/dummy";

const SliderImage = () => {
  return (
    <View style={styles.contaienr}>
      <Swiper
        autoplay
        loop
        autoplayTimeout={5}
        horizontal
        dot={<Dot />}
        activeDot={<ActiveDot />}
      >
        {sliderImageData.map((data, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            onPress={() => {
              Linking.openURL(data.url);
            }}
          >
            <Image
              style={styles.image}
              source={{
                uri: data.image,
              }}
            />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default SliderImage;

const styles = StyleSheet.create({
  contaienr: {
    width: "100%",
    height: 260,
    marginBottom: 20,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 240,
  },
});

const Dot = () => (
  <View
    style={{
      backgroundColor: "grey",
      width: 10,
      height: 10,
      transform: [{ translateY: 40 }],
      marginHorizontal: 5,
    }}
  ></View>
);

const ActiveDot = () => (
  <View
    style={{
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: "#ED213A",
      transform: [{ translateY: 40 }],
      marginHorizontal: 5,
    }}
  ></View>
);
