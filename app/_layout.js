import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: "home",
        headerStyle: {},
        headerShown: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="hodood"
        options={{
          // Set the presentation mode to edit for our edit route.
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="idejBolohHool"
        options={{
          // Set the presentation mode to edit for our edit route.
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Zovolgoo"
        options={{
          // Set the presentation mode to edit for our edit route.
          presentation: "modal",
          title: "Хүнсний калари ",
        }}
      />
      {/* <Stack.Screen name="home" options={{}} /> */}
    </Stack>
  );
}
