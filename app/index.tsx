import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";
import { Text, Button } from "@/components";

export default function HomeScreen() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center px-4">
        <Text variant="h1" className="mb-4">
          Welcome to KuikReads
        </Text>
        <Text variant="body" className="text-text-muted mb-8">
          You are signed in
        </Text>
        <Button variant="secondary" onPress={handleSignOut}>
          Sign Out
        </Button>
      </View>
    </SafeAreaView>
  );
}
