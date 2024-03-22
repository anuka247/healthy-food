import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const OvchiniiToroluud = ({ ovchindata }) => {
  return (
    <Link style={styles.button} href={"ovchiniiTorol/" + ovchindata.id} asChild>
      <TouchableOpacity style={styles.ovchinbox}>
        <Image source={{ uri: ovchindata.img }} style={styles.iconerhtenimg} />
        <Text style={styles.texterhten}>{ovchindata.name}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default OvchiniiToroluud;

const styles = StyleSheet.create({
  texterhten: { color: "#435058" },
  iconerhtenimg: {
    width: 70,
    height: 70,
  },
  button: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  ovchinbox: {
    gap: 5,
    width: 100,
    height: 110,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
