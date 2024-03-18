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
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.suu}>
          <Image />
          <Text>suu</Text>
        </View>
        <View style={styles.airag}>
          <Text>airag</Text>
          <Image />
        </View>

        <View style={styles.tarag}>
          <Text>tarag</Text>
          <Image />
        </View>
      </View>
    </ScrollView>
  );
};

export default Zovolgoo;

const styles = StyleSheet.create({
  tarag: {
    width: 200,
    height: 200,
  },
  airag: {
    width: 200,
    height: 200,
  },
  suu: {
    width: 200,
    height: 200,
  },
  main: {},
  container: {
    padding: 5,
    gap: 10,

    flex: 1,
  },
});
