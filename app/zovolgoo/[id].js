import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { getUndsenById } from "../data/service";

const Zovolgoo = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const zuvulguuId = params.id;
  const name = params.name;
  const bgcolor = params.bgColor;
  const txcolor = params.txColor;
  const [zuvulguuData, setZuvulguuData] = useState([]);

  console.log("+++++++++++++++++", zuvulguuData, zuvulguuId);

  useEffect(() => {
    getUndsenById(zuvulguuId).then((data) => {
      console.log("data", data);
      if (data) setZuvulguuData(data);
    });
  }, [zuvulguuId]);

  console.log("bg color", params);
  console.log("tx color", params);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: name,
      headerStyle: {
        backgroundColor: bgcolor,
      },
      headerTitleStyle: {
        color: txcolor,
      },

      // hea: color,
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        {zuvulguuData.map((obj) => (
          <View
            style={[
              styles.box,
              styles.shadow,
              { backgroundColor: "white", shadowColor: obj.color },
            ]}
          >
            <Text style={styles.titletext}>{obj.name} </Text>
            <Image source={{ uri: obj.img }} style={styles.Image} />
            <View style={styles.textbox}>
              <Text style={styles.text}>Хэмжээ: {obj.size}</Text>
              <Text style={styles.text}>Нүүрс ус:{obj.nuursUs} </Text>
              <Text style={styles.text}>Холестерин:{obj.holistrin} </Text>
              <Text style={styles.text}>Өөх тос: {obj.tos} </Text>
              <Text style={styles.text}>Уураг:{obj.uurag} </Text>
              <Text style={styles.text}>Илчлэг ккал: {obj.ilchleg} </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Zovolgoo;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 20,
  },
  textbox: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 15,
    color: "#14213d",
  },
  titletext: {
    fontSize: 20,
  },
  Image: {
    width: 90,
    height: 75,
    borderRadius: 15,
  },
  box: {
    borderRadius: 20,
    backgroundColor: "#edede9",
    width: 180,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  container: {
    padding: 5,
    gap: 10,
    flex: 1,
  },
});
