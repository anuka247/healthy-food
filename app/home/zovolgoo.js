import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import HoolniiZovolgoo from "../HoolniiZovolgoo";

const ImgBackground = require("../img/food.jpg");

export const hoolniidata = [
  {
    id: 1,
    img: require("../img/imgzovlgo/sahar.png"),
    name: "Чихрийн шижин",
  },
  { id: 2, img: require("../img/imgzovlgo/hodood.png"), name: "Ходоод" },
  { id: 3, img: require("../img/imgzovlgo/eleg.png"), name: "Элэг" },
  { id: 4, img: require("../img/imgzovlgo/boor.png"), name: "Бөөр" },
  { id: 5, img: require("../img/imgzovlgo/zurh.png"), name: "Зүрх, судас" },
  {
    id: 6,
    img: require("../img/imgzovlgo/tovmedrel.png"),
    name: "Төв мэдрэл, Захын мэдрэл",
  },
  { id: 7, img: require("../img/imgzovlgo/tsos.png"), name: "Цөс" },
  {
    id: 8,
    img: require("../img/imgzovlgo/nariin.png"),
    name: "Нарийн гэдэс",
  },
  {
    id: 9,
    img: require("../img/imgzovlgo/buduun.png"),
    name: "Бүдүүн гэдэс",
  },
  { id: 10, img: require("../img/imgzovlgo/uushig.png"), name: "Уушиг" },
];

const Zovolgoo = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={ImgBackground}
        style={styles.ImageBackground}
      ></ImageBackground>

      <View style={styles.obchnitorol}>
        <FontAwesome5 name="hand-holding-heart" size={24} color="#008000" />
        <Text style={styles.text3}>
          Зөвшөөрсөн ба Зөвшөөрөөгүй хоол хүнснүүд
        </Text>
      </View>

      <View style={styles.menuhead}>
        {hoolniidata.map((zovolgoo) => (
          <HoolniiZovolgoo hoolniidata={zovolgoo} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Zovolgoo;

const styles = StyleSheet.create({
  textname: {
    color: "#435058",
  },
  text3: {
    fontSize: 18,
    paddingLeft: 10,
  },
  obchnitorol: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
  },
  img: {
    width: 180,
    height: 119,
    borderRadius: 15,
  },
  ImageBackground: {
    width: 415,
    height: 141,
  },
  box: {
    width: 187,
    height: 135,
    borderRadius: 15,
    margin: 5,
  },
  container: {
    flex: 1,
    gap: 10,
  },
  menuhead: {
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menu: {
    marginRight: 10,
  },
});

// <View style={styles.desc}>
//           {first3Like?.map((p, i) => (
//             <Image
//               key={p.profileImg + i}
//               source={{ uri: p.profileImg }}
//               style={styles.profileImg}
//             />
//           ))}
