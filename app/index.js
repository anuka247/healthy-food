import { StyleSheet, Text, View } from "react-native";
import { Redirect, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Link } from "expo-router";

const Page = () => {
  return <Redirect href={"/home"} />;
};

export default Page;

const styles = StyleSheet.create({});
