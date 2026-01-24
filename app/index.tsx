import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to the main tabs (read screen)
  return <Redirect href="/(tabs)/read" />;
}
