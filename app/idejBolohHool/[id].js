import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { hoolniidata } from "../home/zovolgoo";
import { FontAwesome5 } from "@expo/vector-icons";

const IdejBolohHool = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const hoolniiId = params.id;

  const HoolniiData = hoolniidata.find((obj) => obj.id == hoolniiId);
  console.log(HoolniiData);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: HoolniiData.name,
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.obchnitorol]}>
        <FontAwesome5 name="hand-holding-heart" size={24} color="#008000" />
        <Text style={styles.text3}>Идэж болох хоол хүнснүүд Зөвөлгөө</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.titletext}>Үр тариа</Text>
      </View>
    </ScrollView>
  );
};

export default IdejBolohHool;

const styles = StyleSheet.create({
  main: {
    gap: 10,
    padding: 10,
  },
  titletext: {
    fontSize: 16,
  },
  text3: {
    fontSize: 18,
    paddingLeft: 10,
  },
  obchnitorol: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  container: {
    flex: 1,
    padding: 5,
    gap: 10,
  },
});
