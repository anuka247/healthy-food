import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../src/components/Layout";
import { Ionicons } from "@expo/vector-icons";

const ImgBackground = require("../img/healthpro.png");
const setting = () => {
  return (
    <Layout
      header={<Image source={ImgBackground} style={styles.ImageBackground} />}
    >
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default setting;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    gap: 10,
  },
  titletext: {
    fontSize: 23,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "#BFEA7C",
  },
});
