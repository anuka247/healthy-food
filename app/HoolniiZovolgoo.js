import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const HoolniiZovolgoo = ({ hoolniidata }) => {
  console.log("data.img", hoolniidata.img);

  return (
    <ScrollView style={styles.container}>
      <Link
        style={styles.button}
        href={"/idejBolohHool/" + hoolniidata.id}
        asChild
      >
        <TouchableOpacity style={styles.box}>
          <Image source={hoolniidata.img} style={styles.img} />
          <Text style={styles.textname}> {hoolniidata.name}</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default HoolniiZovolgoo;

const styles = StyleSheet.create({
  textname: {
    color: "#435058",
  },
  img: {
    width: 180,
    height: 119,
    borderRadius: 15,
  },
  menu: {
    marginRight: 10,
  },
  box: {
    width: 187,
    height: 135,
    borderRadius: 15,
    margin: 5,
  },
  container: {
    gap: 10,
  },
  button: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
});
