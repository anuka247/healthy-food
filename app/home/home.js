import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Link } from "expo-router";

// ZOLVOGOO OGOH hesgiin zuragnuud
import meat from "../img/meat.png";
import tsgaan from "../img/tsgaan.png";
import vegetables from "../img/vegetables.png";
import jims from "../img/jims.png";

import Zovolgoohunsnii from "../Zovolgoohunsnii";
import OvchiniiToroluud from "../OvchiniiToroluud";
export const zovolgoodata = [
  { id: 1, img: require("../img/meat.png"), name: "Махан бүтэгдэхүүн " },
  { id: 2, img: require("../img/tsgaan.png"), name: "Хүнсний ногоо" },
  { id: 3, img: require("../img/vegetables.png"), name: "Сүүн бүтэгдэхүүн" },
  { id: 4, img: require("../img/jims.png"), name: "Жимс жимсгэнэ" },
];
export const ovchindata = [
  {
    id: 1,
    img: require("../img/imgIconErhten/hodoodicon.png"),
    name: "Ходоод ",
  },
  { id: 2, img: require("../img/imgIconErhten/elegicon.png"), name: "Элэг" },
  { id: 3, img: require("../img/imgIconErhten/booricon.png"), name: "Бөөр" },
  { id: 4, img: require("../img/imgIconErhten/zurhicon.png"), name: "Зүрх" },
  {
    id: 5,
    img: require("../img/imgIconErhten/buduunGedesicon.png"),
    name: " Бүдүүн гэдэс",
  },
  {
    id: 6,
    img: require("../img/imgIconErhten/nariinGedesicon.png"),
    name: "Нарийн гэдэс",
  },
  { id: 7, img: require("../img/imgIconErhten/saharicon.png"), name: "Сахар" },
];

const Home = () => (
  <ScrollView>
    <View style={styles.container}>
      {/* tolgoi deed hseg  */}
      <View style={[styles.head, styles.shadow]}>
        <Text style={styles.texttitle}>Welcome back Anu</Text>
        <TouchableOpacity style={styles.iconprofile}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {/* search hseg  */}
      <View style={styles.main}>
        <View style={styles.search}>
          <Feather name="search" size={24} color="gray" />
          <TextInput></TextInput>
        </View>
      </View>

      {/* gol heseguud  */}
      <View>
        <View style={styles.iconuud}>
          <View style={styles.obchnitorol}>
            <FontAwesome5 name="hand-holding-heart" size={24} color="#008000" />
            <Text style={styles.text3}>Өвчний төрлүүд </Text>
          </View>
          <TouchableOpacity style={styles.delgerangui}>
            <Text style={styles.text2}>Дэлгэрэнгүй </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={styles.ovchinboxs}>
            {ovchindata.map((zuvulguu) => (
              <OvchiniiToroluud ovchindata={zuvulguu} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.iconuud}>
        <View style={styles.obchnitorol}>
          <FontAwesome5 name="hand-holding-heart" size={24} color="#008000" />
          <Text style={styles.text3}>Зөвөлгөө </Text>
        </View>
        <TouchableOpacity style={styles.delgerangui}>
          <Text style={styles.text2}>Дэлгэрэнгүй </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.zovolgooboxs}>
        {zovolgoodata.map((zovolgoo) => (
          <Zovolgoohunsnii zovolgoodata={zovolgoo} />
        ))}
      </View>
    </View>
  </ScrollView>
);

export default Home;

const styles = StyleSheet.create({
  button: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  texterhten: { color: "#435058" },

  iconerhtenimg: {
    width: 70,
    height: 70,
  },

  zovolgooboxs: {
    justifyContent: "space-around",
    gap: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  ovchinboxs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  ovchinbox: {
    gap: 5,
    width: 100,
    height: 110,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  iconuud: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  delgerangui: {},
  text2: {
    fontSize: 15,
    color: "#38b000",
  },
  text3: {
    fontSize: 18,
    paddingLeft: 10,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  obchnitorol: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  iconprofile: {
    flexDirection: "row",
  },
  texttitle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 5,
    gap: 10,
  },

  text: {
    fontSize: 15,
    color: "gray",
  },
  search: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  head: {
    width: 394,
    height: 83,
    borderRadius: 15,
    backgroundColor: "#73d383",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "#03045e",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

// <ImageBackground
// style={styles.img}
// source={{
//   uri: "https://www.northcoastmed.com/wp-content/uploads/2020/03/eat-right-march.jpg",
// }}
// >
// <Text style={styles.text1}> food </Text>
// </ImageBackground>
