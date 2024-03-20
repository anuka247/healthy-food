import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { zovolgoodata } from "../home/home";
import { suunButeegdenhenData } from "../data";
import suu from "../img/imgPngKalori/tsagaanIdeepng/suu.png";
import aaruul from "../img/imgPngKalori/tsagaanIdeepng/aaruulkalor.png";

import aarts from "../img/imgPngKalori/tsagaanIdeepng/aarts.png";
import byslag from "../img/imgPngKalori/tsagaanIdeepng/cheese1.png";
import tarag from "../img/imgPngKalori/tsagaanIdeepng/tarag.png";
import airag from "../img/imgPngKalori/tsagaanIdeepng/airag1.png";
import tsotsgii from "../img/imgPngKalori/tsagaanIdeepng/tsotsgii.png";

const Zovolgoo = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const zuvulguuId = params.id;

  const zuvulguuData = zovolgoodata.find((obj) => obj.id == zuvulguuId);
  console.log(zuvulguuData);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: zuvulguuData.name,
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Сүү </Text>
          <Image source={suu} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус: 4.8 </Text>
            <Text style={styles.text}>Холестерин: 11 </Text>
            <Text style={styles.text}>Өөх тос: 3.5 </Text>
            <Text style={styles.text}>Уураг: 3.3 </Text>
            <Text style={styles.text}>Илчлэг ккал: 64 </Text>
          </View>
        </View>

        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Ааруул </Text>
          <Image source={aaruul} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус:12.7 </Text>
            <Text style={styles.text}>Холестерин: - </Text>
            <Text style={styles.text}>Өөх тос:29.5 </Text>
            <Text style={styles.text}>Уураг: 9.7 </Text>
            <Text style={styles.text}>Илчлэг ккал: 474.8 </Text>
          </View>
        </View>

        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Айраг </Text>
          <Image source={airag} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус:12.7 </Text>
            <Text style={styles.text}>Холестерин: - </Text>
            <Text style={styles.text}>Өөх тос:29.5 </Text>
            <Text style={styles.text}>Уураг: 9.7 </Text>
            <Text style={styles.text}>Илчлэг ккал: 474.8 </Text>
          </View>
        </View>
        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Тараг </Text>
          <Image source={tarag} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус:4.8 </Text>
            <Text style={styles.text}>Холестерин: - </Text>
            <Text style={styles.text}>Өөх тос: 3.5 </Text>
            <Text style={styles.text}>Уураг: 3.3 </Text>
            <Text style={styles.text}>Илчлэг ккал: 64 </Text>
          </View>
        </View>
        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Аарц </Text>
          <Image source={aarts} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус: 4.8 </Text>
            <Text style={styles.text}>Холестерин: - </Text>
            <Text style={styles.text}>Өөх тос: 3.5 </Text>
            <Text style={styles.text}>Уураг: 3.3 </Text>
            <Text style={styles.text}>Илчлэг ккал: 64 </Text>
          </View>
        </View>
        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Бяслаг </Text>
          <Image source={byslag} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус: 4.8 </Text>
            <Text style={styles.text}>Холестерин: - </Text>
            <Text style={styles.text}>Өөх тос: 3.5 </Text>
            <Text style={styles.text}>Уураг: 3.3 </Text>
            <Text style={styles.text}>Илчлэг ккал: 64 </Text>
          </View>
        </View>
        <View style={[styles.box, styles.shadow]}>
          <Text style={styles.titletext}> Цөцгий </Text>
          <Image source={tsotsgii} style={styles.Image} />
          <View style={styles.textbox}>
            <Text style={styles.text}>Хэмжээ: 100 гр </Text>
            <Text style={styles.text}>Нүүрс ус: 4.8 </Text>
            <Text style={styles.text}>Холестерин: - </Text>
            <Text style={styles.text}>Өөх тос: 3.5 </Text>
            <Text style={styles.text}>Уураг: 3.3 </Text>
            <Text style={styles.text}>Илчлэг ккал: 64 </Text>
          </View>
        </View>
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
    elevation: 10,
  },
  textbox: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 15,
    color: "#435058",
  },
  titletext: {
    fontSize: 20,
  },
  Image: {
    width: 75,
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
