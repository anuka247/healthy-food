import { Tabs } from "expo-router/tabs";
import { AntDesign, Feather } from "@expo/vector-icons";
export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home ",
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="zovolgoo"
        options={{
          title: "zovolgoo ",
          tabBarIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order ",
          tabBarIcon: () => <Feather name="menu" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting ",
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
