import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ovchindata } from "../home/home";

const OvchiniiTorol = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const TurulId = params.id;

  const ovchinData = ovchindata.find((obj) => obj.id == TurulId);
  console.log(ovchinData);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: ovchinData.name,
    });
  }, [navigation]);
  return (
    <View>
      <Text>OvchiniiTorol</Text>
    </View>
  );
};

export default OvchiniiTorol;

const styles = StyleSheet.create({});
