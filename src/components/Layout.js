import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Layout = ({ header, children }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>{header}</View>
      <View style={styles.mainContainer}>{children}</View>
    </ScrollView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    // top: -10,
    // bottom: -10,
    // backgroundColor: "red",
  },
  mainContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // top: -15,
    marginTop: -15,
    padding: 8,
    flex: 1,
    // backgroundColor: "red",
  },
  container: {
    flex: 1,
    gap: 10,
    // backgroundColor: "gray",
  },
});
