import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fdfcf7",
          borderTopColor: "rgba(0,0,0,0.05)",
          paddingTop: 8,
          height: 80,
        },
        tabBarActiveTintColor: "#ec9213",
        tabBarInactiveTintColor: "#897961",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: 1,
        },
      }}
    >
      <Tabs.Screen
        name="library"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="read"
        options={{
          title: "Read",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bolt" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insights" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
