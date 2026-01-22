import { Redirect } from "expo-router";

export default function Index() {
  // For now, redirect to auth screen
  // Later this will check if user is authenticated
  return <Redirect href="/auth" />;
}
