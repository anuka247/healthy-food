import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { zovolgoodata } from "../home/home";

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
    <ScrollView>
      <View>
        <Text>hiii</Text>
        <Text>hiii</Text>
        <Text>hiii</Text>
      </View>
    </ScrollView>
  );
};

export default Zovolgoo;

const styles = StyleSheet.create({});
