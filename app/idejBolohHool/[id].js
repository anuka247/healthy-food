import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

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
    <ScrollView>
      <View>
        <Text>idejBolohHool</Text>
      </View>
    </ScrollView>
  );
};

export default IdejBolohHool;

const styles = StyleSheet.create({});
