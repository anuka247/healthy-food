import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import chuluuna from "../img/imgHospital/chuluuna.png";
import setsen from "../img/imgHospital/setsen.png";
import biriland from "../img/imgHospital/biriland.png";
import { Colors } from "../../src/constants";
const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.obchnitorol}>
        <FontAwesome5 name="hand-holding-heart" size={24} color="#008000" />
        <Text style={styles.text3}> Мэдээлэл </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.asuult1}>
          <Text>arhi</Text>
        </View>
        <View style={styles.asuult1}>
          <Text>tamhi</Text>
        </View>
        <View style={styles.asuult1}>
          <Text>buruu hoololt</Text>
        </View>
        <View style={styles.asuult1}>
          <Text>ogloonii tsai</Text>
        </View>
        <View style={styles.asuult1}>
          <Text>zovhoololt</Text>
        </View>
        <View style={styles.asuult1}>
          <Text>cola</Text>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  asuult1: {
    borderWidth: 1,
    width: 350,
    height: 150,
    borderRadius: 15,
  },
  main: {
    gap: 10,
    flexDirection: "column",
  },
  hureetailber: {
    padding: 5,
    width: 280,
    height: 100,
  },
  text5: {
    fontSize: 13,
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  text2: {
    fontSize: 16,
  },
  text: {
    color: "gray",
    fontSize: 14,
  },
  holboobarih: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  namehos: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
  },
  imgHospital: {
    width: 120,
    height: 120,
    borderRadius: 500,
  },
  hospital: {
    padding: 5,
    marginBottom: 15,
    width: 400,
    backgroundColor: "#73d383",
    height: 170,
    borderRadius: 10,
  },
  text3: {
    fontSize: 18,
    paddingLeft: 10,
  },
  container: {
    padding: 5,
    gap: 10,

    flex: 1,
  },
  obchnitorol: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

{
  /* <View style={styles.obchnitorol}>
        <FontAwesome5 name="hand-holding-heart" size={24} color="#008000" />
        <Text style={styles.text3}> Эмнэлэг </Text>
      </View>
      <View style={styles.hospital}>
        <View style={styles.row}>
          <Image source={chuluuna} style={styles.imgHospital} />
          <View style={styles.column}>
            <Text style={styles.namehos}>Чулуунаа Эмнэлэг</Text>
            <Text>Мэдрэл, Нуруу нугас, Сэтгэцийн эмнэлэг</Text>
          </View>
        </View>
        <View style={styles.holboobarih}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.text}>9011 7529 </Text>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.text}>Ажлын өдөр 9:00-4:00 Бямба 9:00-2:00</Text>
        </View>
      </View>
      <View style={styles.hospital}>
        <View style={styles.row}>
          <Image source={setsen} style={styles.imgHospital} />
          <View style={styles.column}>
            <Text style={styles.namehos}>СЭЦЭН МЕД Эмнэлэг</Text>
            <View style={styles.hureetailber}>
              <Text style={styles.text5}>
                Эмэгтэйчүүд, Мэдрэлийн ,Шүдний , Сэргээн засах, хөдөлгөөн заслын
                үзлэг зөвлөгөө Бариа засал Өндөр даралтат хүчилтөрөгч эмчилгээ
                зэрэг үйлчилгээг явуулж байна.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.holboobarih}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.text}>8955 1605 </Text>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.text}>Ажлын өдөр 9:00-5:00 Бямба 10:00-5:00</Text>
        </View>
      </View>
      <View style={styles.hospital}>
        <View style={styles.row}>
          <Image source={biriland} style={styles.imgHospital} />
          <View style={styles.column}>
            <Text style={styles.namehos}>Бриллиант Эмнэлэг</Text>
            <View style={styles.hureetailber}>
              <Text style={styles.text5}>
                Хөнгөвчлөх эмчилгээ- Hospice, Дүрс оношилгоо- Компьютерт
                Томографи- СТ, Эхо, Лаборатори, Дотрын нэгдсэн эмнэлэг MRI
                оношлогоог ЭМД-аар 24 цагаар хийдэг.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.holboobarih}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.text}>: 7609 6666 </Text>
          <Feather name="clock" size={24} color="black" />
          <Text style={styles.text}>Ажлын өдөр, Амралтын өдөр </Text>
        </View>
      </View> */
}
