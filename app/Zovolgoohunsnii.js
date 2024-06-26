import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Zovolgoohunsnii = ({ UndsenData }) => {
  console.log(UndsenData);
  return (
    <Link
      href={{
        pathname: "zovolgoo/[id]",
        params: { ...UndsenData },
      }}
      asChild
    >
      <TouchableOpacity style={styles.zovolgoobox}>
        <Image source={{ uri: UndsenData.img }} style={styles.Image} />
        <Text style={styles.textname}> {UndsenData.name}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Zovolgoohunsnii;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",

    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  textname: {
    fontSize: 16,
    color: "#435058",
  },
  zovolgoobox: {
    width: 187,
    height: 135,
    borderRadius: 15,
    marginBottom: 10,
    margin: 5,
  },
  Image: {
    width: 179,
    height: 119,
    borderRadius: 15,
  },
});
